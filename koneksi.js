var mysql = require('mysql');

//buat koneksi
const conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'sa',
      database: 'db_bmi2022_roy'
});

conn.connect((err)=>{
      if(err) throw err;
      console.log('Mysql terkoneksi');
});

module.exports = conn;
