//Declaración de variables

//Los cuadros que se pintan
const cuadros = document.querySelectorAll(".cuadro");
//Los sliders
const controles = document.querySelectorAll("input");
//El campo con código de color
const codigoColor = document.querySelector("p");

//Funcion que calcula la composición de color
function hexadecimal(r,g,b){
    let codigo = [];
    //Bucle que se ejecuta por cada argumento pasado
    for(let i = 0; i < arguments.length; i++){
        //Composición hexadecimal por color
        //En caso de que el valor enviado es <16 necesito incluir un 0 para construir los pares de valor
        codigo.push((Number(arguments[i]) < 16 ? "0" : "") + Number(arguments[i]).toString(16));
    }
    //Devuelves el código de color
    return `#${codigo.join("")}`;
}

//para cada control
controles.forEach(function(control,indice){
    //añado un event listener cada vez que recibe un input
    control.addEventListener("input",function(){
        //Añado al cuadro de mezcla los colores de los valores
        cuadros[0].style.backgroundColor = hexadecimal(controles[0].value,controles[1].value,controles[2].value);
        
        //Escribo el valor del código de color
        codigoColor.innerHTML = hexadecimal(controles[0].value,controles[1].value,controles[2].value);

        //Para el cuadro actual mira su indice y solo cambio el color en RGB que le toca (1er = ROJO, 2º = GREEN , 3º= BLUE)
        cuadros[indice + 1].style.backgroundColor = hexadecimal(indice == 0 ? control.value : 0, indice == 1 ? control.value : 0, indice == 2 ? control.value : 0);

    });
});


//-------------

const divLista = document.getElementById("listaC");
let listaColores = [];
let totalColors = 0;


function guardarColor(){

    if(listaColores.length < 9){
        newColor()
     
    }else{
        listaColores.shift()
        let borrar = document.getElementById("listaC").firstChild
        borrar.remove()
        newColor()

    }
   
   console.log(listaColores)
}

function newColor(){
    totalColors++;

    listaColores.push({
        id:totalColors,
        color:codigoColor.textContent
    });


    divLista.innerHTML += `<div id="${totalColors}" style="display:flex; gap:5px">
     <span onclick="eliminarElemento(${totalColors})" style="flex-grow:1">${codigoColor.textContent}</span>
     <div  onclick="setColor('${codigoColor.textContent}')" style="width:20px;cursor:pointer; height:20px;border-radius: 20px; background-color:${codigoColor.textContent} "></div>
    </div>`
}

function setColor(color){
    // 0 1 2 3 4 5 6 
    // # 0 0 0 0 0 0 
    const parRed = color.slice(1, 3);
    const parGreen = color.slice(3, 5);
    const parBlue= color.slice(5, 7);


    const r = parseInt(parRed, 16);
    const g = parseInt(parGreen, 16);
    const b = parseInt(parBlue, 16);

    //console.log(r+" "+g +" "+b)
    //console.log(`${r}`)

    //Aplico los colores
    cuadros[0].style.backgroundColor = `rgb(${r},${g},${b})`;
    cuadros[1].style.backgroundColor = `rgb(${r},0,0)`;
    cuadros[2].style.backgroundColor = `rgb(0,${g},0)`;
    cuadros[3].style.backgroundColor = `rgb(0,0,${b})`;

    //Actualizo el texto
    codigoColor.innerHTML = color

    console.log("cambio")
}

function borrarTodo(){
    while(listaColores.length >0)
        listaColores.pop()

    divLista.innerHTML = ''
    //console.log(listaColores)

}

function eliminarElemento(idElemento){

    const borrar = document.getElementById(idElemento);
    borrar.remove();

   const pos = listaColores.findIndex(color => color.id == idElemento)
   listaColores.splice(pos,1);

   console.log(listaColores)

}


