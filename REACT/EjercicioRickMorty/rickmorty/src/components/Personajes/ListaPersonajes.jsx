import { useState, useEffect } from "react"
import Personaje from "./Personaje"
import './ListaPersonajes.css'



const ListaPersonajes = ({ }) => {

    const [paginaActual, setPagina] = useState(1)
    const [personajes, setPersonajes] = useState([]);
    const [paginasTotales, setPaginasTotales] = useState(0)


    const cargarPersonajes = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${paginaActual}`);
            const data = await response.json();
            setPersonajes(data.results);
            setPaginasTotales(data.info.pages)
            //console.log("personajes", data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        cargarPersonajes();
    }, [paginaActual]);



    return (
        <>
            <h1>LISTA PERSONAJES</h1>
            <div className="DisplayPersonajes">
                {
                    personajes.length > 0 && (
                        <>
                            {

                                personajes.map((personaje) => {
                                    //console.log(personaje)
                                    return (
                                        <>
                                            <Personaje key={personaje.id} datos={personaje} />
                                        </>

                                    )
                                })
                            }

                        </>)


                }
            </div>


            <button onClick={() => {
                paginaActual > 1 &&
                    setPagina(paginaActual - 1)
            }}>Anterior</button>
            <button onClick={() => {
                paginaActual < paginasTotales &&
                    setPagina(paginaActual + 1)
            }}>Siguiente</button>
            <span>{paginaActual}/{paginasTotales} </span>

        </>
    )
}

export default ListaPersonajes