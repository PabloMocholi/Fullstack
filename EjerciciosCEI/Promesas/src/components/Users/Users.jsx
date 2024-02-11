import { useState, useEffect } from 'react'
import './Users.css'

const Users = () => {

    const [users, setUser] = useState([])

    const cargarUsers = async () => {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=10`);
            const data = await response.json();
            setUser(data.results);
            //console.log(data)

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
                        <div >
                            <h5 >{u.name.first} {u.name.last}</h5>
                            <img src={u.picture.large} alt="prenda" />

                        </div>
                    </>)
                })
            }</div>

    </>)

}


export default Users