console.clear();
console.log("Ejercicio 05");

/**
 * 
 * ej05: Deconstrucción de Datos del Clima: Crea una función que tome un objeto de datos de clima,
 *  deconstruya sus propiedades para obtener temperatura y humedad, y devuelva un array con estos dos valores.
 */

let datosClima = {
    temperatura: 23+"ºC",
    humedad: 40+"%"
}

console.log(getClima(datosClima));

function getClima(props){
    let {temperatura, humedad} = props;

    return ([temperatura, humedad]);

}