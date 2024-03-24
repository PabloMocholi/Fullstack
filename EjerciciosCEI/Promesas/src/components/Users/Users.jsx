import { useState, useEffect } from 'react'
import './Users.css'

const Users = () => {

    const [users, setUser] = useState([])
    const { VITE_USERS } = import.meta.env
    console.log("VITE",VITE_USERS)

    const cargarUsers = async () => {
        try {
            const response = await fetch(VITE_USERS);
            const data = await response.json();
            setUser(data.results);
            console.log("USERS",data)

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        cargarUsers()
    }, [])


    return (<>

        <h4>Users Registered</h4>
        <div className='ListaUsers'>
            {
                users.map((u) => {
                    //console.log(u)
                    return (<>
                        <div className='User'>
                            <div className='User-id'>
                                <h5 className='User-name' >{u.name.first} {u.name.last}</h5>
                                <img className='User-foto' src={u.picture.large} alt="foto_user" />
                            </div>

                            <div className='User-data'>
                                <span className='User-data-nombre'>Ciudad:</span>
                                <span>{u.location.city}</span>
                                <span className='User-data-nombre'>Estado:</span>
                                <span>{u.location.state}</span>
                                <span className='User-data-nombre'>Usuario:</span>
                                <span>{u.login.username}</span>
                                <span className='User-data-nombre'>Teléfono:</span>
                                <span>{u.phone}</span>
                            </div>

                        </div>
                    </>)
                })
            }</div>

    </>)

}


export default Users