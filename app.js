const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url.substring(1).split('/');
    if (req.method === 'GET' && url[0] === 'products') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ id: new Number(url[1]), name: 'Produto ' + url[1]}));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint não encontrado');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});