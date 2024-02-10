
import { useState, useEffect } from "react"
import Episodio from "./Episodio";
import './ListaEpisodios.css'

const ListaEpisodios = () => {


    const [episodios, setEpisodios] = useState([])
    const [paginasTotales, setPaginasTotales] = useState(0)
    const [paginaActual, setPagina] = useState(1)
    const [elementosPorPagina, setElementosPorPagina] = useState(0);

    const cargarEpisodios = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${paginaActual}`);
            const data = await response.json();
            setEpisodios(data.results);
            setPaginasTotales(data.info.pages)
            setElementosPorPagina(data.results.length);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        cargarEpisodios()
    }, [paginaActual])

    return (
        <>
            <div className="PanelControl">

                <h1 className="PanelControl-tit">LISTA EPISODIOS</h1>
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
            <div className="DisplayEpisodios">
                {
                    episodios.map((episodio) => {
                        return (
                            <>
                                {console.log(episodio)}
                                <Episodio key={episodio.id} datos={episodio} />
                            </>
                        )
                    })
                }
            </div>
            
        </>
    )

}

export default ListaEpisodios