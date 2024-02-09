import { useState, useEffect } from "react"
import Personaje from "./Personaje"
import './ListaPersonajes.css'



const ListaPersonajes = ({ }) => {

    const [paginaActual, setPagina] = useState(1)
    const [personajes, setPersonajes] = useState([]);
    const [paginasTotales, setPaginasTotales] = useState(0)
    const [elementosPorPagina, setElementosPorPagina] = useState(0);
    const [filtro, setFiltro] = useState("all")


    const cargarPersonajes = async () => {
        try {

            let url =  `https://rickandmortyapi.com/api/character?page=${paginaActual}`
            if (filtro !== "all") {
                url += `&status=${filtro}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            setPersonajes(data.results);
            setPaginasTotales(data.info.pages);
            setElementosPorPagina(data.results.length);
            //console.log("personajes", data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        cargarPersonajes();
    }, [paginaActual,filtro]);

    return (
        <>
            <h1>LISTA PERSONAJES</h1>
            <div className="DisplayPersonajes">
                {
                    personajes.length > 0 && (
                        <>
                            {
                                filtro == "all" &&
                                personajes.map((personaje) => {
                                    //console.log(personaje)
                                    return (
                                        <>
                                            <Personaje key={personaje.id} datos={personaje} />
                                        </>

                                    )
                                })
                            }
                            {
                                filtro == "dead" &&
                                personajes.map((personaje) => {
                                    console.log(personaje.status)
                                    return (personaje.status == "Dead" &&
                                        <>
                                            <Personaje key={personaje.id} datos={personaje} />
                                        </>

                                    )
                                })
                            }
                            {
                                filtro == "alive" &&
                                personajes.map((personaje) => {
                                    console.log(personaje.status)
                                    return (personaje.status == "Alive" &&
                                        <>
                                            <Personaje key={personaje.id} datos={personaje} />
                                        </>

                                    )
                                })
                            }
                               {
                                filtro == "unknow" &&
                                personajes.map((personaje) => {
                                    console.log(personaje.status)
                                    return (personaje.status == "unknown" &&
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
            <span>Elementos totales: {elementosPorPagina}</span>

            <div>
                <button onClick={() => {
                    setFiltro("alive")
                }}>alive</button>
                <button onClick={() => {
                    setFiltro("dead")
                }}>dead</button>
                <button onClick={() => {
                    setFiltro("unknow")
                }}>unknow</button>
                <button onClick={() => {
                    setFiltro("all")
                }}>all</button>
            </div>

        </>
    )
}

export default ListaPersonajes