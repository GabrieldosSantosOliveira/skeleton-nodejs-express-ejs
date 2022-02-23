const db = require("../db");

class Autor {
  static inserir(){
    const connect = await db.connect();
    return await connect.query("Select autores From Autor;")
  }
  static selecionar(){
    
  }
  static atualizar(){
    
  }
  static deletar(){
    
  }
}

module.exports = Autor;