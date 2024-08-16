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

        // al atributo instanciado se le aumenta o disminuye la cantidad y el stock del objeto instanciado mantiene su cambio al que se le suma o resta 
        // this.#stock = this.#stock - cantidad
        // solo si el stock es mayor o igual a la cantidad de stock a descontar se efectua una resta del stock y se le setea al stock actual
        if(this.#stock >= cantidad){
        return this.#stock = this.#stock - cantidad
        // de lo contrario se envia un mensaje a la consola
        }else{
            console.log("no se puede descontar una cantidad mayor al stock existente del producto");
            
        }
    
    
     // return this.#stock - cantidad
        
    } 

    aumentarStock (cantidad){
       return this.#stock = this.#stock + cantidad 
    }

}  

// instanciacion de la clase, esto va en el main realmente

// const producto1 = new Producto( 444, "galletas", 1000, 20)
// console.log(producto1)