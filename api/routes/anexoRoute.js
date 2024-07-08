const express = require('express');
const {
  listarAnexos,
  obterAnexoPorId,
  criarAnexo,
  atualizarAnexo,
  deletarAnexo
} = require('../controller/anexoController');
const upload = require('../config/multerConfig');

const anexoRoute = express.Router();

/**
 * @swagger
 * tags:
 *   name: Anexo
 *   description: Endpoints relacionados aos anexos
 */

/**
 * @swagger
 * /anexos:
 *   get:
 *     summary: Lista todos os anexos
 *     tags: [Anexo]
 *     responses:
 *       200:
 *         description: Sucesso
 *       500:
 *         description: Erro ao listar anexos
 */
anexoRoute.get('/', listarAnexos);

/**
 * @swagger
 * /anexos/{id}:
 *   get:
 *     summary: Obtém um anexo pelo ID
 *     tags: [Anexo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do anexo
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Anexo não encontrado
 *       500:
 *         description: Erro ao obter anexo
 */
anexoRoute.get('/:id', obterAnexoPorId);

/**
 * @swagger
 * /anexos:
 *   post:
 *     summary: Cria um novo anexo
 *     tags: [Anexo]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               tipo_anexo:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *               id_projetoacao:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Anexo criado com sucesso
 *       400:
 *         description: Erro ao criar anexo
 *       500:
 *         description: Erro ao criar anexo
 */
anexoRoute.post('/', upload.single('file'), criarAnexo);

/**
 * @swagger
 * /anexos/{id}:
 *   put:
 *     summary: Atualiza um anexo pelo ID
 *     tags: [Anexo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do anexo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo_anexo:
 *                 type: string
 *               arquivo:
 *                 type: string
 *               id_projetoacao:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Anexo atualizado com sucesso
 *       404:
 *         description: Anexo não encontrado
 *       500:
 *         description: Erro ao atualizar anexo
 */
anexoRoute.put('/:id', atualizarAnexo);

/**
 * @swagger
 * /anexos/{id}:
 *   delete:
 *     summary: Deleta um anexo pelo ID
 *     tags: [Anexo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do anexo
 *     responses:
 *       200:
 *         description: Anexo deletado com sucesso
 *       404:
 *         description: Anexo não encontrado
 *       500:
 *         description: Erro ao deletar anexo
 */
anexoRoute.delete('/:id', deletarAnexo);

module.exports = anexoRoute;
