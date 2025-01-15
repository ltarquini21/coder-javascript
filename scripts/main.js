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
// cotizacionAuto == 1 ? alert("Elegiste cotizar vía mail") : alert("Elegiste cotizar vía web")
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
const modelos = []

const buscarModeloPorNombre = (modelo) => {
    return modelos.find((car) => car.descripcion.toLowerCase() === modelo.trim().toLowerCase());
}
const validandoInputs = (modelo = "carForm") => {
    if(modelo.trim().length === 0)
        {return "El modelo se encuentra vacío"}
    if(modelo.trim().length < 5)
        {return "El modelo debe tener al menos 5 carácteres"};
    return null;
    
}


const crearEvento = (modelo) => {
    const error = validandoInputs(modelo);
    if(error !== null){
        alert(error);
        return false;
    
    }

    const car = buscarModeloPorNombre(modelo);
    if(car){
        alert("El modelo ya existe");
        return false;
    }
    const nuevoModelo = new Car(modelos.length +1, modelo, new FacturaCompra(1, "Pendiente"));
    modelos.unshift(nuevoModelo);
    return true;

}


const form = document.getElementById("carForm");
form.addEventListener("submit", (event)=> {
    event.preventDefault();
    console.log(event);
    
    const nombreAutoIngresado = document.getElementById("carName").value;
    const modeloAutoIngresado = document.getElementById("carModel").value;
    console.log(`El auto ingresado es: ${nombreAutoIngresado}, y el modelo es: ${modeloAutoIngresado}`);
    if(crearEvento(nombreAutoIngresado, modeloAutoIngresado)){
        console.table(modelos);
        form.reset();
    }
})


    const autosBusqueda = [
        { nombre: 'Volkswagen Fox', precio: 8500000 },
        { nombre: 'Ford Fiesta', precio: 12000000 },
        { nombre: 'Ford Focus', precio: 15000000 },
        { nombre: 'Renault Clio', precio: 7500000 },
        { nombre: 'Peugeot 208', precio: 15500000 },
    ]

    const resultadoFind = autosBusqueda.find((unAuto) => unAuto.nombre === 'Ford Fiesta')
    const resultadoFind2 = autosBusqueda.find((unAuto) => unAuto.nombre === 'Volkswagen Fox')

    console.log(resultadoFind);
    console.log(resultadoFind2);

    const filterPorNombre = autosBusqueda.filter((unAuto) => unAuto.nombre === 'Ford Fiesta')
    const filterPorPrecio = autosBusqueda.filter((unAuto) => unAuto.precio > '15000000')
    const filterPorPrecio2 = autosBusqueda.filter((unAuto) => unAuto.precio > '16000000')

    console.log(filterPorNombre);
    console.log(filterPorPrecio);
    console.log(filterPorPrecio2);

// let cliente1 = {
//         nombre: "Tarquini, Laureano",
//         edad: 28,
//         productoComprado: "Volkswagen Fox",        
// };

// localStorage.setItem("primerObjeto", cliente1);
// let unObjetoRecuperado = localStorage.getItem("primerObjeto");
// // alert("El valor que tiene la clave unTexto en el localstorage es: " + unObjetoRecuperado);
// console.log(unObjetoRecuperado);

// let cliente2 = {
//     nombre: "Cruz, Pedro",
//     edad: 34,
//     productoComprado: "Ford Fiesta",
// }
// localStorage.setItem("segundoObjeto", cliente2);

// let unObjetoRecuperado2 = localStorage.getItem("segundoObjeto");

// console.log(unObjetoRecuperado2);

// let cliente3 = {
//     nombre: "Acosta, Esteban",
//     edad: 32,
//     productoComprado: "Ford Focus",
// }
// localStorage.setItem("tercerObjeto", cliente3);

// let unObjetoRecuperado3 = localStorage.getItem("tercerObjeto");

// console.log(unObjetoRecuperado3);


// let cliente4 = {
//     nombre: "Silva, Leandro",
//     edad: 43,
//     productoComprado: "Renault Clio",
// }
// localStorage.setItem("cuartoObjeto", cliente4);

// let unObjetoRecuperado4 = localStorage.getItem("cuartoObjeto");

// console.log(unObjetoRecuperado4);

// let cliente5 = {
//     nombre: "Fernandez, Patricia",
//     edad: 54,
//     productoComprado: "Peugeot 208",
// }
// localStorage.setItem("quintoObjeto", cliente5);

// let unObjetoRecuperado5 = localStorage.getItem("quintoObjeto");

// console.log(unObjetoRecuperado5);

// const cliente1JSON = { id: 1, nombre: "Tarquini, Laureano",
//     edad: 28,
//     productoComprado: "Volkswagen Fox"
// }
// for(let i = 0; i < localStorage.length; i++){
//     let clave = localStorage.key(i);
//     console.log("Clave:" + clave);
//     console.log("Valor:" + localStorage.getItem(clave));
        
// }