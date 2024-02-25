import { datos } from "../db/datos.js";


const listaAtaques = datos.ataques

export const getAtaques = (req,res)=>{
    const jsonData = JSON.stringify(listaAtaques)
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData)
}