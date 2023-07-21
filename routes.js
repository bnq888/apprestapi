'use strict';

module.exports = function(app){
      var jsonku = require('./controller');

      app.route('/')
            .get(jsonku.index);

      app.route('/tampiljurnal')
            .get(jsonku.tampilsemuajurnal);

      app.route('/jurnalsource/:source')
            .get(jsonku.jurnalsource);           
            
      app.route('/addkd_source')
            .post(jsonku.addkd_source);                
}