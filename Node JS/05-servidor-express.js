var express = require('express');
var app = express();

//Respuesta en la homepage con Helloword
app.get('/', function(req, res) {
    console.log("Recibida la solicitud GET para la homepage");
    res.send('Hola GET');
})

//Respuesta en la homepage con POST
app.post('/', function (req, res) {
    console.log("Recibida solicitud POST para la homepage");
    res.send('Hola POST');
})

//Respuesta para user page con DELETE
app.delete('/del_user', function (req, res) {
    console.log("Recibida solicitud DELETE request for /del_user");
    res.send('Hola DELETE');
})

//Respuesta para user page con GET
app.get('/list_user', function (req, res) {
    console.log("Recibida solicitud GET request for /list_user");
    res.send('Page Listing');
})

//Respuesta para la forma abcd, abxcd, ab123cd, etc. con GET request
app.get('/ab*cd', function(req, res) {
    console.log("Recibida solicitud GET request for /ab*cd");
    res.send('Patron de pagina admitido');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Aplicación de ejemplo escuchando en http://%s:%s", host, port)
})

/*Se trata de una aplicación Express muy básica que inicia un servidor y escucha el puerto 8081 para la conexión. Esta aplicación responde con Hola mundo! para solicitudes a la página de inicio y otras solicitudes para el resto de consultas.*/