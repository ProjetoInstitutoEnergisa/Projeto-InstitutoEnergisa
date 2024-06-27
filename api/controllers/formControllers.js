
const formModels = require("../models/formModels");

class FormController {
  readList(req, res) {
    try {
      let result = formModels.readList();
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send("Nenhum formulário encontrado!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  read(req, res) {
    try {
      const { id } = req.params;
      let result = formModels.read(id);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).send("Formulário não encontrado!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  create(req, res) {
    try {
      const newForm = req.body;
      const result = formModels.create(newForm);
      res.status(201).json(result);
      res.send("Formulário criado com sucesso!");
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  update(req, res) {
    try {
      const { id } = req.params;
      const updatedForm = req.body;
      let result = formModels.update(updatedForm, id);
      if (result) {
        res.send("Formulário atualizado com sucesso!");
      } else {
        res.status(404).send("Formulário não encontrado!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      let result = formModels.delete(id);
      if (result) {
        res.send("Formulário deletado com sucesso!");
      } else {
        res.status(404).send("Formulário não encontrado!");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}

module.exports = new FormController();

