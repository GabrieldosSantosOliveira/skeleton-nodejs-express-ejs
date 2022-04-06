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

   const autores = await Autor.inserir(req.body);
   res.json(autores.rows);



});

module.exports = router;
router.put('/atualizar', async function(req, res, next) {

  const autores = await Autor.atualizar(req.body);
  res.json(autores.rows)
});

module.exports = router;

router.delete('/deletar', async function(req, res, next) {
  const autores = await Autor.deletar(req.body);
  res.json(autores.rows)
});

module.exports = router;


const Livro = require("../models/livro")

/* GET home page. */
router.get('/livros', async function(req, res, next) {
  const livros = await Livro.selecionar();
  res.json(livros.rows)
});

module.exports = router;

router.post('/inserir/livros', async function(req, res, next) {

   const livros = await Livro.inserir(req.body);
   res.json(livros.rows);
});

module.exports = router;
router.put('/atualizar/livros', async function(req, res, next) {

  const livros = await Livro.atualizar(req.body);
  res.json(livros.rows)
});

module.exports = router;

router.delete('/deletar/livros', async function(req, res, next) {
  const livros = await Livro.deletar(req.body);
  res.json(livros.rows)
});

module.exports = router;

router.get('/livro/autor', async function(req, res, next) {
  const livros = await Autor.livros(req.body);
  res.json(livros.rows)
});

module.exports = router;