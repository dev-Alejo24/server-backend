const http = require('http');

// Creación del servidor
const server = http.createServer((req, res) => {
  // Verifica si la solicitud es para JSON o HTML usando un query param '?type=json'
  const isJSONRequest = req.url.includes('type=json');

  // Función para responder con JSON
  const sendJSONResponse = (data) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  };

  // Página de inicio con enlaces a otras páginas
  if (req.url.startsWith('/') && !isJSONRequest) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <head>
          <title>Página Principal</title>
        </head>
        <body>
          <h1>Bienvenido a la Página Principal</h1>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/old-about">Old About (redirección)</a></li>
            <li><a href="/home?type=json">Ver Home en JSON</a></li>
          </ul>
        </body>
      </html>
    `);
  
  // Ruta Home
  } else if (req.url.startsWith('/home')) {
    if (isJSONRequest) {
      sendJSONResponse({ message: 'Esta es la página Home', status: 'success' });
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <html>
          <head>
            <title>Home</title>
          </head>
          <body>
            <h1>Esta es la página Home</h1>
            <a href="/">Volver a la página principal</a>
          </body>
        </html>
      `);
    }
  
  // Ruta About
  } else if (req.url.startsWith('/about')) {
    if (isJSONRequest) {
      sendJSONResponse({ message: 'Acerca de Nosotros', status: 'success' });
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <html>
          <head>
            <title>About</title>
          </head>
          <body>
            <h1>Acerca de Nosotros</h1>
            <a href="/">Volver a la página principal</a>
          </body>
        </html>
      `);
    }
  
  // Ruta Contact
  } else if (req.url.startsWith('/contact')) {
    if (isJSONRequest) {
      sendJSONResponse({ message: 'Página de Contacto', status: 'success' });
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <html>
          <head>
            <title>Contact</title>
          </head>
          <body>
            <h1>Página de Contacto</h1>
            <a href="/">Volver a la página principal</a>
          </body>
        </html>
      `);
    }

  // Redirección de old-about a about
  } else if (req.url.startsWith('/old-about')) {
    res.writeHead(301, { 'Location': '/about' });
    res.end();
  
  // Página no encontrada
  } else {
    if (isJSONRequest) {
      sendJSONResponse({ message: 'Página no encontrada', status: 'error' });
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(`
        <html>
          <head>
            <title>404</title>
          </head>
          <body>
            <h1>404 - Página no encontrada</h1>
            <a href="/">Volver a la página principal</a>
          </body>
        </html>
      `);
    }
  }
});

// Configuración del puerto
const port = 3000;
server.listen(port, () => {
  //repuesta en tipo json 
  //las otras respuestas hasta ahora solo cambian la doreccion en la barra del buscador 
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
