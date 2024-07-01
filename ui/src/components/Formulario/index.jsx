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
      <FormTitle>Formulário de Inscrição</FormTitle>
      <CloseButton type="button" onClick={closeModal}>X</CloseButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <div>
            <Label htmlFor="name">Nome Completo do Preponente:</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Digite Seu Nome Completo"
              {...register("name", { required: true })}
            />
            {errors.name && <ErrorMessage>Nome é obrigatório.</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="city">Cidade e Estado:</Label>
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="Cidade, Estado"
              {...register("city", { required: true })}
            />
            {errors.city && <ErrorMessage>Cidade e estado são obrigatórios.</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="phone">Telefone:</Label>
            <Input
              type="text"
              name="phone"
              id="phone"
              placeholder="32 9999-9999"
              {...register("phone", { required: true })}
            />
            {errors.phone && <ErrorMessage>Telefone é obrigatório.</ErrorMessage>}
            <Label>
              <Checkbox
                type="checkbox"
                name="whats"
                id="whats"
                {...register("whats")}
              />
              Este número é WhatsApp?
            </Label>
          </div>
          <div>
            <Label htmlFor="email">Email:</Label>
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
            <Label htmlFor="document">Envio PDF - Documento (RG e CPF ou CNPJ):</Label>
            <Input
              type="file"
              name="document"
              id="document"
              accept=".pdf, .docx"
              {...register("document", { required: true })}
            />
            {errors.document && <ErrorMessage>Documento é obrigatório.</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="passaport">RNE - em caso do proponente por estrangeiro:</Label>
            <Input
              type="file"
              name="passaport"
              id="passaport"
              accept=".pdf, .docx"
              {...register("passaport")}
            />
            {errors.passaport && <ErrorMessage>Passaporte é obrigatório para estrangeiros.</ErrorMessage>}
          </div>
        </FormField>

        <FormField>
          <div>
            <Label htmlFor="nameProject">Nome do Projeto/Proposta:</Label>
            <Input
              type="text"
              name="nameProject"
              id="nameProject"
              placeholder="Digite o Nome do Projeto"
              {...register("nameProject", { required: true })}
            />
            {errors.nameProject && <ErrorMessage>Nome do projeto é obrigatório.</ErrorMessage>}
          </div>
          <div>
            <Label htmlFor="artistic">Linguagem artística da proposta:</Label>
            <Select {...register("artistic", { required: true })} id="artistic">
              <option value="">Selecione...</option>
              <option value="artesCenicas">Artes Cênicas</option>
              <option value="cinema">Cinema</option>
              <option value="exposicao">Exposição</option>
              <option value="musica">Música</option>
              <option value="inovacao">Inovação</option>
              <option value="outros">Outros</option>
            </Select>
            {errors.artistic && <ErrorMessage>Linguagem artística é obrigatória.</ErrorMessage>}
            {watch("artistic") === "outros" && (
              <div>
                <Label htmlFor="outroArtistic">Especifique:</Label>
                <Input type="text" {...register("outroArtistic")} id="outroArtistic" />
              </div>
            )}
          </div>
          <div>
            <Label htmlFor="espaco">
              Defina o Espaço Cultural do Instituto Energisa:
            </Label>
            <Select {...register("espaco", { required: true })} id="espaco">
              <option value="">Selecione...</option>
              <option value="Cataguases">Cataguases, MG</option>
              <option value="JoaoPessoa">João Pessoa, PB</option>
              <option value="NovaFriburgo">Nova Friburgo, RJ</option>
            </Select>
            {errors.espaco && <ErrorMessage>Seleção de espaço é obrigatória.</ErrorMessage>}
          </div>
        </FormField>

        <FormField>
          <div>
            <Label htmlFor="proposta">
              <p className='paragrafo'>
                Enviar em (pdf, docx ou doc) contendo os seguintes itens: Descrição da proposta,
                Currículo do proponente, Data e horário pretendido para realização, Público alvo,
                Ficha técnica, Valor do ingresso (se houver), Rider técnico e outras informações
                relevantes.(Modelo referência disponível <a href="/modelo.docx" download>aqui</a>.)
              </p>
            </Label>
            <Input
              type="file"
              name="proposta"
              id="proposta"
              accept=".pdf, .docx"
              {...register("proposta", { required: true })}
            />
            {errors.proposta && <ErrorMessage>Arquivo é obrigatório.</ErrorMessage>}
          </div>
        </FormField>

        <FormField>
          <Label htmlFor="termo">
            <strong>AVISO DE PRIVACIDADE E TERMO DE CONSENTIMENTO PARA TRATAMENTO DE DADOS.</strong>
            <br />
            <p className='paragrafo'>
              Para que você possa participar do Edital de Seleção de Projetos Culturais 2024 para Cessão Gratuita dos espaços culturais
              do Instituto Energisa (IE), <br />ao qual este Aviso de Privacidade se refere,  o IE poderá coletar determinados Dados Pessoais,
              como: nome, sobrenome, nome social, RG, CPF/CNPJ,<br /> data de nascimento, etnia/raça, gênero, telefone, e-mail, cidade e estado.
              O IE observa as leis vigentes sobre segurança e proteção de Dados
              Pessoais<br /> (“Leis de Proteção de Dados Aplicáveis”), em especial a Lei Federal nº
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

        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioInscricao;