const ArtGallery = [
    { id: 1, artist: "Monet", title: "Water Lilies", year: 1916, isExhibited: true },
    { id: 2, artist: "Van Gogh", title: "Starry Night", year: 1889, isExhibited: true },
    { id: 3, artist: "Da Vinci", title: "Mona Lisa", year: 1503, isExhibited: false },
    { id: 4, artist: "Picasso", title: "Guernica", year: 1937, isExhibited: true },
    { id: 5, artist: "Rembrandt", title: "The Night Watch", year: 1642, isExhibited: false },
    { id: 6, artist: "Dali", title: "The Persistence of Memory", year: 1931, isExhibited: true },
    { id: 7, artist: "Munch", title: "The Scream", year: 1893, isExhibited: false },
    { id: 8, artist: "Klimt", title: "The Kiss", year: 1907, isExhibited: true },
    { id: 9, artist: "Hopper", title: "Nighthawks", year: 1942, isExhibited: false },
    { id: 10, artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true }
];

//--------------
function mostrarTodo() {

    ArtGallery.forEach(a => {

        /** OPTIMIZACIÓN
         *  
         *          se puede hacer una variable para comprobar: 
         * 
         *          const Exhibited = arte.isExhibited?"SE":"NO SE"
         *          console.log(`La obra ${a.title} por el autor ${a.artist} (${a.year}) ${Exhibited} encuentra exhibida`)
         *          
         *          --------------
         * 
         *          se podría convertir en función de Callback 
         * 
         *          const imprimir = (a) =>{
         * 
         *                  const Exhibited = arte.isExhibited?"SE":"NO SE"
         *                  console.log(`La obra ${a.title} por el autor ${a.artist} (${a.year}) ${Exhibited} encuentra exhibida`)
         *          }
         * 
         *          ArtGallery.forEach(imprimir);
        */

        if (a.isExhibited)
            console.log(`La obra ${a.title} por el autor ${a.artist} (${a.year}) SE encuentra exhibida`)
        else
            console.log(`La obra ${a.title} por el autor ${a.artist} (${a.year}) NO SE encuentra exhibida`)
    })

}
//--------------
function usarMap() {
    const nuevoArray = ArtGallery.map((a) => a.title);
    console.log(nuevoArray);
}

//--------------
function usarFilter() {
    const nuevoArray = ArtGallery.filter((a) => a.isExhibited == true);
    console.log(nuevoArray);
}

//--------------
function getObra() {
    const obra = document.getElementById('titulo').value;
    buscarObra(obra);
}

function buscarObra(obra) {
    const encontrado = ArtGallery.find((a) => a.title == obra);
    if (encontrado)
        console.log(`La obra: ${encontrado.title} se ha encontrado`)
    else {
        console.log(`La obra: ${encontrado.title} no se encuentra en la exposición`)
    }

}

//--------------

function buscarObraFecha() {
    const fecha = document.getElementById('fecha').value;
    

    const encontrado =  ArtGallery.some(a =>  a.year == Number(fecha))

    if (encontrado)
        console.log("Hay obras que coinciden con esa fecha")
    else
        console.log("NO hay obras que coinciden con esa fecha")
}

//--------------

function buscarObraEpoca() {
    const fecha = document.getElementById('epoca').value;

    const encontrado = ArtGallery.every(a =>  a.year > Number(fecha) ) ///no poner llaves significa que hace un return sin necesidad de escribirlo

    if (encontrado)
        console.log(`Todas las obras son posteriores a ${fecha}`)
    else
        console.log(`Algunas obras son anteriores a ${fecha}`)


}

//--------------

function buscarObraPosicion() {
    const obra = document.getElementById('posicion').value;

    const encontrado = ArtGallery.findIndex(a => a.title == obra)


    if (encontrado != -1)
        console.log(`Tu obra: ${obra}, se encuentra en la posición ${encontrado}`)
    else
        console.log(`No se ha encontrado esa obra`)

}

//--------------

function anaydirObra() {
    const artista = document.getElementById('artista').value;
    const tit = document.getElementById('tituloObra').value;
    const anyo = document.getElementById('anyo').value;
    const mostrar = document.getElementById('mostrado').checked;

    const newId = ArtGallery.length+1;

    const NuevoObejto = {
        id: newId,
        artist: artista,
        title: tit,
        year: anyo,
        isExhibited: mostrar
    }

    ArtGallery.push(NuevoObejto);
    console.log(ArtGallery);

}


//--------------
function getObra() {
    const obra = document.getElementById('titulo').value;
    buscarObra(obra);
}

function actualizar() {

    const ident = document.getElementById('ident').value;
    const encontrado = ArtGallery.find((a) => a.id == ident);
    console.log(encontrado)

    if(encontrado){

        if( ArtGallery[encontrado.id-1].isExhibited)
            ArtGallery[encontrado.id-1].isExhibited = false ;
        else
            ArtGallery[encontrado.id-1].isExhibited = true;
       
    }else{
        console.log("No existe ese identificador")
    }
   

}






