const http = require("http");
const url = require("url");
const soap = require("soap");

const WSDL_URL =
  "https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL";
const PORT = 3001;

http
  .createServer(async (req, res) => {
    const { query } = url.parse(req.url, true);
    const numero = query.numero;

    if (!numero) {
      res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Falta el parametro ?numero=");
    }

    try {
      const client = await soap.createClientAsync(WSDL_URL);
      const result = await client.NumberToWordsAsync({ ubiNum: numero });
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(
        JSON.stringify({
          numero: Number(numero),
          resultado_ingles: result[0].NumberToWordsResult,
        }),
      );
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Error consultando el servicio SOAP: " + err.message);
    }
  })
  .listen(PORT, () =>
    console.log(`Server en http://localhost:${PORT}/?numero=123`),
  );
