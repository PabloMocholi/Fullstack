import './Lugar.css'

const Lugar = ({ datos }) => {
    if (!datos) {
        return null;
    }

    const { name, dimension, type } = datos;

    return (<>
        <div className="Lugar">
            <div>
                <h3 className='Lugar-nombre'>{name}</h3>
                <span className='ligth'>{type}</span>
            </div>

            <span><span className='dimension'>DIMENSION: </span>{dimension}</span>

        </div>


    </>)
}

export default Lugar