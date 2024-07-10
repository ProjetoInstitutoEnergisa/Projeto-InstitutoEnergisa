const Notificacao = require('../models/notificacaoModel');
const Usuario = require('../models/usuarioModel');
const transporter = require('../config/email');

const listarNotificacoes = async (req, res) => {
  try {
    const notificacoes = await Notificacao.findAll();
    res.status(200).json(notificacoes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar notificações', error });
  }
};

const obterNotificacaoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const notificacao = await Notificacao.findByPk(id);
    if (!notificacao) {
      return res.status(404).json({ message: 'Notificação não encontrada' });
    }
    res.status(200).json(notificacao);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter notificação', error });
  }
};

const criarNotificacao = async (req, res) => {
  const { id_usuario, mensagem, id_projetoacao } = req.body;

  try {
    const usuario = await Usuario.findByPk(id_usuario);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Criar notificação no banco de dados
    const novaNotificacao = await Notificacao.create({
      mensagem,
      id_projetoacao,
      data_envio: new Date(),
      status: 'enviada'
    });

    // Enviar email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: usuario.email,
      subject: 'Nova Notificação',
      text: `Você recebeu uma nova notificação: ${novaNotificacao.mensagem}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erro ao enviar email:', error);
        // Registro do erro, mas não retornar a resposta aqui
      } else {
        console.log('Email enviado: ' + info.response);
      }
    });

    res.status(201).json(novaNotificacao); // Enviar a resposta JSON
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar notificação', error });
  }
};

const atualizarNotificacao = async (req, res) => {
  const { id } = req.params;
  try {
    const notificacaoAtualizada = await Notificacao.update(req.body, { where: { id_notificacao: id } });
    if (notificacaoAtualizada[0] === 0) {
      return res.status(404).json({ message: 'Notificação não encontrada' });
    }
    res.status(200).json({ message: 'Notificação atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar notificação', error });
  }
};

const deletarNotificacao = async (req, res) => {
  const { id } = req.params;
  try {
    const notificacaoDeletada = await Notificacao.destroy({ where: { id_notificacao: id } });
    if (!notificacaoDeletada) {
      return res.status(404).json({ message: 'Notificação não encontrada' });
    }
    res.status(200).json({ message: 'Notificação deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar notificação', error });
  }
};

const enviarNotificacaoProjeto = async (req, res) => {
  const { id_usuario, id_projetoacao, status } = req.body;

  try {
    const usuario = await Usuario.findByPk(id_usuario);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const mensagens = {
      Aprovado: 'Seu projeto foi aprovado!',
      Reprovado: 'Seu projeto foi reprovado.',
      Reenviar: 'Seu projeto precisa ser reenviado para uma nova análise.'
    };

    const mensagem = mensagens[status];

    // Criar notificação no banco de dados
    const novaNotificacao = await Notificacao.create({
      mensagem,
      id_projetoacao,
      data_envio: new Date(),
      status: 'enviada'
    });

    // Enviar email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: usuario.email,
      subject: 'Atualização do Projeto',
      text: `Você recebeu uma nova atualização do seu projeto: ${mensagem}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erro ao enviar email:', error);
        // Registro do erro, mas não retornar a resposta aqui
      } else {
        console.log('Email enviado: ' + info.response);
      }
    });

    // new Promise((resolve, reject) => { // teste simples sem conteúdo
    //   transporter.sendMail(mailOptions)
    //   .then (res =>{
    //     transporter.close()
    //     return resolve(res)
    //   }).catch(error => {
    //     console.log(error);
    //     transporter.close()
    //   })
    // });


    res.status(201).json(novaNotificacao); // Enviar a resposta JSON
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar notificação do projeto', error });
  }
};


module.exports = {
  listarNotificacoes,
  obterNotificacaoPorId,
  criarNotificacao,
  atualizarNotificacao,
  deletarNotificacao,
  enviarNotificacaoProjeto
};
