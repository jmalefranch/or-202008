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

function ParsearPrecio() {
  precioentero = [];
  for (i = 0; i < vehiculos.length; i++) {
    precioentero[i] = vehiculos[i];
    precioentero[i].Precio = parseInt(precioentero[i].Precio);
  }
}

ParsearPrecio();

function ElMasCaro() {
  precioentero.sort(function (prev, next) {
    return next.Precio - prev.Precio;
  });
}

function ElMasBarato() {
  precioentero.sort(function (prev, next) {
    return prev.Precio - next.Precio;
  });
}

ElMasCaro();
console.log(
  "Vehículo más caro:" + "" + precioentero[0].Marca + precioentero[0].Modelo
);

ElMasBarato();

console.log(
  "Vehículo más barato:" +
    "" +
    precioentero[0].Marca +
    "" +
    precioentero[0].Modelo
);

var ModeloY = [];

function BuscaModeloConLetraY() {
  for (i = 0; i < vehiculos.length; i++) {
    if (vehiculos[i].Modelo == "YBR") {
      ModeloY = vehiculos[i];
    }
  }
}

BuscaModeloConLetraY();
console.log(
  "Vehículo que contiene en el modelo la letra ‘Y’:" +
    "" +
    ModeloY.Modelo +
    "" +
    "$" +
    ModeloY.Precio
);

console.log(
  "==================================================================="
);
console.log("Vehículos ordenados por precio, de mayor a menor:");

function MostrarOrdenados() {
  precioentero.reverse();
  for (i = 0; i < precioentero.length; i++) {
    console.log(precioentero[i].Marca + precioentero[i].Modelo);
  }
}
MostrarOrdenados();
