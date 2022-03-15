let connect = function(){
  if(global.connection){
    return global.connection.connect();
  }


  const{ Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://qnfnkpof:3YqEjkzXPBBndCKUJr-buz637ATI3Nj8@kesavan.db.elephantsql.com/qnfnkpof"
  });
  global.connection = pool

  return pool.connect();
}

module.exports = {connect}