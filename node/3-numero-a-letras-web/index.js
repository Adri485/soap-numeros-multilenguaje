const http = require("http");
const url = require("url");
const { numeroALetras } = require("../shared/numero-a-letras");

const PORT = 3003;

http
  .createServer((req, res) => {
    const { query } = url.parse(req.url, true);
    const numero = query.numero;

    if (!numero) {
      res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Falta el parametro ?numero=");
    }

    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(
      JSON.stringify({
        numero: Number(numero),
        resultado_espanol: numeroALetras(numero),
      }),
    );
  })
  .listen(PORT, () =>
    console.log(`Server en http://localhost:${PORT}/?numero=123`),
  );
