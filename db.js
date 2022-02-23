let connect = function(){
  if(global.connection){
    return global.connection.connect();
  }


  const{ Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://ftwjzqaz:AOXCSQ5LSjAwS0QZnTnPqx5fN4YJEFGJ@kesavan.db.elephantsql.com/ftwjzqaz"
  });
  global.connection = pool

  return pool.connect();
}

module.exports = {connect}