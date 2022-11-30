
const express = require('express');
const router = express.Router();

const alunos = require("../controllers/alunos.controllers");

router.post("/script/alunos/create", alunos.create);
router.get("/script/alunos/read", alunos.readAll);
router.delete("/script/alunos/delete", alunos.del);


module.exports = router;