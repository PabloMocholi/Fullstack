console.clear()
console.log("Ejercicio 01");



let mostrarDatos = (nombre, edad) =>{
    return (`Mi nombres es ${nombre} y mi edad es ${edad}`);
}

let nombre = "María"
let edad = 25;

const texto = mostrarDatos(nombre,edad);
console.log(texto);

console.log(mostrarDatos("Juan",26));

// -------- DECONSTRUCCIÓN --------

//construir el array
let diasSemana = ["Lunes","Martes","Miércoles","..."];

//deconstruir el array (manera NO ÓPTIMA)
// let dia1 = diasSemana[0];
// let dia2 = diasSemana[1];
// let dia3 = diasSemana[2];
// let dia4 = diasSemana[3];


//deconstruir el array (manera ÓPTIMA)
let [dia1, dia2, dia3, dia4] = diasSemana;
console.log("días de la semana:", dia1,dia2,dia3);

let alumno = {
    nombreA:"Juan", //nombre,
    //hobbie:["hobbi31", "hobbie2"],
    edadA: 19
} 
    
let {nombreA, edadA} = alumno
console.log(edadA)





//console.log(`Mi nombres es ${nombre} y mi edad es ${edad}`)

