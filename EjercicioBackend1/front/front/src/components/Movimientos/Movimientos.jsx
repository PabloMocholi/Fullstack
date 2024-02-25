import { useState, useEffect } from 'react'
import './Movimientos.css'

const Movimientos = () => {


    const [movimientos, setMovimientos] = useState([])


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

        fetch('http://localhost:8080/API/v1/ataques', opciones)
            .then(function (response) {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setMovimientos(data)
            })
            .finally(() => {
                controller.abort();
            })
    };

    useEffect(() => {
        getApi()
    }, [])




    return (<>

        <div className='Movimientos'>
            {
                movimientos.map((mov) => {

                    return (<>
                        <div className='Movimiento'>
                            <h3 className='Movimiento-name'>{mov.nombre}</h3>
                      
                            <img className='Movimiento-img' src={mov.image} alt="ataque" />
                            <div className='Movimiento-stats'>
                                <span><b>PP:</b> {mov.pp}</span>
                                <span><b>Potencia:</b> {mov.potencia}</span>
                            </div>


                        </div>
                    </>)

                })
            }



        </div>


    </>)
}

export default Movimientos