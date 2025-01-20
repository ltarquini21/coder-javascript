class Car {
    id = "";
    modelo = "";
    year = "";
    kms = 0;
    precio = 0;
    precioDescuento = 0;
    descripcion = "";
    cantidad = 0;

    constructor(id, modelo, year, descripcion, precio, precioDescuento, cantidad, kms) {
        this.id = id;
        this.modelo = modelo;
        this.year = year;
        this.kms = kms;
        this.precio = precio;
        this.precioDescuento = precioDescuento;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
    }

    toString() {
        return `El modelo que cotizaste es ${this.modelo} y es del año ${this.year} con ${this.kms} kilómetros.`;
    }
}