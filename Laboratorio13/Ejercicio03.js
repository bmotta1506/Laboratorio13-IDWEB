const reordenarPalabras = (frase) => {

    return frase
        .split(' ')
        .map(palabra => palabra.toUpperCase())
        .sort();

}

console.log(reordenarPalabras("Hola mundo desde JavaScript"));