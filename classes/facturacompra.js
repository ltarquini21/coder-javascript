class FacturaCompra {
    id = "";
    cliente = "";
    fechaDeCompra = new Date();
    detalle = [];

    constructor(id, cliente, fechaDeCompra = new Date(), detalle = []) {
        this.id = id;
        this.cliente = cliente;
        this.fechaDeCompra = fechaDeCompra;
        this.detalle = detalle;
    }

    toString() {
        return this.id + " - " + this.cliente
    }
    addItem(item) {
        this.detalle.push(item)
    }
    getDetalle() {
        return this.detalle
    }
}

console.table(ventas);
// VERIFICAR EL ORDEN DE LOS ITEMS
const ventasMapeado = ventas.map((unaVenta) => {
    return new FacturaCompra(unaVenta.id, unaVenta.cliente, unaVenta.fechaDeCompra, unaVenta.detalle.map((unItem) => {
        return new Car(unItem.id, unItem.producto, unItem.fechaDeCompra, unItem.cantidad, unItem.precio, unItem.precioDescuento);
    }));
});

console.log(ventasMapeado);