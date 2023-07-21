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