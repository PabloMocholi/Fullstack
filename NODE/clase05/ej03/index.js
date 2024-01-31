console.clear()
console.log("Ejercicio 03")

/**
 * ej03: Crea una función llamada "FelizCumple" que tome un objeto de alumno, 
 * deconstruya sus propiedades para obtener nombre y edad, incremente la edad en uno, 
 * imprima un mensaje de cumpleaños y devuelva un array con la nueva edad y un mensaje de "datos guardados". 
 * */

let Alumno = {
    nombre:"Pablo",
    edad: 22
}
let puntoControl = [];

function FelizCumple(props){

    let {nombre, edad} = props;
    props.edad = edad + 1;

    console.log(`FELIZ CUMPLEAÑOS ${nombre}, YA TIENES ${edad} AÑOS`);
    
    return([edad, "datos guardados"]);

}

for(i = 0; i <10; i++){
    
    puntoControl.push(FelizCumple(Alumno))
    //let [eda,msg] = FelizCumple(Alumno) //se puede deconstruir el resultado
    console.log(puntoControl)
}
