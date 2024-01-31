console.clear();
console.log("Ejercicio 02");

let Alumno = {
    nombre: "Dolores",
    edad: 39
}

let mostrarDatos = (props)=>{

    let {nombre, edad} = props
    return (`Mi nombre es ${nombre} y mi edad es ${edad}`)

}

let mostrarDatos2  = ({nombre, edad})=>{ //deconstrucción 

    return (`Mi nombre es ${nombre} y mi edad es ${edad}`)

}

console.log("1 ",mostrarDatos(Alumno))
console.log("2 ",mostrarDatos2(Alumno))