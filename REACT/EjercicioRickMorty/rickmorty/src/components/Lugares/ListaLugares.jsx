
import { useState, useEffect } from "react"
import Lugar from "./Lugar";
import './ListaLugares.css'

const ListaLugares = () => {


    const [lugares, setLugares] = useState([])
    const [paginasTotales, setPaginasTotales] = useState(0)
    const [paginaActual, setPagina] = useState(1)
    const [elementosPorPagina, setElementosPorPagina] = useState(0);

    const cargarPersonajes = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/location?page=${paginaActual}`);
            const data = await response.json();
            setLugares(data.results);
            setPaginasTotales(data.info.pages)
            setElementosPorPagina(data.results.length);
            console.log("lugares", data)
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        cargarPersonajes()
    }, [paginaActual])

    return (
        <>
            <div className="PanelControl">

                <h1 className="PanelControl-tit">LISTA LUGARES</h1>
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
            <div className="DisplayLugares">
                {
                    lugares.map((lugar) => {
                        return (
                            <>
                                {console.log(lugar)}
                                <Lugar key={lugar.id} datos={lugar} />
                            </>
                        )
                    })
                }
            </div>
            
        </>
    )

}

export default ListaLugares