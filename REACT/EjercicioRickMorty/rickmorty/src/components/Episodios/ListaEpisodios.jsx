import Episodio from "./Episodio"
import { useState, useEffect } from "react"


const ListaEpisodios = () => {

    const [episodios, setEpisodios] = useState([])
    const [paginasTotales, setPaginasTotales] = useState(0)
    const [paginaActual, setPagina] = useState(1)



    const cargarLugares = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${paginaActual}`);
            const data = await response.json();
            setEpisodios(data.results);
            setPaginasTotales(data.info.pages)
          //  console.log("episodios", data)
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        cargarLugares()
    }, [])

    return (
        <>
            <h1>LISTA EPISODIOS</h1>
            <div className="">
                {
                    episodios.map((episodio) => {
                        return (
                            <>
                                {console.log("EPISODIO",episodio)}
                                <Episodio key={episodio.id} datos={episodio} />
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
export default ListaEpisodios