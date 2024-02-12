import './Pokemon.css'
import { useState, useEffect } from 'react'

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([])

    const cargarPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 801)}`);
            const data = await response.json();
            setPokemon(data);
            console.log(data)

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        cargarPokemon()
    }, [])
    return (<>
        <img className="LogoPokemon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
    
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt="" />
       

    </>)
}

export default Pokemon