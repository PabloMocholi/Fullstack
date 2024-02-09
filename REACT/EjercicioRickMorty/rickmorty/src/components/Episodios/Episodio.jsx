const Episodio = ({datos})=>{

    if (!datos) {
        return null;
    }

    const { name, episode, characters } = datos;

    return (<>
        <div className="Lugar">
            <h3>{name}</h3>
            <span>{episode}</span>
       
        </div>


    </>)
   
}

export default Episodio