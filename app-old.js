const http = require('http');
//Para escuchar peticiones http necesitamos crear un servidor webserver
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Marcelo Hervás Granados',
            edad: 53,
            altura: 1.70,
            url: req.url
        };
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);
//Debemos especificar en que puerto escucha el servidor
console.log('Servidor web escuchando en el puerto 8080');