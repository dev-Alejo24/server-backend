const http = require('http'); // Importa el módulo HTTP

// Creación del servidor
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json'); // Tipo de respuesta en JSON
  
  // Redirección de /old-about a /about
  if (req.url === '/old-page') {
    res.writeHead(301, { 'Location': '/main-page' });
    res.end();
  } else if (req.url === '/main-page') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Bienvenido a la página principal' }));
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Acerca de nosotros', status: 'success' }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Página no encontrada', status: 'error' }));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
