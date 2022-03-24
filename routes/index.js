var express = require('express');
var router = express.Router();

const Autor = require("../models/autor")

/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionar();
  res.json(autores.rows)
});

module.exports = router;
router.post('/inserir', async function(req, res, next) {
  // const autor = {
  //   nome:"Claudio",
  //   sobrenome:"Jonas",
  //   data_nascimento:"2022-03-03" 
  // }
   const autores = await Autor.inserir(req.body);
   res.json(autores.rows);



});

module.exports = router;
router.put('/atualizar', async function(req, res, next) {
  // const autor = {
  //   nome:"Claudio",
  //   sobrenome:"Jonas",
  //   data_nascimento:"2022-03-03",
  //   id:5
  // }
  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows)
});

module.exports = router;

router.delete('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar(req.body);
  res.json(autores)
  console.log(autores)
});

module.exports = router;

