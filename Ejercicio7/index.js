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

   
    const autores = libros.libros.map( libro =>{ 

        return { autor: libro.autor };
    } )
    console.log(autores)

   
    res.setHeader("Content-Type", "application/json");
    res.json(autores);
 
    
})


app.get("*", (req, res) => {
    res.send("<h1>NOT FOUND</h1>")
    res.send("ruta inexistente")
})


app.listen(8080, () => {
    console.log(`Running in 8080`)
})

