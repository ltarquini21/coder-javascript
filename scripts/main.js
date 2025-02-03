const modelos = [];
let ultimoModelo = null;


const recuperarDelStorage = () => {
    const modeloRecuperado = localStorage.getItem("Modelos");
    if (modeloRecuperado) {
        const modelosParseados = JSON.parse(modeloRecuperado);
        modelosParseados.forEach((modelo) => {
            const nuevoModelo = new Car(
                modelo.id,
                modelo.modelo,
                modelo.year
            );
            modelos.unshift(nuevoModelo);
        });
    }
};


const buscarModeloPorNombre = (modelo) => {
    return modelos.find((car) => car.modelo.toLowerCase() === modelo.trim().toLowerCase());
};


const validandoModeloACotizar = (modelo = "carForm") => {
    if (modelo.trim().length === 0) {
        return "Debe agregar un modelo a cotizar.";
    }
    if (modelo.trim().length < 5) {
        return "El modelo debe tener al menos 5 caracteres.";
    }
    return null;
};


const renderizarModelos = () => {
    const listaModelos = document.getElementById("listaModelos");
    listaModelos.innerHTML = "";

    modelos.forEach((car, index) => {
        const item = document.createElement("li");
        item.textContent = `${car.modelo} - Año: ${car.year}`;


        const btnVer = document.createElement("button");
        btnVer.textContent = "Ver";
        btnVer.addEventListener("click", () => {
            Swal.fire({
                title: car.modelo,
                text: `Año: ${car.year}`,
                icon: "info",
                showClass: {
                    popup: "animate__animated animate__fadeInUp animate__faster"
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutDown animate__faster"
                }
            });
        });


        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => {
            Swal.fire({
                title: "¿Estás seguro?",
                text: "Esta acción eliminará el modelo de la lista.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar",
                showClass: {
                    popup: "animate__animated animate__fadeInUp animate__faster"
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutDown animate__faster"
                }
            })
            modelos.splice(index, 1);
            localStorage.setItem("Modelos", JSON.stringify(modelos));
            renderizarModelos();
        });


        item.appendChild(btnVer);
        item.appendChild(btnEliminar);
        listaModelos.appendChild(item);
    });
};


document.addEventListener("DOMContentLoaded", () => {
    recuperarDelStorage();
    renderizarModelos();
});


const crearEvento = (modelo, year) => {
    const error = validandoModeloACotizar(modelo);
    if (error !== null) {
        alert(error);
        return false;
    }

    const carExistente = buscarModeloPorNombre(modelo);
    if (carExistente) {
        Swal.fire({
            title: 'Error!',
            text: 'El modelo ya existe',
            icon: 'error',
            confirmButtonText: 'ACEPTAR'
        })
        return false;
    }

    const nuevoModelo = new Car(modelos.length + 1, modelo, year);
    modelos.unshift(nuevoModelo);
    localStorage.setItem("Modelos", JSON.stringify(modelos));
    Swal.fire({
        title: 'Hecho!',
        text: 'El modelo se agregó exitosamente',
        icon: 'success',
        confirmButtonText: 'ACEPTAR'
    })

    renderizarModelos();
    return true;
};


document.addEventListener("DOMContentLoaded", () => {
    recuperarDelStorage();
    renderizarModelos();
});


const form = document.getElementById("carForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombreAutoIngresado = document.getElementById("carName").value;
    const modeloAutoIngresado = document.getElementById("carYear").value;

    if (crearEvento(nombreAutoIngresado, modeloAutoIngresado)) {
        form.reset();
    }
});

fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
    .then(response => response.json())
    .then(data => {
        let lista = document.getElementById();
        data.forEach(marca => {
            lista.innerHTML += `<p>${marca.nome}</p>`;
        });
    })
    .catch(error => console.error("Error:", error));
