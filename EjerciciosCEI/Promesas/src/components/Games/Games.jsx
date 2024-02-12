import { useState, useEffect } from 'react'
import './Games.css'


const Games = () => {


    const [games, setGames] = useState([])

    const cargarGames = async () => {
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=e732598aa8c94ccf87896c320203c476`);
            const data = await response.json();
            setGames(data.results);
           // console.log(data.results)

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        cargarGames()
    }, [])


    return (<>
        <h4>Game List</h4>
        <div  className='DisplayGames'>
            {
                games.map((game) => {
                    return (<>
                        <div className='Game'>
                            <h2 className='Game-name'>{game.name}</h2>
                            <img className='ImageGame' src={game.background_image} alt="" />
                        </div>

                    </>)

                })
            }</div>


    </>)
}


export default Games
