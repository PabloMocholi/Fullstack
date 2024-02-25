import { useState, useEffect } from 'react'
import './Ciudades.css'

const Ciudades = ()=>{

    
    const [ciudades, setCiudades] = useState([])


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

        fetch('http://localhost:8080/API/v1/ciudades', opciones)
            .then(function (response) {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setCiudades(data)
            })
            .finally(() => {
                controller.abort();
            })
    };

    useEffect(() => {
        getApi()
    }, [])
    return(<>
        <div className='Ciudades'>
            {
                ciudades.map((ciudad)=>{
                    return(<>
                        <div className='Ciudad'>
                            <h3>{ciudad.nombre}</h3>
                            <span>{ciudad.region}   </span>
                        </div>
                    </>)
                })
            }
        </div>
    </>)
}

export default Ciudades