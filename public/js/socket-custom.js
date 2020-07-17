var socket = io();
//TODO: SON PARA ESCUCHAR
socket.on('connect', function() {

    console.log('Conectado al Servidor');
});
//TODO: SON PARA ESCUCHAR
socket.on('disconnect', function() {
    console.log('Perdida de conexion con el Servidor');
});

// TODO: LOS EMIT SON PARA ENVIAR INFORMACION.
socket.emit('enviarMensaje', {
    usuario: 'felipe',
    mensaje: 'Hola mundo socket'
}, function(resp) {
    console.log("respuesta server: ", resp);
});

//TODO: ESCUCHAR INFORMACION
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje);
});