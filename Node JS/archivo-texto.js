const fs = require('fs');

const contenido = 'Este es el contenido del archivo de texto.';

fs.writeFile('input.txt', contenido, (err) => {
    if (err) {
        console.error('Error al crear el archivo:', err);
    } else {
        console.log('Archivo creado exitosamente.');
    }
});
