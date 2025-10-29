let cantidad = parseInt(prompt("Ingrese la cantidad de números a ingresar:"));
const arreglo = new Array(cantidad);
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i]= parseInt(prompt("Ingrese el número de la posicion " + (i + 1) + ":"));
    console.log("Número en la posición " + (i + 1) + ": " + arreglo[i]);
}

const tieneDuplicados = (array) => {
    const conjunto = new Set(array);
        if(conjunto.size !== array.length){
            return true;
        }
    return false;
}

console.log("¿El arreglo tiene numeros duplicados? " + tieneDuplicados(arreglo));