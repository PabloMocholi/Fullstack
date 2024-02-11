import { useState, useEffect } from 'react'

const Dnd = ()=>{


    const [dnd, setDnd] = useState([])
    const [monstruo, setMonstruo] = useState("/api/monsters/aboleth")

    const cargarMonstruos = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co${monstruo}`);
            const data = await response.json();
            setDnd(data);
            console.log(data)

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        cargarMonstruos()
    }, [])



    return(<>
    <h4>Dnd Monster Data</h4>
    {

            console.log(dnd)
       
    }

    </>)
}

export default Dnd