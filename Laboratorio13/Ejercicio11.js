let auto = {
    marca : "Hyundai",
    modelo : "Tiburon",
    año : 2002,

    detalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
}
auto.detalles();