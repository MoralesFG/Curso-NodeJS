//Creamos las variables
var http = require('http');
var fs = require('fs');
var url = require('url');

//Creamos el servidor
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname; /*analizamos petición*/
    
    console.log("Recibida petición de" + pathname); /*Mostramos el nombre del archivo solicitado en la petición*/
    
    /*A continuación leeremos su contenido solicitado al sistema de ficheros. Si da error será 404 NOT FOUND, sino encontraremos la página y estará todo OK */
    fs.readFile(pathname.substring(1), function (err, data) {
        if (err) {
            console.log (err);
            response.writeHead(404, {'Content-Type':'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString()); /*Escribiremos el contenido del archivo en el cuerpo de la respuesta*/
        }
        response.end(); /*Enviamos el cuerpo de la respuesta*/
    });
}).listen(8081);

//Finalmente, la consola imprimirá el mensaje de inicio
console.log('Server corriendo en http://127.0.0.1:8081/');

/* Esta función tiene como finalidad crear la estructura mínima de un servidor HTTP que escucha en el puerto 8081 */
