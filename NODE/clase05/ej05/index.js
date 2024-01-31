console.clear();
console.log("Ejercicio 05");

/**
 * 
ej05: Deconstrucción de Datos del Clima: Crea una función que tome un array de datos de clima,
 deconstruya sus propiedades para obtener temperatura y humedad, y devuelva un objeto con estos dos valores.
 */

let datosClima = [23+"ºC",40+"%"];


console.log(getClima(datosClima));

function getClima(props){
    let [temperatura, humedad] = props;

    return ({
        temp: temperatura,
        hum: humedad
    });

}