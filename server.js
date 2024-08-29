const http = require('http'); //immporta el mosulo http

//crear un servidor
const server = http.createServer((req, res) => {
    //res es un objeto que tiene metodos para enviar respuestas
    res.statusCode = 200; //200 == Ok(respuesta existosa)
    res.setHeader('Content-Type', 'text/plain'); //encabezado y tipo de respuesta
    res.end('Creacion de servidor basico!\n'); //enviar respuesta 
});

//Asignar un puerto y hacer que el servidor escuche en ese puerto
const port = 3000;
server.listen(port, () =>{
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});