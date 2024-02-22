import express from 'express'
import { libros } from './db/libros.js'
const app = express()
console.clear()

app.get("/biblioteca", (req, res) => {

    const jsonData = JSON.stringify(libros)
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData)

})

app.get("/biblioteca/:idlibro", (req, res) => {

    const idlibro = req.params.idlibro;
    const libro = libros.libros.find(libro => libro.id == idlibro)

    if (libro) {
        const jsonData = JSON.stringify(libro)
        res.setHeader("Content-Type", "application/json");
        res.send(jsonData)
    } else {
        res.send("<h3>No tenemos ese libro</h3>")
    }

})

app.get("/biblioteca/autor/:autor", (req, res) => {

    const autor = req.params.autor;
    const libro = libros.libros.filter(libro => libro.autor == autor)

    //libro.autor.includes(autor) -> no hace falta que la búsqueda sea exacta. Include devuelve un boolean

    if (libro) {
        const jsonData = JSON.stringify(libro)
        res.setHeader("Content-Type", "application/json");
        res.send(jsonData)
    } else {
        res.send("<h3>No tenemos ese autor</h3>")
    }

})


app.get("/biblioteca/categoria/:categoria", (req, res) => {

    const cat = req.params.categoria;
    const libro = libros.libros.filter(libro => libro.categoria == cat)

    if (libro) {
        const jsonData = JSON.stringify(libro)
        res.setHeader("Content-Type", "application/json");
        res.send(jsonData)
    } else {
        res.send("<h3>No tenemos esa categoría</h3>")
    }

})


app.get("/biblioteca/autores/autores", (req, res) => {

    const comparativa = []
    const noRepetidos = []
    let encontrado = false;

    libros.libros.forEach(libro => {

        comparativa.push(libro.autor)
        //console.log("comparativa: ", comparativa)

        if (comparativa.length == 1) {
            noRepetidos.push(libro.autor)
        } else {
            encontrado = false;

            for (let i = 0; i < comparativa.length - 1; i++) {

                if (comparativa[i] == libro.autor) {
                    encontrado = true
                    // console.log("REPETIDO")
                }

            }

            if (!encontrado) {
                noRepetidos.push(libro.autor)
            }
        }

    })


    res.setHeader("Content-Type", "application/json");
    res.json(noRepetidos);


})


app.get("/biblioteca/solocategoria/categoria", (req, res) => {

    const comparativa = []
    const noRepetidos = []
    let encontrado = false;
    console.log("HOLA")
    libros.libros.forEach(libro => {

        comparativa.push(libro.categoria)
        console.log("comparativa: ", comparativa)

        if (comparativa.length == 1) {
            noRepetidos.push(libro.categoria)
        } else {
            encontrado = false;

            for (let i = 0; i < comparativa.length - 1; i++) {

                if (comparativa[i] == libro.categoria) {
                    encontrado = true
                    // console.log("REPETIDO")
                }

            }

            if (!encontrado) {
                noRepetidos.push(libro.categoria)
            }
        }

    })


    res.setHeader("Content-Type", "application/json");
    res.json(noRepetidos);


})


app.get("*", (req, res) => {
    res.send("<h1>NOT FOUND</h1>")
    res.send("ruta inexistente")
})


app.listen(8080, () => {
    console.log(`Running in 8080`)
})

