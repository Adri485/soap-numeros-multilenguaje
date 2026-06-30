const UNIDADES = [
  "",
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis",
  "siete",
  "ocho",
  "nueve",
];
const DIECIS = [
  "diez",
  "once",
  "doce",
  "trece",
  "catorce",
  "quince",
  "dieciseis",
  "diecisiete",
  "dieciocho",
  "diecinueve",
];
const DECENAS = [
  "",
  "",
  "veinte",
  "treinta",
  "cuarenta",
  "cincuenta",
  "sesenta",
  "setenta",
  "ochenta",
  "noventa",
];
const CENTENAS = [
  "",
  "ciento",
  "doscientos",
  "trescientos",
  "cuatrocientos",
  "quinientos",
  "seiscientos",
  "setecientos",
  "ochocientos",
  "novecientos",
];

function unidadesYDecenas(n) {
  if (n < 10) return UNIDADES[n];
  if (n < 20) return DIECIS[n - 10];
  if (n === 20) return "veinte";
  if (n < 30) return "veinti" + UNIDADES[n - 20];
  const d = Math.floor(n / 10),
    u = n % 10;
  return u === 0 ? DECENAS[d] : `${DECENAS[d]} y ${UNIDADES[u]}`;
}

function centenas(n) {
  if (n === 100) return "cien";
  const c = Math.floor(n / 100),
    resto = n % 100;
  let texto = CENTENAS[c];
  if (resto > 0) texto += " " + unidadesYDecenas(resto);
  return texto.trim();
}

function miles(n) {
  if (n < 1000) return centenas(n);
  const m = Math.floor(n / 1000),
    resto = n % 1000;
  let texto = m === 1 ? "mil" : `${centenas(m)} mil`;
  if (resto > 0) texto += " " + centenas(resto);
  return texto.trim();
}

function millones(n) {
  if (n < 1000000) return miles(n);
  const mm = Math.floor(n / 1000000),
    resto = n % 1000000;
  let texto = mm === 1 ? "un millon" : `${miles(mm)} millones`;
  if (resto > 0) texto += " " + miles(resto);
  return texto.trim();
}

function numeroALetras(numero) {
  const n = Number(numero);
  if (n === 0) return "cero";
  if (n < 0) return "menos " + millones(Math.abs(n));
  return millones(n);
}

module.exports = { numeroALetras };
