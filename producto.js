export default class Producto {

    #idProducto
    #nombreProducto
    #precioUnitario
    #stock

    constructor(idProducto, nombreProducto, precioUnitario, stock){

        this.#idProducto = idProducto;
        this.#nombreProducto = nombreProducto;
        this.#precioUnitario = precioUnitario;
        this.#stock = stock;

    }

    get idProducto(){
        return this.#idProducto;
    }

    set idProducto(idProducto){
        this._idProducto = idProducto;
    }

    // ------------------------------

    get nombreProducto(){
        return this.#nombreProducto;
    }

    set nombreProducto(nombreProducto){
        this.#nombreProducto = nombreProducto;
    }

    // ------------------------------

    get precioUnitario(){
        return this.#precioUnitario;
    }

    set precioUnitario(precioUnitario){
        this.#precioUnitario = precioUnitario;
    }

    // ------------------------------

    get stock(){
        return this.#stock;
    }

    set stock(stock){
        this.#stock = stock;
    }

    // Funciones particulares de este objeto (2)
    
    descontarStock (cantidad){

        // al atributo instanciado se le aumenta o disminuye la cantidad, el stock del objeto instancia mantiene su cambio
        // this.#stock = this.#stock - cantidad
        // if(this.#stock >= cantidad){
        this.#stock = this.#stock - cantidad
       //
    }    
    aumentarStock (cantidad){
        return this.#stock + cantidad 
    }

} 