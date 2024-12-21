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

class Car{
    id = "";
    modelo = "";
    year = "";
    kms = 0;
    precio = 0;
    precioDescuento = 0;
    descripcion = "";
    cantidad = 0;
        constructor(id,modelo, year, descripcion, precio, precioDescuento, cantidad, kms){
        this.id = id;
        this.modelo = modelo;
        this.year = year;
        this.kms = kms;
        this.precio = precio;
        this.precioDescuento = precioDescuento;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
    }

toString(){

    return `El modelo que cotizaste es ${this.modelo} y es del año ${this.year} con ${this.kms} kilómetros`;
}
}
const modeloAuto = new Car(1, 'Volkswagen Fox', 2012, 'Sedán', 8500000, 120000, 1, 78453);

console.log(modeloAuto.toString());

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
    return new FacturaCompra(unaVenta.id, unaVenta.cliente, unaVenta.fechaDeCompra, unaVenta.detalle.map((unItem)=>{
        return new Car(unItem.id, unItem.producto, unItem.fechaDeCompra, unItem.cantidad, unItem.precio, unItem.precioDescuento);
    }));
});

console.log(ventasMapeado);

const autosBusqueda = [
    {nombre: 'Volkswagen Fox', precio: 8500000},
    {nombre: 'Ford Fiesta', precio: 12000000},
    {nombre: 'Ford Focus', precio: 15000000},
    {nombre: 'Renault Clio', precio:7500000},
    {nombre: 'Peugeot 208', precio:15500000},
]

const resultadoFind = autosBusqueda.find((unAuto) => unAuto.nombre === 'Ford Fiesta') 
const resultadoFind2 = autosBusqueda.find((unAuto) => unAuto.nombre === 'Volkswagen Fox') 

console.log (resultadoFind);
console.log (resultadoFind2);

const filterPorNombre = autosBusqueda.filter((unAuto) => unAuto.nombre === 'Ford Fiesta')
const filterPorPrecio = autosBusqueda.filter((unAuto) => unAuto.precio > '15000000')
const filterPorPrecio2 = autosBusqueda.filter((unAuto) => unAuto.precio > '16000000')

console.log(filterPorNombre);
console.log(filterPorPrecio);
console.log(filterPorPrecio2);