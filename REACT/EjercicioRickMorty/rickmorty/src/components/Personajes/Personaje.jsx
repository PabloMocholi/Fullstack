
const Personaje = ({ datos }) => {

    if (!datos) {
        return null; 
    }

    const { name, image } = datos;
   // console.log(name)
    return (
        <>
            <div>
                <h2>{name}</h2>
                <img src={image} alt="" />
            </div>


        </>
    )
}

export default Personaje