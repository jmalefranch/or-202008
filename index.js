const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("¡Server ok!");
});

const vehiculos = [
  {
    Marca: "Peugeot",
    Modelo: "206",
    Puertas: "4",
    Precio: "200.000,00",
  },
  {
    Marca: "Honda",
    Modelo: "Titan",
    Cilindrada: "125c",
    Precio: "60.000,00",
  },
  {
    Marca: "Peugeot",
    Modelo: "208",
    Puertas: "5",
    Precio: "250.000,00",
  },
  {
    Marca: "Yamaha",
    Modelo: "YBR",
    Cilindrada: "160c",
    Precio: "80.500.50",
  },
];

for (var i = 0; i < vehiculos.length; i++) {
  console.log(
    "Marca:" +
      "" +
      vehiculos[i].Marca +
      "" +
      "//" +
      "" +
      "Modelo:" +
      "" +
      vehiculos[i].Modelo +
      "" +
      "//" +
      "" +
      "Precio:" +
      "$" +
      "" +
      vehiculos[i].Precio +
      "" +
      "//" +
      ""
  );
}
console.log(
  "==================================================================="
);
console.log(
  "Vehículo más caro:" + "" + vehiculos[2].Marca + "" + vehiculos[2].Modelo
);
console.log(
  "Vehículo más barato:" + "" + vehiculos[1].Marca + "" + vehiculos[1].Modelo
);
console.log(
  "Vehículo que contiene en el modelo la letra ‘Y’:" +
    "" +
    vehiculos[3].Marca +
    "" +
    vehiculos[3].Modelo +
    "" +
    "$" +
    "" +
    vehiculos[3].Precio
);
console.log(
  "==================================================================="
);
console.log("Vehículos ordenados por precio, de mayor a menor:");
var comparativa = 0;
for (var i = 0; i < vehiculos.length; i++) {
  precioentero = parseInt(vehiculos[i].Precio);

  if (precioentero > comparativa) {
    console.log(vehiculos[i].Marca + vehiculos[i].Modelo);
  }
}
