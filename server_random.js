const http = require('http'); //importa el metodo http
const frase = [ //array con frases
    '¡La vida es bella!',
    '¡El conocimiento es poder',
    '¡La educación es la clave',
    '¡La perseverancia es la virtud',
    '¡La amistad es la felicidad'
];

const server = http.createServer((req, res) => {
    const randomFrase = frase[Math.floor(Math.random() * frase.length)];//asignacion aleatoria de una frase al ingresar al puerto
    res.statusCode = 200; //estado 'ok' del servidor 
    res.setHeader('Content-Type', 'text/html'); //tipo  html
    res.end(`<h1>${randomFrase}</h1>`) //pone la frase en un h1
});

const port = 3000; //asignamos el puerto
server.listen(port, () =>{ //que el servidor escuche por el puerto 300
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});