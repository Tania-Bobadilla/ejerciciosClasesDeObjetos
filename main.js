import Producto from "./producto.js";

// categoria lacteos

let producto1 = new Producto (222, "leche", 1000, 20);
let producto2 = new Producto (334, "queso", 3000, 60);
let producto3 = new Producto (111, "yogurt", 500, 40 );
let categoriaLacteos = [producto1, producto2, producto3];

console.log(categoriaLacteos)

s
// categoria verduras

let producto4 = new Producto (555, "cebolla", 900, 440);
let producto5 = new Producto (666, "espinaca", 1000, 890);
let producto6 = new Producto (777, "choclo", 2000, 201);
let categoriaVerduras = [producto4, producto5, producto6];

console.log(categoriaVerduras)


// categoria alcohol

let producto7 = new Producto (110, "whisky", 3000, 40);
let producto8 = new Producto (119, "gin", 5000, 90);
let producto9 = new Producto (116, "cerveza", 2000, 21);
let categoriaAlcohol = [producto7, producto8, producto9];

console.log(categoriaAlcohol)

// push, agregar
// filter, para busca
// foreach para listar
// buscar metodo de arreglo para eliminar 
