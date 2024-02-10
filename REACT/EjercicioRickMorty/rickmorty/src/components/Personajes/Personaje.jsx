import './Personaje.css'
const Personaje = ({ datos }) => {

    if (!datos) {
        return null;
    }

    const { name, image, status, species, type, gender } = datos;
    // console.log(name)
    return (
        <>
            <div className='ContainerPersonaje'>
                <div >
                    <h2 className='ContainerPersonaje-nombre'>{name}</h2>
                    <img className="ContainerPersonaje-personaje" src={image} alt="personaje" />
                </div>
                <div className='ContainerPersonaje-data'>
                    {
                        status === "Alive" && (
                            <span className='alive'>STATUS: {status}</span>
                        )
                    }
                    {
                        status === "Dead" && (
                            <span className='dead'>STATUS: {status}</span>
                        )
                    }
                    {
                        status === "unknown" && (
                            <span className='other'>STATUS: {status}</span>
                        )
                    }
                    <div className='type'>
                        <span>{species}</span>
                        {
                            type ? <span className='ligth'>{type}</span> : <span className='ligth'>No hay más datos</span>
                        } 

                    </div>
                    <span>{gender}</span>
                </div>




            </div>


        </>
    )
}

export default Personaje