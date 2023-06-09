const readline = require('readline');

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question ('Bienvenido, ingrese su usuario\n', (rta) => {
    if (rta == 'Fran') {
        console.log(`Bienvenido, ${rta}`);
    } else {
        process.stdout.write('No estás autorizado');
    }

    rl.close();
});