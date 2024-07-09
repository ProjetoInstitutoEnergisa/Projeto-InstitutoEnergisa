const Usuario = require("../models/usuarioModel");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { Op, json } = require('sequelize');
const multer = require('multer'); // Importa o multer
const upload = require('../config/multerConfig'); // Importa o middleware de upload configurado



const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao listar usuários", error });
  }
};

const obterUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao obter usuário", error });
  }
};

const criarUsuario = async (req, res) => {
  try {
    // Usar o middleware de upload para capturar os arquivos enviados
    upload.fields([
      { name: 'comprovante_residencia', maxCount: 1 },
      { name: 'documento_identificacao', maxCount: 1 },
      { name: 'documento_rne', maxCount: 1 },
    ])(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: 'Erro no upload de arquivo.', error: err.message });
      } else if (err) {
        return res.status(500).json({ message: 'Erro interno ao processar upload.', error: err.message });
      }

      // Obter URLs dos arquivos enviados para S3
      const comprovante_residencia_url = req.files['comprovante_residencia'][0]?.location;
      const documento_identificacao_url = req.files['documento_identificacao'][0]?.location;
      const documento_rne_url = req.files['documento_rne']?.[0]?.location;

      // Dados do usuário a serem criados no banco de dados
      const {
        nome_completo,
        email,
        senha,
        telefone,
        genero,
        raca_etnia,
        cidade,
        estado,
      } = req.body;

      // Criar o usuário no banco de dados
      const novoUsuario = await Usuario.create({
        nome_completo,
        email,
        senha,
        telefone,
        genero,
        raca_etnia,
        cidade,
        estado,
        comprovante_residencia: comprovante_residencia_url,
        documento_identificacao: documento_identificacao_url,
        documento_rne: documento_rne_url,
      });

      // Retornar as URLs dos arquivos na resposta
      res.status(201).json({
        message: 'Usuário criado com sucesso.',
        comprovante_residencia: comprovante_residencia_url,
        documento_identificacao: documento_identificacao_url,
        documento_rne: documento_rne_url,
      });
    });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
  }
};

const atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuarioAtualizado = await Usuario.update(req.body, {
      where: { id_usuario: id },
    });
    if (usuarioAtualizado[0] === 0) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar usuário", error });
  }
};

const deletarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuarioDeletado = await Usuario.destroy({
      where: { id_usuario: id },
    });
    if (!usuarioDeletado) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar usuário", error });
  }
};

const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verifica se é um login de administrador específico
    if (email === 'admin@example.com' && senha === 'admin') {
      // Em um ambiente de desenvolvimento, você pode simplesmente retornar sucesso sem consultar o banco de dados
      res.status(200).json({ msg: "Usuário logado", role: "admin" });
    } else {
      // Consulta no banco de dados (ou onde estiver armazenado)
      const usuario = await Usuario.findOne({
        where: {
          email: {
            [Op.like]: email.toLowerCase(),
          },
        },
      });

      if (!usuario) {
        return res.status(400).json({ msg: "Usuário não registrado!" });
      }

      const isMatch = bcrypt.compareSync(senha, usuario.senha);
      if (isMatch) {
        const role = usuario.role; // Assuming the role is stored in the 'role' field of the user model
        res.status(200).json({ msg: "Usuário logado", role: "user", userId: usuario.id_usuario});
      } else {
        res.status(400).json({ msg: "Senha incorreta" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erro ao fazer login" });
  }
};


module.exports = {
  listarUsuarios,
  obterUsuarioPorId,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
  loginUsuario
};
