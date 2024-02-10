import "./Episodios.css"
const Episodio = ({ datos }) => {

    if (!datos) {
        return null;
    }

    const { name, episode, air_date } = datos;

    return (<>
        <div className="Episodio">
            <h3 className="Episodio-name">{name}</h3>
            <div className="Episodio-data">
                <span>{episode}</span>
                <span className="ligth">{air_date}</span>
            </div>


        </div>


    </>)

}

export default Episodio