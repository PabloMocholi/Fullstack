import { useState, useEffect } from 'react'
import './Pokemon.css'
const Pokemon = () => {


    const [pokedex, setPokedex] = useState([])


    const getApi = async () => {
        const controller = new AbortController();
        let opciones = {
            method: 'GET', // POST, PUT, DELETE, etc
            mode: 'cors', // no-cors, same-origin, cors
            signal: controller.signal, // para abortar la petición
            headers: {
                'Content-Type': 'application/json'
            },

        }

        fetch('http://localhost:8080/API/v1/pokedex', opciones)
            .then(function (response) {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setPokedex(data)
            })
            .finally(() => {
                controller.abort();
            })
    };

    useEffect(() => {
        getApi()
    }, [])


    return (<>
        <div className='Pokemon'>
            {
                pokedex.map((pokemon) => {

                    return (<>
                        <div className='Pokemon-div'>
                            <h2>{pokemon.nombre}</h2>
                            <img className='Pokemon-img' src={pokemon.image} alt="pokemon" />
                            <div className='Pokemon-types'>
                                {pokemon.types.map((type) => {
                                    return (<>
                                        <h4>{type}</h4></>)
                                })}
                            </div>
                        </div>

                    </>)

                })
            }
        </div>
    </>)
}

export default Pokemon