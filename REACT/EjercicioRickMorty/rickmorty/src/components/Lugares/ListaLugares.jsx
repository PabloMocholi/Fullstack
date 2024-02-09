
import { useState, useEffect } from "react"
import Lugar from "./Lugar";
import './ListaLugares.css'

const ListaLugares = () => {


    const [lugares, setLugares] = useState([])
    const [paginasTotales, setPaginasTotales] = useState(0)
    const [paginaActual, setPagina] = useState(1)

    const cargarPersonajes = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/location?page=${paginaActual}`);
            const data = await response.json();
            setLugares(data.results);
            setPaginasTotales(data.info.pages)
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
            <h1>LISTA LUGARES</h1>
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

export default ListaLugares