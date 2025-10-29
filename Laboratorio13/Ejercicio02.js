const arreglo = new Array(5);

for( let i=0; i<arreglo.length; i++){
    arreglo[i] = parseInt(prompt("Ingrese un número "+(i+1)+": "));
}

const filtrarYtransformar = (array) => {
    let suma = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] < 0){
            array.splice(i, 1);
            i--;
        }
    }
    for (let i=0; i<array.length; i++){
        array[i] = array[i]**2;
    }
    for (let i=0; i<array.length; i++){
        suma += array[i];
    }
    return suma;

}
console.log("Arreglo original: " + arreglo);
const arregloTransformado = filtrarYtransformar(arreglo);
console.log("Arreglo transformado (suma sin negativos y al cuadrado): " + arregloTransformado);