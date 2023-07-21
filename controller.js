'use strict';

var response = require('./res');
var connection = require('./koneksi');


exports.index = function(req,res) {
      response.ok("Aplikasi REST API berjalan !", res)
};


// menampilkan data jurnal
exports.tampilsemuajurnal = function (req, res) {
      connection.query('select * from gl_data', function(error,rows,fields){
            if(error){
                  console.log(error);
            }else{
                  response.ok(rows, res);
            }
      });
};


// menampilkan data jurnal berdasarkan no. source
exports.jurnalsource = function (req, res) {
      let no_source = req.params.source;
      connection.query('select * from gl_data where no_source = ?', [no_source], 
            function(error,rows,fields){
                  if(error){
                        console.log(error);
                  }else{
                        response.ok(rows, res);
                  }
            });
};


// menambah kode_source
exports.addkd_source = function (req, res) {
      var kode = req.body.kode;
      var nama = req.body.nama;

      connection.query('insert into gl_kd_source (kode, nama) VALUES (?,?)', [kode,nama],
            function (error, rows, fields){
                  if(error){
                        console.log(error);
                  }else{
                        response.ok('Berhasil tambah kode source', res);
                  }
            });     
};