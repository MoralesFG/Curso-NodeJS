var http = require('http');

//Configuración de la petición
var options = {
    host:'localhost',
    port: '8081',
    path: '/index.html'
};

//Función de callback para gestionar la respuesta
var callback = function(response) {
//Actualizamos stream con datos continuamente
    var body = '';
    response.on('data', function(data) {
    body += data;
    });

    response.on('end', function() {
        console.log(body);
    });
}

//Hacemos una petición al servidor
var req = http.request(options, callback);
req.end();

/*El objetivo de esta función es crear un cliente web*/
