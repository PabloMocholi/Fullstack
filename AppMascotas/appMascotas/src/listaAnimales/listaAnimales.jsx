
import { useState } from 'react'
import './listaAnimales.css'

const ListaAnimales = ({ animales, categoria }) => {

    console.log(animales)

    return (<>

        <div className="ListaAnimales">
            <h2 className="ListaAnimales-h2">{categoria}</h2>
            <div>
                {
                    animales.map((a) => {
                        return (<>

                            <Animal key={a.id} {...a} />
                        </>)
                    })
                }
            </div>
        </div>

    </>)
}

const Animal = (props) => {


    const [isOpen, setOpen] = useState(false)
    const { nombre, raza, descripcion, imagenes } = props

    const ToggleActive = () => {
        setOpen(!isOpen);
        console.log(isOpen)
    }


    return (<>
        <div className={`Animal ${isOpen ? "u-blur" : ""}`} onClick={ToggleActive}>
            <img className='Animal-img' src={imagenes[0]} alt={nombre} />
            <div>
                <h2>{nombre}</h2>
                <h4>{raza}</h4>
                <p>{descripcion}</p>
            </div>

        </div>

        {

            isOpen && <AnimalInfo ToggleActive={ToggleActive} info={props} />


        }
    </>)
}

const AnimalInfo = ({ ToggleActive, info }) => {


    const { nombre, raza, descripcion, imagenes, detalles } = info

    return (<>
        <div className='AnimalInfo'>
            <button onClick={ToggleActive}>X</button>
            <div className='AnimalInfo-div'>
                <SliderAnimal imagenes={imagenes} />
                <AccordeonAnimal detalles={detalles} />
            </div>


        </div>
    </>)
}

const SliderAnimal = ({ imagenes }) => {

    const [imagenActual, setImagenActual] = useState(0)

    const nextImage = () => {

        const next = imagenes.length > imagenActual + 1 ? imagenActual + 1 : 0

        setImagenActual(next)
    }
    const previoustImage = () => {

        const next = imagenActual > 0 ? imagenActual - 1 : imagenes.length - 1

        setImagenActual(next)
    }

    return (<>

        <div>
            <div>
                <img className='AnimalInfo-img' src={imagenes[imagenActual]} alt="" />
                <div>
                    <button onClick={previoustImage}>Anterior</button>
                    <button onClick={nextImage}>Siguiente</button>
                </div>
            </div>


        </div>
    </>)

}

const AccordeonAnimal = ({ detalles }) => {

    const[activeItem, setActiveItem] = useState(1)


    const handleActiveAccordion = (AccordionId)=>{
        setActiveItem(AccordionId)
    }       

    console.log(detalles)
    return (<>

        {
            detalles.map(d => {
                return (<>
                    <div>
                        <h3 onClick={()=>handleActiveAccordion(d.id)}>{d.titulo}</h3>
                        {
                            activeItem == d.id &&
                            d.contenido.map(d => {
                            return (<>
                                {d}
                            </>)
                        })}


                    </div>



                </>)
            })
        }

    </>)

}

export default ListaAnimales