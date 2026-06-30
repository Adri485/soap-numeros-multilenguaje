# Servicio Nativo a Español (Node.js)

Este subproyecto es la versión 3 de nuestra implementación en Node.js.

A diferencia de las versiones anteriores, **no consume ningún servicio SOAP externo**. Toda la lógica de conversión es completamente local y nativa, utilizando nuestra librería compartida (`/shared/numero-a-letras.js`) para convertir números a texto en español.

## Cómo ejecutarlo

1. Levantar el servidor local (al ser nativo, no requiere dependencias externas):
   ```bash
   node index.js
   ```
   Abrir en el navegador (usamos el puerto 3003 para aislarlo de las otras versiones):
   http://localhost:3003/?numero=123

Ejemplo de respuesta esperada
{
"numero": 123,
"resultado_espanol": "ciento veintitres"
}
