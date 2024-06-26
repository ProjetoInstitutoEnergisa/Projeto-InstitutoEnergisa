import { useState } from 'react' 
import React from 'react'
//import './Formulario.css'

function formularioInscricao() {
    //Declarar um nova variável dados com state e atribuir o objeto;    
    const [data, setData] = useState({
      termo: '',
      name: '',
      document: '',
      passaport: '',
      city: '',
      residence: '',
      phone: '',
      whats: '',
      email: '',
      genero: '',
      outroGeneroEspecifica: '',
      racaEtinia: '',
      outroRacaEtniaEspecificar: '',
      nameProject: '',
      espaco: '',
      artistic: '',
      outroArtistic: '',
      proposta: '',
      arquivos: '',
      duvidas: ''
  });

  //Receber os dados dos campos do formulário;
  const valorInput = e => setData({...data, [e.target.name]: e.target.value})

  //Executar a função quando o usuário clicar no bortão do formulário;
  const sendMsg = (e) => {

    //Bloquear o carregamento da página;
    e.preventDefault();
    
    console.log(`Nome: ${data.name}`);
  }

  return (
      <>
          <div>
              <h2>Formulário de Inscrição</h2>
              {/* Início do formulário, executar o "onSubmit" quando o usuário clicar no botão 'submit  e chamar a fução 'sendMsg'. */}
              <form className="formInscricao" onSubmit={sendMsg}>
                  <div>
                      <label htmlFor='termo'> <strong>AVISO DE PRIVACIDADE E TERMO DE CONSENTIMENTO PARA TRATAMENTO DE DADOS.</strong> <br />
                          Para que você possa participar do Edital de Seleção de Projetos Culturais 2024 para Cessão Gratuita dos espaços culturais
                          do Instituto Energisa (IE), <br />ao qual este Aviso de Privacidade se refere,  o IE poderá coletar determinados Dados Pessoais,
                          como: nome, sobrenome, nome social, RG, CPF/CNPJ,<br /> data de nascimento, etnia/raça, gênero, telefone, e-mail, cidade e estado.
                          O IE observa as leis vigentes sobre segurança e proteção de Dados
                          Pessoais<br /> (“Leis de Proteção de Dados Aplicáveis”), em especial a Lei Federal nº
                          13.709/2018, Lei Geral de Proteção de Dados (“LGPD”).</label><br />
                      <input type='checkbox' name="termo" id="termo" onChange={valorInput} required></input> Estou ciente e de Acordo.<br /><br />
                  </div>

                  <div>
                      <label htmlFor="name">Nome Completo do Preponente:</label><br />
                      <input type="text" name="name" id='name' placeholder='Digite Seu Nome Completo' onChange={valorInput} required></input><br /><br />
                  </div>

                  <div>
                      <label htmlFor="document">Envio PDF - Documento (RG e CPF ou CNPJ):</label><br />
                      <input type="file" name="document" id='document' accept='.pdf, .docx' onChange={valorInput} required></input><br /><br />
                  </div>

                  <div>
                      <label htmlFor="passaport">RNE - em caso do proponente por extrangeiro:</label><br />
                      <input type="file" name="passaport" id='passaport' accept='.pdf, .docx' onChange={valorInput} required></input><br /><br />
                  </div>

                  <div>
                      <label htmlFor="city">Cidade e Estado:</label><br />
                      <input type="text" name="city" id='city' placeholder='Cidade, Estado' onChange={valorInput} required></input><br /><br />
                  </div>

                  <div>
                      <label htmlFor="residence">Comprovante de Residência (Últimos 3 Meses):</label><br />
                      <input type="file" name="residence" id='residence' accept='.pdf, .docx, .jpeg, .png' onChange={valorInput} required></input><br /><br />
                  </div>

                  <div>
                      <label htmlFor="phone">Telefone:</label><br />
                      <input type="number" name="phone" id='phone' placeholder='32 9999-9999' onChange={valorInput} required></input><br />
                      <input type="checkbox" name="whats" id="whats" onChange={valorInput} />Este número é WhatsApp?<br /><br />
                  </div>

                  <div>
                      <label htmlFor="email">Email:</label><br />
                      <input type="email" name="email" id='email' placeholder='Informe um Email Válido' onChange={valorInput} required></input><br /><br />
                  </div>

                  <div>
                      <label>Gênero:</label><br />
                      <input type='radio' name='genero' id='mulherCis' value='MulherCis' onChange={valorInput} /> Mulher Cisgênero;<br />
                      <input type='radio' name='genero' id='homemCis' value='HomemCis' onChange={valorInput} /> Homem Cisgênero;<br />
                      <input type='radio' name='genero' id='mulherTrans' value='MulherTrans' onChange={valorInput} /> Mulher Transgênero;<br />
                      <input type='radio' name='genero' id='homemTrans' value='HomemTrans' onChange={valorInput} /> Homem Transgênero;<br />
                      <input type='radio' name='genero' id='naoBinario' value='NaoBinario' onChange={valorInput} /> Não-binário;<br />
                      <input type='radio' name='genero' id='generoFluido' value='GeneroFluido' onChange={valorInput} /> Gênero Fluid;<br />
                      <input type='radio' name='genero' id='agenero' value='Agenero' onChange={valorInput} /> Agênero;<br />
                      <input type='radio' name='genero' id='outroGenero' value='Outro' onChange={valorInput} /> Outro.<br />
                      <input type='text' name='outroGeneroEspecificar' id='outroGeneroEspecificar' placeholder='Por favor, especifique.' onChange={valorInput} /><br /><br />
                  </div>

                  <div>
                      <label>Raça/Etnia:</label><br />
                      <input type="radio" name="racaEtnia" id="branco" value="Branco" onChange={valorInput} /> Branco;<br />
                      <input type="radio" name="racaEtnia" id="preto" value="Preto" onChange={valorInput} /> Preto;<br />
                      <input type="radio" name="racaEtnia" id="pardo" value="Pardo" onChange={valorInput} /> Pardo;<br />
                      <input type="radio" name="racaEtnia" id="amarelo" value="Amarelo" onChange={valorInput} /> Amarelo;<br />
                      <input type="radio" name="racaEtnia" id="indigena" value="Indígena" onChange={valorInput} /> Indígena;<br />
                      <input type="radio" name="racaEtnia" id="naoDeclarar" value="NaoDeclarar" onChange={valorInput} /> Prefiro não declarar;<br />
                      <input type="radio" name="racaEtnia" id="outroRaca" value="Outro" onChange={valorInput} /> Outro.<br />
                      <input type="text" name="outroRacaEtniaEspecificar" id="outroRacaEtniaEspecificar" placeholder="Por favor, especifique" onChange={valorInput} /><br /><br />
                  </div>

                  <div>
                      <label htmlFor="nameProject">Nome do Projeto/Proposta:</label><br />
                      <input type="text" name="nameProject" id='nameProject' placeholder='Digite o Nome do Projeto' onChange={valorInput} required></input><br /><br />
                  </div>

                  <div>
                      <label>Deseja realizar atividade cultural em qual Espaço Cultural do Instituto Energisa:</label><br />
                      <input type="radio" name="espaco" id="cataguases" value="Cataguases" onChange={valorInput}></input>Cataguases, MG<br />
                      <input type="radio" name="espaco" id="joaoPessoa" value="JoaoPessoa" onChange={valorInput}></input>João Pessoa, PB<br />
                      <input type="radio" name="espaco" id="novaFriburgo" value="NovaFriburgo" onChange={valorInput}></input>Nova Friburgo, RJ<br /><br />
                  </div>

                  <div>
                      <label>Linguagem artística da proposta (Item 3 do Edital):</label><br />
                      <input type="radio" name="artistic" id="artesCenicas" value="artesCenicas" onChange={valorInput}></input>Artes Cênicas;<br />
                      <input type="radio" name="artistic" id="cinema" value="Cinema" onChange={valorInput}></input>Cinema;<br />
                      <input type="radio" name="artistic" id="expo" value="Exposição" onChange={valorInput}></input>Exposição;<br />
                      <input type="radio" name="artistic" id="musica" value="Música" onChange={valorInput}></input>Música;<br />
                      <input type="radio" name="artistic" id="inovacao" value="Inovação" onChange={valorInput}></input>Inovação;<br />
                      <input type="radio" name="artistic" id="outros" value="Outros" onChange={valorInput}></input>Outros.<br />
                      <input type="text" name="outroArtistic" id="outroArtistic" placeholder="Ex.: Literatura, Manifestações Populares, Artes Integradas e etc..." onChange={valorInput} /><br /><br />
                  </div>

                  <div>
                      <label>Enviar em (PDF): Descrição da proposta com projeto, currículo, ficha técnica e cronograma:
                          (Modelo referência disponivél <a href="/modelo.docx" download>aqui</a>.) </label><br />
                      <input type="file" name="proposta" id='propsta' accept=".pdf, .docx" onChange={valorInput} required></input><br /><br />
                  </div>

                  <div>
                      <label htmlFor="arquivos">Enviar Fotos, Imagens e Comprovantes de Atuação do Grupo, Artista ou Espetáculo.</label><br />
                      <input type="file" name="arquivos" id='arquivos' onChange={valorInput} required></input><br /><br />
                  </div>

                  <div className='textArea'>
                      <label htmlFor='duvidas'>Deixe aqui sua dúvida ou sugestão.</label>< br />
                      <textarea name="duvidas" cols="100" rows="6" id="duvidas" placeholder='Digite aqui sua dúvida ou sugestão ...' onChange={valorInput} required></textarea>< br />< br />
                  </div>

                  <button type='submit'>Enviar Formulário</button>< br />< br />

              </form>
          </div>
      </>
  )
}

export default formularioInscricao
