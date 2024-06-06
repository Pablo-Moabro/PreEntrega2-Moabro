class Cervezas{
    constructor(nombre, estilo, peso, medida, precio){
        this.nombre = nombre,
        this.estilo = estilo,
        this.peso = peso,
        this.medida = medida,
        this.precio = precio
    };
}


const cerveza1 = new Cervezas("Aurora", "IPA", 1, "L", 5000);
const cerveza2 = new Cervezas("Dragon", "Red Ale", 1, "L", 4500);
const cerveza3 = new Cervezas("Lobo", "Stout", 1, "L", 4200);
const cerveza4 = new Cervezas("Centauro", "Belgian", 1, "L", 4800);

let compraUsuario = [];
let compra;

while(compra != 0){
    compra = prompt("Ingrese las Cervezas que desea compra: \n 1. Aurora IPA \n 2. Dragon Red Ale, \n 3. Lobo Stout \n 4. Cetauro Belgian \n 0. Salir");
    if (compra == 1){
        compraUsuario.push(cerveza1);
    } else if (compra == 2){
        compraUsuario.push(cerveza2);
    } else if (compra == 3){
        compraUsuario.push(cerveza3);
    }else if (compra == 4){
        compraUsuario.push(cerveza4);
    } else if (compra == 0){
        alert("gracias por su compra");
    } else{
        alert("Opción inválida");
    }
};




console.log(compraUsuario);

















