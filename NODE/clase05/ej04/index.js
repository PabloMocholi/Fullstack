console.clear();
console.log("Ejercicio 04");

/**
 * ej04: Deconstrucción de Array: Crea una función que tome un objeto de película, 
 * deconstruya sus propiedades para obtener titulo y director, y devuelva un array con estos dos valores.
 *
 */

let pelicula = {
    titulo:"Star Wars",
    diretor:"George Lucas"
}

console.log(getPeli(pelicula));

function getPeli(props){
    let {titulo, diretor} = props;

    return ([titulo, diretor]);

}