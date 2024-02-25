import { datos } from "../db/datos.js";

const listaPokemon = datos.pokemon

export const getPokedex = (req,res)=>{
    const jsonData = JSON.stringify(listaPokemon)
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData)
}