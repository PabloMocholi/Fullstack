import './Lugar.css'

const Lugar = ({ datos }) => {
    if (!datos) {
        return null;
    }

    const { name, dimension } = datos;

    return (<>
        <div className="Lugar">
            <h3>{name}</h3>
            <span>{dimension}</span>
        </div>


    </>)
}

export default Lugar