var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Hola Mundo\n');
}).listen(8081);

console.log('Servidor corriendo en http://127.0.0.1:8081/');

/*Utilizamos la instancia de http creada y llamamos al método http.createServer () para crear una instancia de servidor. Después la vinculamos en el puerto 8081 utilizando el método de escucha asociado con la instancia de servidor. Pasamos una función con parámetros de solicitud y respuesta. Nuestro servidor devolverá siempre el texto plano “Hola Mundo”.*/