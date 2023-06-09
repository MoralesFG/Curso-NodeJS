var fs = require("fs");
//var data = fs.readFileSync('input.txt');

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);

    console.log(data.toString());

});console.log("Fin de programa");

/*Aquí tenemos ejemplo de código con bloqueo (var data que aparece comentada al principio) y ejemplo de código sin bloqueo que es la continuación que sigue desde fs.readFile*/