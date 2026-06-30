# Cliente SOAP + Traducción a Español (Node.js)

Este subproyecto es la versión 2 de nuestro cliente en Node.js. Cumple con dos funciones:

1. Consume el servicio SOAP público `NumberConversion` para obtener el número convertido a palabras en inglés.
2. Utiliza una librería local compartida (`/shared/numero-a-letras.js`) para generar la traducción exacta al español basándose en el número original.

## Cómo ejecutarlo

1. Instalar las dependencias (se requiere el paquete `soap`):
   ```bash
   npm install
   ```
