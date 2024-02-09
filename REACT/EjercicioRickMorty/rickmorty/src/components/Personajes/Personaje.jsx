
const Personaje = ({ datos }) => {

    if (!datos) {
        return null; 
    }

    const { name, image, status } = datos;
   // console.log(name)
    return (
        <>
            <div>
                <h2>{name}</h2>
                <span>{status}</span>
                <img src={image} alt="" />
            </div>


        </>
    )
}

export default Personaje