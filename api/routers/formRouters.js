const Router = require("express").Router();
const router = Router();
const formController = require("../controllers/formController");

router.post("/api/inscricao", formController.apiCreate);

module.exports = router;