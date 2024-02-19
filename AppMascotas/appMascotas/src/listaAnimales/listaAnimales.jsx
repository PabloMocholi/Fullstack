
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
    console.log(isOpen)
    const ToggleActive = () => {
        setOpen(!isOpen);
        console.log(isOpen)
    }

    return (<>
        <div className={`Animal ${isOpen ? "u-blur" : ""}`} onClick={ToggleActive}>
            <img className='Animal-img' src={imagenes[0]} alt={nombre} />
            <div className='Animal-div'>

                <h2 className='Animal-h2'>{nombre}</h2>
                <h4 className='Animal-h4'>{raza}</h4>
                <p className='Animal-p'>{descripcion}</p>
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
                <div>
                    <h1 className='AnimalInfo-h1'>{nombre}</h1>
                    <SliderAnimal imagenes={imagenes} />
                </div>

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
                <div className='AnimalInfo-flechas'>
                    <i onClick={previoustImage} className="fa-solid fa-arrow-left"></i>
                    <i onClick={nextImage} className="fa-solid fa-arrow-right"></i>

                    {/* <button onClick={previoustImage}>Anterior</button>
                    <button onClick={nextImage}>Siguiente</button> */}
                </div>
            </div>


        </div>
    </>)

}

const AccordeonAnimal = ({ detalles }) => {

    const [activeItem, setActiveItem] = useState(1)


    const handleActiveAccordion = (AccordionId) => {
        setActiveItem(AccordionId)
    }

    console.log(detalles)
    return (<>
        <div className='Accordeon'>
            {
                detalles.map(d => {
                    return (<>
                        <div>
                            <h3 className='AccordeonAnimal-h3' onClick={() => handleActiveAccordion(d.id)}>{d.titulo}</h3>
                            <ul>
                                {
                                    activeItem == d.id &&
                                    d.contenido.map(d => {
                                        return (<>
                                            <li>{d}</li>
                                        </>)
                                    })}
                            </ul>

                        </div>



                    </>)
                })
            }</div>

    </>)

}

export default ListaAnimales