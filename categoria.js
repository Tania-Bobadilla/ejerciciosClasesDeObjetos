export default class Categoria {

    #idCategoria
    #nombre
    #productos

    constructor(idCategoria, nombre, productos = []){
        this.#idCategoria = idCategoria;
        this.#nombre = nombre;
        this.productos = productos;
    }

    get idCategoria(){
        return this.#idCategoria;
    }

    set idCategoria(idCategoria){
        this.#idCategoria = idCategoria;
    }

    // ------------------------------

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    // ------------------------------

    get productos(){
        return this.#productos;
    }

    set productos(productos){
        this.#productos = productos;
    }

    // esta funcion es para agregar un categoria al array vacio del constructor
    // agregarCategoriaDeProductos(productos){
    //     return this.#productos.push(productos);
    // }

    // esta funcion es para recorrer una categoria y mostrar uno de sus indices
    // recorrerArrayDeProductos(){
    //     this.#productos.forEach(producto => {
    //         return producto.stock;
    //     });    
    // }

    totalStockPorCategoria(){
        let total = 0;
        this.#productos.forEach((producto) => {
            total = total + producto.stock;
        });
        return total;
    }

    
    

    // calcularMontoDetalle(){
    //     this.#productos = * this.pr.precioUnitario;
    // }

    // totalStockPorCategoria(){
    //     let total = 0;
    //     this.#productos.forEach((producto) => {
    //         total += producto.calcularMontoDetalle();
    //     });
    //     return total;
    // }

    
    

    // calcular total stock por categoria

    // totalStockPorCategoria(){
    //     const arregloResultadosDetalle = this.#detallesOrden.map((detalle) => {
    //         return detalle.calcularMontoDetalle();
    //     });
        
    //     const resultado = arregloResultadosDetalle.reduce((acumulador, valorASumar) => {
    //         return acumulador + valorASumar;
    //     }, 0);
    //     return resultado;
    // }

    // const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
    // const initialValue = 0;
    // const sumWithInitial = array1.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue,
    //     initialValue,
    // );

    // console.log(sumWithInitial);
// Expected output: 10

}