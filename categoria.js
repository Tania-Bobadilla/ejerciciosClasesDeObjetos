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

    // calcular total stock por categoria

    // totalStockPorCategoria(){
    //     return this.#productos = 
    // }
}