import Producto from "./producto2.js";
import Categoria from "./categoria.js";

// categoria lacteos

let lacteo1 = new Producto (222, "leche", 1000, 20);
let lacteo2 = new Producto (334, "queso", 3000, 60);
let lacteo3 = new Producto (111, "yogurt", 500, 40 );
// esto es solo para mostrar la categoria en la consola
let categoriaLacteos = [lacteo1, lacteo2, lacteo3];
// esto es para usar 
const categoria1 = new Categoria('1', 'lácteos', categoriaLacteos);
console.log(categoria1.totalStockPorCategoria());

// console.log(categoriaLacteos.recorrerArray());

// categoriaLacteos.forEach(lacteo=> {
//     return lacteo.stock;
// });

// categoria verduras

let verdura1 = new Producto (555, "cebolla", 900, 440);
let verdura2 = new Producto (666, "espinaca", 1000, 890);
let verdura3 = new Producto (777, "choclo", 2000, 201);
let categoriaVerduras = [verdura1, verdura2, verdura3];

console.log(categoriaVerduras)

// categoria alcohol

let alcohol1 = new Producto (110, "whisky", 3000, 40);
let alcohol2 = new Producto (119, "gin", 5000, 90);
let alcohol3 = new Producto (116, "cerveza", 2000, 21);
let categoriaAlcohol = [alcohol1, alcohol2, alcohol3];

console.log(categoriaAlcohol)

// push, agregar
// filter, para busca
// foreach para listar
// buscar metodo de arreglo para eliminar 
