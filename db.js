let connect = function(){
  if(global.connection){
    return global.connection.connect();
  }


  const{ Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://fxvbmfxv:Gry-wg44_8f6V3q2S_sjmDfMEcN2VGmn@tuffi.db.elephantsql.com/fxvbmfxv"
  });
  global.connection = pool

  return pool.connect();
}

module.exports = {connect}