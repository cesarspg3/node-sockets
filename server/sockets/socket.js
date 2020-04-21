const {io} = require('./../server')

io.on('connection', (client) => {
    
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'bienvedido a la app'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado')
    })

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)

        if (callback) {
            if(data.usuario) {
                callback({resp:'todo ok'});
            } else {
                callback({resp:'todo mal'});
            }
        }
            
    });

})