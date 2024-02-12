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

            let url = `https://rickandmortyapi.com/api/character?page=${paginaActual}`
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
    }, [paginaActual, filtro]);

    return (
        <>
            <div className="PanelControl">
                <div className="PanelControl-filtros">
                    Filtrar por STATUS
                    <div>
                        <button className={`${filtro == "alive" ? "btnA" : ""}`} onClick={() => {
                            setFiltro("alive")
                        }}>alive</button>
                        <button className={`${filtro == "dead" ? "btnA" : ""}`} onClick={() => {
                            setFiltro("dead")
                        }}>dead</button>

                    </div>
                    <div>
                        <button className={`${filtro == "unknow" ? "btnA" : ""}`} onClick={() => {
                            setFiltro("unknow")
                        }}>unknow</button>
                        <button className={`${filtro == "all" ? "btnA" : ""}`} onClick={() => {
                            setFiltro("all")
                        }}>all</button>
                    </div>

                </div>
                <h1 className="PanelControl-tit">LISTA PERSONAJES</h1>
                <div className="PanelControl-pages">
                    <div>
                        <button onClick={() => {
                            paginaActual > 1 &&
                                setPagina(paginaActual - 1)
                        }}>Anterior</button>
                        <button onClick={() => {
                            paginaActual < paginasTotales &&
                                setPagina(paginaActual + 1)
                        }}>Siguiente</button>
                    </div>
                    <div>
                        <span>{paginaActual}/{paginasTotales} </span>
                        <span>Elementos totales: {elementosPorPagina}</span>
                    </div>



                </div>
            </div>



            <div className="DisplayPersonajes">
                {

                    personajes.map((personaje) => {
                        //console.log(personaje)
                        return (
                            <>
                                <Personaje key={personaje.id} datos={personaje} />
                            </>

                        )
                    })
                            /* { 
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


                            } */
                }
            </div>



        </>
    )
}

export default ListaPersonajes