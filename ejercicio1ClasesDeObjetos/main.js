import Producto from "./producto.js"

const producto1 = new Producto( 444, "galletas", 1000, 20 )
const producto2 = new Producto( 555, "pizza", 3000, 10)
const producto3 = new Producto( 666, "jugo", 1400, 60)
const producto4 = new Producto( 777, "pan", 1300, 200)


console.log(producto1.descontarStock(2));
console.log(producto1.aumentarStock(21));
// console.log(producto2.)
// console.log(producto1.descontarStock(6))