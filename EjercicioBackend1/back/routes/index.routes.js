import { Router } from "express";
import { datos } from "../db/datos.js";

import { addPokemon, getPokedex } from "../controllers/pokemon.controller.js";
import { getAtaques } from "../controllers/movimientos.controller.js";

const router = Router();

const listaCiudades = datos.ciudades


/**
 * 
 *  Pokemon
 * 
 */

router.get("/pokedex", getPokedex)
router.post("/pokedex", addPokemon)

/**
 * 
 *  Ciudades
 * 
 */
router.get("/ciudades", (req,res)=>{
    const jsonData = JSON.stringify(listaCiudades)
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData)
})

/**
 * 
 *  Ataques
 * 
 */
router.get("/ataques", getAtaques)



export default router