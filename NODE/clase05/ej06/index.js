console.clear();
console.log("Ejercicio 06");

/**
 * ej06: Deconstrucción de vectores: Crea una función llamada vectorAObjeto que tome un vector como argumento.
 *  Este vector contendrá información sobre una persona en el siguiente formato: persona = ["Juan", "Pérez", 30];
// Debe mostrar { nombre: "Juan", apellido: "Pérez", edad: 30 }
 */
let persona = ["Juan", "Pérez", 30];

function vectorAObjeto(props) {

    let [nombre, apellido, edad] = props;
    return ({
        nombre: nombre,
        apellido: apellido,
        edad: edad
    })

}

console.log(vectorAObjeto(persona));

//----


