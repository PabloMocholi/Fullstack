
import './AddAnimal.css'

const AddAnimal = ({toggleNewAnimal}) => {

 
    return (<>
        <div className="AddAnimal">
            <h1>¿Qué encontraste?</h1>
            <div className='AddAnimal-div'>
                <button className='AddAnimal-button'>Perro</button>
                <button className='AddAnimal-button'>Gato</button>
                <button className='AddAnimal-button'>Otro</button>
            </div>
            <button className='AddAnimal-cerrar' onClick={toggleNewAnimal}>X</button>

        </div>
    </>)
}

export default AddAnimal