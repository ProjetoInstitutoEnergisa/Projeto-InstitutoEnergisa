import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';
import { FormContainer, FormTitle, Form, FormField, Label, Input, Checkbox, CloseButton, Select,
  ErrorMessage, SubmitButton, DisplayData } from './styles';

const FormularioInscricao = ({ closeModal }) => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const { userId } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/usuarios/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const formData = new FormData();
      formData.append('descricao_proposta', data.descricao_proposta[0]);

      // Adicionar todas as fotos/imagens ao FormData
      for (let i = 0; i < data.fotos_imagens.length; i++) {
        formData.append('fotos_imagens', data.fotos_imagens[i]);
      }

      // Envia os arquivos para o backend
      const fileResponse = await axios.post('http://localhost:3000/api/projetosAcoes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo para multipart/form-data
        },
      });

      // Extrai as URLs dos arquivos da resposta
      const descricaoPropostaUrl = fileResponse.data.descricao_proposta;
      const fotosImagensUrl = fileResponse.data.fotos_imagens;

      // Cria o objeto com os dados do projeto, incluindo as URLs dos arquivos
      const formDataProjeto = {
        id_usuario: userId,
        nome_projetoacao: data.nome_projetoacao,
        descricao_proposta: descricaoPropostaUrl,
        fotos_imagens: fotosImagensUrl,
        linguagem_artistica: data.linguagem_artistica,
        duvidas: data.duvidas,
        nome_espaco: data.nome_espaco,
        endereco_espaco: data.endereco_espaco,
        termo: data.termo,
      };
      console.log(formDataProjeto);
      // Envia os dados do projeto para o backend
      await axios.post('http://localhost:3000/api/projetosAcoes', formDataProjeto);

      alert('Projeto cadastrado com sucesso!');
      closeModal(); // Fecha o modal após o envio
      reset(); // Limpa o formulário após o envio
    }  catch (error) {
      if (error.response) {
        // A requisição foi feita e o servidor respondeu com um status de erro (ex: 400)
        console.error('Erro de validação:', error.response.data);
        alert('Erro ao cadastrar projeto: ' + error.response.data.error); // Exibe a mensagem de erro
      } else if (error.request) {
        // A requisição foi feita mas nenhuma resposta foi recebida
        console.error('Erro na requisição:', error.request);
        alert('Erro ao cadastrar projeto. Verifique sua conexão com a internet.');
      } else {
        // Algo aconteceu ao configurar a requisição que disparou um erro
        console.error('Erro ao configurar a requisição:', error.message);
        alert('Erro ao cadastrar projeto. Por favor, tente novamente mais tarde.');
      }
    }
  };

  return (
    <FormContainer>
      <FormTitle>FORMULÁRIO DE SOLICITAÇÃO</FormTitle>
      <CloseButton type="button" onClick={closeModal}>X</CloseButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <div>
            <Label>Nome Completo:</Label>
            <DisplayData>{userData?.nome_completo}</DisplayData>
          </div>
          <div>
            <Label>Cidade/Estado:</Label>
            <DisplayData>{userData ? `${userData.cidade} - ${userData.estado}` : ''}</DisplayData>
          </div>
          <div>
            <Label>Telefone:</Label>
            <DisplayData>{userData?.telefone}</DisplayData>
          </div>
          <div>
            <Label>Email:</Label>
            <DisplayData>{userData?.email}</DisplayData>
          </div>
          <div>
            <Label>Gênero - Raça/Etnia:</Label>
            <DisplayData>{userData ? `${userData.genero} - ${userData.raca_etnia}` : ''}</DisplayData>
          </div>
          <div>
            {userData?.documento_identificacao ? (
              <div>
                <Label>Documento CPF/RG:</Label>
                <DisplayData>{userData?.documento_identificacao}</DisplayData>
              </div>
            ) : (
              <div>
                <Label>Documento RNE:</Label>
                <DisplayData>{userData?.documento_rne}</DisplayData>
              </div>
            )}
          </div>
          <div>
            <Label>Comprovante de Residência:</Label>
            <DisplayData style={{ fontSize: '14px', maxWidth: '300px' }}>{userData?.comprovante_residencia}</DisplayData>
          </div>
        </FormField>

        <FormField>
          <div>
            <Label htmlFor="nome_projetoacao">Nome do Projeto/Proposta:</Label>
            <Input
              type="text"
              id="nome_projetoacao"
              {...register("nome_projetoacao", { required: true })}
              placeholder="Digite o Nome do Projeto"
            />
            {errors.nome_projetoacao && <ErrorMessage>Nome do projeto é obrigatório.</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="linguagem_artistica">Linguagem artística da proposta:</Label>
            <Select {...register("linguagem_artistica", { required: true })} id="linguagem_artistica">
              <option value="">Selecione...</option>
              <option value="artesCenicas">Artes Cênicas</option>
              <option value="cinema">Cinema</option>
              <option value="exposicao">Exposição</option>
              <option value="musica">Música</option>
              <option value="inovacao">Inovação</option>
              <option value="outros">Outros</option>
            </Select>
            {errors.linguagem_artistica && <ErrorMessage>Linguagem artística é obrigatória.</ErrorMessage>}
            {watch("linguagem_artistica") === "outros" && (
              <div>
                <Label>Especifique:</Label>
                <Input type="text" {...register("outrolinguagem_artistica")} id="outrolinguagem_artistica" />
              </div>
            )}
          </div>
          <div>
            <Label htmlFor="nome_espaco">Espaço Cultural do Instituto Energisa:</Label>
            <Select {...register("nome_espaco", { required: true })} id="nome_espaco">
              <option value="">Selecione...</option>
              <option value="Cataguases">Cataguases, MG</option>
              <option value="JoaoPessoa">João Pessoa, PB</option>
              <option value="NovaFriburgo">Nova Friburgo, RJ</option>
            </Select>
            {errors.nome_espaco && <ErrorMessage>Seleção de espaço é obrigatória.</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="endereco_espaco">Endereço do Espaço Cultural:</Label>
            <Input
              type="text"
              id="endereco_espaco"
              {...register("endereco_espaco", { required: true })}
              placeholder="Digite o Endereço do Espaço Cultural"
            />
            {errors.endereco_espaco && <ErrorMessage>Endereço do espaço cultural é obrigatório.</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="duvidas">Dúvidas e observações:</Label>
            <Input
              type="text"
              id="duvidas"
              {...register("duvidas")}
              placeholder="Digite suas dúvidas e observações"
            />
          </div>
        </FormField>

        <FormField>
          <div>
            <Label htmlFor="descricao_proposta">
              Descrição da proposta com projeto, currículo, ficha técnica e cronograma (PDF):
            </Label>
            <Input
              type="file"
              id="descricao_proposta"
              accept=".pdf, .docx"
              {...register("descricao_proposta", { required: true })}
            />
            {errors.descricao_proposta && <ErrorMessage>Arquivo é obrigatório.</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="fotos_imagens">
              Fotos, imagens e comprovantes de atuação do grupo, artista ou espetáculo:
            </Label>
            <Input
              type="file"
              id="fotos_imagens"
              accept=".pdf, .docx"
              {...register("fotos_imagens", { required: true })}
            />
            {errors.fotos_imagens && <ErrorMessage>Arquivo é obrigatório.</ErrorMessage>}
          </div>
        </FormField>

        <FormField>
          <Label htmlFor="termo">
            <strong>AVISO DE PRIVACIDADE E TERMO DE CONSENTIMENTO PARA TRATAMENTO DE DADOS.</strong>
            <br />
            <p>
              Para que você possa participar do Edital de Seleção de Projetos Culturais 2024 para Cessão Gratuita dos espaços culturais
              do Instituto Energisa (IE), ao qual este Aviso de Privacidade se refere,  o IE poderá coletar determinados Dados Pessoais,
              como: nome, sobrenome, nome social, RG, CPF/CNPJ, data de nascimento, etnia/raça, gênero, telefone, e-mail, cidade e estado.
              O IE observa as leis vigentes sobre segurança e proteção de Dados Pessoais (“Leis de Proteção de Dados Aplicáveis”), em especial a Lei Federal nº
              13.709/2018, Lei Geral de Proteção de Dados (“LGPD”).
            </p>
            <Checkbox
              type="checkbox"
              id="termo"
              {...register("termo", { required: true })}
            />
            Estou ciente e de Acordo.
            {errors.termo && <ErrorMessage>Você deve concordar com os termos.</ErrorMessage>}
          </Label>
        </FormField>

        <SubmitButton type="submit">ENVIAR</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioInscricao;
