var express = require('express');
var router = express.Router();

const Autor = require("../models/autor")

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows)
});

module.exports = router;
router.get('/inserir', async function(req, res, next) {
  const autor = {
    nome:"Claudio",
    sobrenome:"Jonas",
    data_nascimento:"2022-03-03" 
  }
  const autores = await Autor.inserir(autor);
  res.json(autores)
});

module.exports = router;

