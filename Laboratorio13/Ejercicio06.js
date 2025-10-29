const nombres = (array) =>{
    const nombresEliminador = new Set (array);
    return Array.from(nombresEliminador);
}
const lista = ["Ana", "Luis", "Pedro", "Ana", "Maria", "Luis"];
console.log(nombres(lista));