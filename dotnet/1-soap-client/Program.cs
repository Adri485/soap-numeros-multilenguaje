using System.Text;
using System.Xml.Linq;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", async (HttpContext context) =>
{
    var numero = context.Request.Query["numero"].ToString();

    if (string.IsNullOrEmpty(numero))
    {
        context.Response.StatusCode = 400;
        await context.Response.WriteAsync("Falta el parametro ?numero=");
        return;
    }

    try
    {
        var resultadoIngles = await ConsultarSoap(numero);
        await context.Response.WriteAsJsonAsync(new { numero, resultado_ingles = resultadoIngles });
    }
    catch (Exception ex)
    {
        context.Response.StatusCode = 500;
        await context.Response.WriteAsync("Error: " + ex.Message);
    }
});

app.Run("http://localhost:4001");

static async Task<string> ConsultarSoap(string numero)
{
    var envelope = $@"<?xml version=""1.0"" encoding=""utf-8""?>
<soap:Envelope xmlns:xsi=""http://www.w3.org/2001/XMLSchema-instance"" xmlns:xsd=""http://www.w3.org/2001/XMLSchema"" xmlns:soap=""http://schemas.xmlsoap.org/soap/envelope/"">
  <soap:Body>
    <NumberToWords xmlns=""http://www.dataaccess.com/webservicesserver/"">
      <ubiNum>{numero}</ubiNum>
    </NumberToWords>
  </soap:Body>
</soap:Envelope>";

    using var client = new HttpClient();
    var content = new StringContent(envelope, Encoding.UTF8, "text/xml");
    content.Headers.Add("SOAPAction", "http://www.dataaccess.com/webservicesserver/NumberToWords");

    var response = await client.PostAsync(
        "https://www.dataaccess.com/webservicesserver/NumberConversion.wso", content);
    var xml = await response.Content.ReadAsStringAsync();

    var doc = XDocument.Parse(xml);
    var resultElement = doc.Descendants().First(e => e.Name.LocalName == "NumberToWordsResult");
    return resultElement.Value;
}