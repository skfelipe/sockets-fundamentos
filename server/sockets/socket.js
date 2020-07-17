const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario Conectado');

    // TODO: LOS EMIT SON PARA ENVIAR INFORMACION.
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    // TODO: ESCUCHAR EL CLIENTE
    client.on('disconnect', () => {

        console.log("Usuario desconectado");

    });

    // TODO: ESCUCHAR EL CLIENTE

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'Todo salio bien!'

        //     });
        // } else {
        //     callback({
        //         respuesta: 'Todo salio Mal!!!!!!!!!!'

        //     });
        // }

    });



});