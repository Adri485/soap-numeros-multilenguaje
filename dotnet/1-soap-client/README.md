# Cliente SOAP Manual (.NET 10)

Esta es la primera versión de nuestro cliente en .NET. A diferencia de las formas tradicionales, implementa el protocolo SOAP de manera manual utilizando `HttpClient` y `XDocument`.

Este enfoque evita dependencias de herramientas generadoras de código (como `svcutil`), permitiendo un control total sobre el XML del _envelope_ SOAP enviado.

## Cómo ejecutarlo

1. Asegúrate de estar en la carpeta `dotnet/1-soap-client/` y ejecuta:
   ```bash
   dotnet run
   ```
   El servidor iniciará en el puerto 4001. Abre en tu navegador:
   http://localhost:4001/?numero=123

Framework: .NET (Minimal API).

Protocolo: SOAP 1.1.

Procesamiento XML: System.Xml.Linq (XDocument).

Consumo HTTP: System.Net.Http (HttpClient).

Ejemplo de respuesta esperada
{
"numero": "123",
"resultado_ingles": "one hundred and twenty three "
}
