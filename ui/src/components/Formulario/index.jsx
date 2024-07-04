import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormContainer,
  FormTitle,
  Form,
  FormField,
  Label,
  Input,
  Checkbox,
  CloseButton,
  Select,
  ErrorMessage,
  SubmitButton,
} from './styles';

const FormularioInscricao = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    closeModal();  // Close the modal after submitting
  };

  return (
    <FormContainer>
      <FormTitle>FORMULÁRIO DE SOLICITAÇÃO</FormTitle>
      <CloseButton type="button" onClick={closeModal}>X</CloseButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <div>
            <Label htmlFor="nome_completo">Nome Completo</Label>
            <Input
              type="text"
              name="nome_completo"
              id="nome_completo"
              placeholder="Digite Seu Nome Completo"
              {...register("nome_completo", { required: true })}
            />
            {errors.nome_completo && <ErrorMessage>Nome é obrigatório.</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="cidade">Cidade</Label>
            <Input
              type="text"
              name="cidade"
              id="cidade"
              placeholder="Cidade"
              {...register("cidade", { required: true })}
            />
            {errors.cidade && <ErrorMessage>Cidade é obrigatórios.</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="estado">Estado</Label>
            <Input
              type="text"
              name="estado"
              id="estado"
              placeholder="Estado"
              {...register("estado", { required: true })}
            />
            {errors.estado && <ErrorMessage>Estado é obrigatórios.</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              type="number"
              name="telefone"
              id="telefone"
              placeholder="32 9999-9999"
              {...register("telefone", { required: true })}
            />
            {errors.telefone && <ErrorMessage>Telefone é obrigatório.</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Informe um Email Válido"
              {...register("email", {
                required: true,
                validate: value => /^\S+@\S+\.\S+$/.test(value),
              })}
            />
            {errors.email?.type === "required" && <ErrorMessage>Email é obrigatório.</ErrorMessage>}
            {errors.email?.type === "validate" && <ErrorMessage>Email inválido.</ErrorMessage>}
          </div>
        </FormField>

        <FormField>
          <div>
            <Label htmlFor="documento_identificacao">Envio PDF - RG e CPF</Label>
            <Input
              type="file"
              name="documento_identificacao"
              id="documento_identificacao"
              accept=".pdf, .docx"
              {...register("documento_identificacao", { required: true })}
            />
            {errors.documento_identificacao && <ErrorMessage>Documento é obrigatório.</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="documento_rne">RNE - Se for estrangeiro</Label>
            <Input
              type="file"
              name="documento_rne"
              id="documento_rne"
              accept=".pdf, .docx"
              {...register("documento_rne")}
            />
            {errors.documento_rne && <ErrorMessage>Passaporte é obrigatório para estrangeiros.</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="comprovante_residencia">Comprovante de Redisência</Label>
            <Input
              type="file"
              name="comprovante_residencia"
              id="dcomprovante_residencia"
              accept=".pdf, .docx"
              {...register("comprovante_residencia")}
            />
            {errors.comprovante_residencia && <ErrorMessage>Comprovante de Residência é obrigatório.</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="genero">Gênero</Label>
            <Select {...register("genero", { required: true })} id="genero">
              <option value="">Selecione...</option>
              <option value="mulher">Mulher</option>
              <option value="homem">Homem</option>
              <option value="nao_binario">Não-binário</option>
              <option value="transgenero">Transgênero</option>
              <option value="agenero">Agênero</option>
              <option value="genero_fluido">Gênero fluido</option>
              <option value="genero_naoInformar">Prefiro Não Informar</option>
              <option value="outros">Outros</option>
            </Select>
            {errors.genero && <ErrorMessage>Gênero é obrigatório.</ErrorMessage>}
            {watch("genero") === "outros" && (
              <div>
                <Label htmlFor="outroGenero">Especifique</Label>
                <Input type="text" {...register("outroGenero")} id="outroGenero" />
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="raca_etnia">Raça/Etnia</Label>
            <Select {...register("raca_etnia", { required: true })} id="raca_etnia">
              <option value="">Selecione...</option>
              <option value="branca">Branca</option>
              <option value="preta">Preta</option>
              <option value="parda">Parda</option>
              <option value="amarela">Amarela</option>
              <option value="indigena">Indígena</option>
              <option value="outros">Outros</option>
            </Select>
            {errors.raca_etnia && <ErrorMessage>Raça/Etnia é obrigatória.</ErrorMessage>}
            {watch("raca_etnia") === "outros" && (
              <div>
                <Label htmlFor="outroraca_etnia">Especifique</Label>
                <Input type="text" {...register("outroraca_etnia")} id="outroraca_etnia" />
              </div>
            )}
          </div>
        </FormField>

        <FormField>
          <div>
            <Label htmlFor="nome_projetoacao">Nome do Projeto/Proposta</Label>
            <Input
              type="text"
              name="nome_projetoacao"
              id="nome_projetoacao"
              placeholder="Digite o Nome do Projeto"
              {...register("nome_projetoacao", { required: true })}
            />
            {errors.nome_projetoacao && <ErrorMessage>Nome do projeto é obrigatório.</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="linguagem_artistica">Linguagem artística da proposta</Label>
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
                <Label htmlFor="outrolinguagem_artistica">Especifique:</Label>
                <Input type="text" {...register("outrolinguagem_artistica")} id="outrolinguagem_artistica" />
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="nome_espaco">
              Defina o Espaço Cultural do Instituto Energisa
            </Label>
            <Select {...register("nome_espaco", { required: true })} id="nome_espaco">
              <option value="">Selecione...</option>
              <option value="Cataguases">Cataguases, MG</option>
              <option value="JoaoPessoa">João Pessoa, PB</option>
              <option value="NovaFriburgo">Nova Friburgo, RJ</option>
            </Select>
            {errors.nome_espaco && <ErrorMessage>Seleção de espaço é obrigatória.</ErrorMessage>}
          </div>
        </FormField>

        <FormField>
          <div>
            <Label htmlFor="descricao_proposta">
              <p className='descricao_proposta'>
                Enviar em (PDF):  Descrição da proposta com projeto, currículo, ficha técnica e cronograma. 
                (Modelo referência disponível <a href="/modelo.docx" download> aqui</a>.)
              </p>
            </Label>
            <Input
              type="file"
              name="descricao_proposta"
              id="descricao_proposta"
              accept=".pdf, .docx"
              {...register("descricao_proposta", { required: true })}
            />
            {errors.descricao_proposta && <ErrorMessage>Arquivo é obrigatório.</ErrorMessage>}
          </div>

          <div>
            <Label htmlFor="fotos_imagens">
              <p className='fotos_imagens'>
                Enviar fotos, imagens e comprovantes de atuação do grupo, artista ou espetáculo.
              </p>
            </Label>
            <Input
              type="file"
              name="fotos_imagens"
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
            <p className='paragrafo'>
              Para que você possa participar do Edital de Seleção de Projetos Culturais 2024 para Cessão Gratuita dos espaços culturais
              do Instituto Energisa (IE), ao qual este Aviso de Privacidade se refere,  o IE poderá coletar determinados Dados Pessoais,
              como: nome, sobrenome, nome social, RG, CPF/CNPJ, data de nascimento, etnia/raça, gênero, telefone, e-mail, cidade e estado.
              O IE observa as leis vigentes sobre segurança e proteção de Dados Pessoais (“Leis de Proteção de Dados Aplicáveis”), em especial a Lei Federal nº
              13.709/2018, Lei Geral de Proteção de Dados (“LGPD”).
            </p>
            <br />
            <Checkbox
              type="checkbox"
              name="termo"
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