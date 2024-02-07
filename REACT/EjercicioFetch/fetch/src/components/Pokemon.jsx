
import "./Pokemon.css"


const Pokemon = ({datos})=>{


    return(
        <>
            <div className="TarjetaPokemon">
                <h2>{datos.name}</h2>
                <img className="pokeball" src={ datos.sprites.front_default} alt="" />
                <img src={ datos.sprites.front_shiny} alt="" />
            </div>
     
        </>
    )




}

export default Pokemon