const nombre = prompt("Ingresa tu nombre para continuar");
let cotizacionAuto;


while (nombre + cotizacionAuto) {
    cotizacionAuto = prompt("Bienvenida/o " + nombre + "\nIngresá 1 si querés recibir una cotización por E-mail. \nIngresá 2 si querés cotizarlo a través de nuestra Web. \nIngresá 3 si querés que nos comuniquemos con usted.");
    if (cotizacionAuto === "1" || cotizacionAuto === "2" || cotizacionAuto === "3") {
        
    }
    if (cotizacionAuto == 1) {
        alert("Elegiste cotizar vía mail")
        break
    }
    else if (cotizacionAuto == 2) {
        alert("Elegiste cotizar vía web")
        break
    }
    else if (cotizacionAuto == 3) {
        alert("Nos comunicaremos con usted vía celular")

    }
    else {
        alert("Elige una opción correspondiente")
    }
}

let cotizacion;
let preciovwFox;
let preciofordFiesta;
let preciofordFocus;
let preciorenaultClio;
let preciopeugeot208;

const cotizacion1 = {
    nombreAuto: "Volkswagen Fox",
    precioCotizado: 8500000
}
const cotizacion2 ={
    nombreAuto: "Ford Fiesta",
    precioCotizado: 12000000
}
const cotizacion3 ={
    nombreAuto: "Ford Focus",
    precioCotizado: 15000000
}
const cotizacion4 ={
    nombreAuto: "Renault Clio",
    precioCotizado: 7500000
}
const cotizacion5 ={
    nombreAuto: "Peugeot 208",
    precioCotizado: 15500000
}

while (nombre + cotizacionAuto){
    cotizacion = parseInt(prompt("Que auto quisieras cotizar? \nOpción 1- Volkswagen Fox $8500000 \nOpción 2- Ford Fiesta $12000000 \nOpción 3- Ford Focus $15000000 \nOpción 4- Renault Clio $7500000 \nOpción 5- Peugeot 208 $15500000"));

    if (cotizacion === 1) {
        preciovwFox = 8500000;
        preciovwFox = 1;
        alert("Elegiste opción 1")
        alert("El precio del Volkswagen Fox es de $8.500.000");
        console.log("El precio cotizado es",cotizacion1.precioCotizado);
        break;
    }
    else if (cotizacion === 2) {
        preciofordFiesta = 12000000;
        preciofordFiesta = 1;
        alert("Elegiste opción 2")
        alert("El precio de Ford Fiesta es de $12.000.000");
        console.log("El precio cotizado es",cotizacion2.precioCotizado);
        break;
    }
    else if (cotizacion === 3) {
        preciofordFocus = 15000000;
        preciofordFocus = 1;
        alert("Elegiste opción 3")
        alert("El precio de Ford Focus es de $15.000.000");
        console.log("El precio cotizado es",cotizacion3.precioCotizado);
        break;
    }
    else if (cotizacion === 4) {
        preciorenaultClio = 7500000;
        preciorenaultClio = 1;
        alert("Elegiste opción 4")
        alert("El precio de Renault Clio es de $7.500.000");
        console.log("El precio cotizado es",cotizacion4.precioCotizado);
        break;
    }
    else if (cotizacion === 5) {
        preciopeugeot208 = 15500000;
        preciopeugeot208 = 1;
        alert("Elegiste opción 5");
        alert("El precio de Peugeot 208 es de $15.500.000");
        console.log("El precio cotizado es",cotizacion5.precioCotizado);
        break;
    }
    else {
        alert("Elige una opción válida");
    }
}

class Auto{
    id = "";
    modelo = "";
    year = "";
    cantidad = 0;
    precioDescuento = 0;
    descripcion = "Hola";
        constructor(id,modelo, year, descripcion, precio, precioDescuento, cantidad){
        this.id = id;
        this.modelo = modelo;
        this.year = year;
        this.descripcion = descripcion;
        this.precio = precio;
        this.precioDescuento = precioDescuento;
        this.cantidad = cantidad;
    }

toString(){

    return this.modelo + " - " + this.year
}

getMontoDescuento(){
    return this.precio * this.precioDescuento
}
getSubTotal(){
    return (this.precio * this.cantidad) - this.getMontoDescuento();
}
}
// const modeloAuto = new Auto(modelo, 2015);
// modeloAuto.verModelo();

// verModelo()
//     console.log(`El modelo que cotizaste es el ${this.modelo} y es ${this.year}`);

class FacturaCompra{
    id = "";
    cliente = "";
    fechaDeCompra = new Date();
    detalle = [];
    
    constructor(id, cliente, fechaDeCompra = new Date(), detalle =[]){
        this.id = id;
        this.cliente = cliente;
        this.fechaDeCompra = fechaDeCompra;
        this.detalle = detalle;
    }

toString(){
    return this.id + " - " + this.cliente
}
addItem(item){
    this.detalle.push(item)
}
getDetalle(){
    return this.detalle
}
}

console.table(ventas);

const ventasMapeado = ventas.map((unaVenta)=>{
    // id, cliente, fechaDeCompra, detalle =[]
    return new FacturaCompra(unaVenta.id, unaVenta.cliente, unaVenta.fechaDeCompra, unaVenta.detalle.map((unItem)=>{
        return new Auto(unItem.id, unItem.producto, unItem.precio, unItem.fechaDeCompra, unItem.cantidad, unItem.precioDescuento, unItem.patentamiento);
    }));
});

console.log(ventasMapeado);
// class Movimiento {
//     numeroCuentaCliente = "";
//     fechaHora = new Date();
//     descripcion = "";
//     monto = 0;
//     tipo = "";


//     constructor(numero, descripcion, monto) {
//         this.numeroCuentaCliente = numero;
//         this.fechaHora = new Date();
//         this.descripcion = descripcion;
//         this.monto = monto;
//         if (monto >= 0) {
//             this.tipo = "INGRESO";

//         }
//         else {
//             this.tipo = "EGRESO";
//         }

//     }
// }
// class CuentaBanco {
//     cliente = "";
//     numeroCuenta = "";
//     saldo = 0;
//     fechaCreacion = "";
//     habilitado = true;
//     movimientos = [];

//     constructor(clienteNombre, numero, saldo, fecha, habilitado) {
//         this.cliente = clienteNombre;
//         this.numeroCuenta = numero;
//         this.saldo = saldo;
//         this.fechaCreacion = new Date().toISOString;
//         this.habilitado = true;
//         this.movimientos = [];
        
//     }
//     toString() {
//         return this.numeroCuenta + "($ " + this.saldo.toFixed(2) + ")";

//     }
//     equals(entity) {

//         if (!entity) { return false; }
//         return this.numeroCuenta === entity.numeroCuenta
//     }

//     compareAmount(amount) {
//         return this.saldo === amount
//     }
//     getMovimientos() {
//         return this.movimientos;
//     }
    
//     addMovement(movement) {
//         debugger
//         if (!movement) { return false }
//         if (movement.monto < 0 && this.saldo < (movement.monto * -1)) {
//             return false;
//         }
//         this.movimientos.push(movement);
//         if (movement.monto < 0) {
//             this.saldo = this.saldo + movement.monto;
//         }
//         else{
            
//             this.saldo = this.saldo -(movement.monto *-1);
//         }
//         return true;
//     }
// }

// // Creacion de objetos
// const cuenta1 = new CuentaBanco("Laureano", "5000", 40000);
// cuenta1.addMovement(new Movimiento("5001", "Compra en Musimundo", -2300));
// cuenta1.addMovement(new Movimiento("5002", "Pago de internet", -1800));
// cuenta1.addMovement(new Movimiento("5000", "Ingreso de dinero", 15000));
// const cuenta2 = new CuentaBanco("Fiorella", "2500", 3000);

// // Comparamos cuentas
// console.table(cuenta1);
// console.table(cuenta2);

// if (cuenta1.equals(cuenta2)) {
//     console.log("Las cuentas son iguales");
// }
// else {
//     console.log("Las cuentas NO son iguales");

// }

// console.log(cuenta2.compareAmount(cuenta1.saldo));
// console.log(cuenta2.compareAmount(8000));
// console.log(cuenta2.compareAmount(5000));
// console.log(cuenta2.compareAmount(3000));
