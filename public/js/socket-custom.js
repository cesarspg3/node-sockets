var socket = io();
socket.on('connect', function(){
    console.log('conectado al servidor');
})
socket.on('disconnect', (client) => {
    console.log('perdimos conexión con el server');
})

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje)
})

socket.emit('enviarMensaje', {
    usuario: 'César',
    mensaje: 'holiwi'
}, function(mensaje) {
    console.log(mensaje)
});