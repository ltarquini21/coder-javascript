const modelos = [];
let ultimoModelo = null;
const recuperarDelStorage = () => {
    const modeloRecuperado = localStorage.getItem("Modelos");
    if(modeloRecuperado){
        const modelosParseados = JSON.parse(modeloRecuperado);
        modelosParseados.forEach((modelo) =>{
            const nuevoModelo = new Car (
                modelo.id,
                modelo.modelo,
                modelo.year,
                modelo.descripcion,
                modelo.precio,
                modelo.precioDescuento,
                modelo.cantidad,
                modelo.kms
            );
            modelos.unshift(nuevoModelo);
        })
    }
}

const buscarModeloPorNombre = (modelo) => {
    return modelos.find((car) => car.modelo.toLowerCase() === modelo.trim().toLowerCase());
}
const validandoModeloACotizar = (modelo = "carForm") => {
    if(modelo.trim().length === 0)
        {return "Debe agregar un modelo a cotizar."}
    if(modelo.trim().length < 5)
        {return "El modelo debe tener al menos 5 carácteres"};
    return null;
    
}


const crearEvento = (modelo) => {
    const error = validandoModeloACotizar(modelo);
    if(error !== null){
        alert(error);
        return false;
    
    }

    const carExistente = buscarModeloPorNombre(modelo);
    if(carExistente){
        alert("El modelo ya existe");
        return false;
    }
    const nuevoModelo = new Car(modelos.length +1, modelo);
    localStorage.setItem("unModelo", JSON.stringify(nuevoModelo))
    modelos.unshift(nuevoModelo);
    localStorage.setItem("Modelos", JSON.stringify(modelos))
    alert("El modelo se agregó exitosamente")
    return true;

}
document.addEventListener("DOMContentLoaded", () => {
    recuperarDelStorage();
})
const form = document.getElementById("carForm");
form.addEventListener("submit", (event)=> {
    event.preventDefault();
    // console.log(event);
    
    const nombreAutoIngresado = document.getElementById("carName").value;
    const modeloAutoIngresado = document.getElementById("carYear").value;
    if(crearEvento(nombreAutoIngresado, modeloAutoIngresado)){
        // console.table(modelos);
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

    // console.log(resultadoFind);
    // console.log(resultadoFind2);

    const filterPorNombre = autosBusqueda.filter((unAuto) => unAuto.nombre === 'Ford Fiesta')
    const filterPorPrecio = autosBusqueda.filter((unAuto) => unAuto.precio > '15000000')
    const filterPorPrecio2 = autosBusqueda.filter((unAuto) => unAuto.precio > '16000000')

    // console.log(filterPorNombre);
    // console.log(filterPorPrecio);
    // console.log(filterPorPrecio2);