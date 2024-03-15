import { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {

    const [info, setInfo] = useState([])
    const {VITE_INFO} = import.meta.env

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

        fetch(VITE_INFO, opciones)
            .then(function (response) {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setInfo(data)
            }).catch(error =>{
                console.log(error)
            })
            .finally(() => {
                controller.abort();
            })
    };

    useEffect(() => {
        getApi()

    }, [])


    return (<>

        <div className='Header'>
            <div className='Header-div'>
                <h1>{info.web_name}</h1>
                <span className='Header-span'>{info.user}</span>
            </div>
            <img className='Header-img' src={info.user_img} alt="" />
        </div>


    </>)
}

export default Header