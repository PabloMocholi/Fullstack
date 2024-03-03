import { useState, useEffect } from 'react'
import './Fakeshop.css'

const Fakeshop = () => {


    const [tienda, setTineda] = useState([])

    const cargarFakeshop = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const data = await response.json();
            setTineda(data);

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        cargarFakeshop()
    }, [])


    return (
        <>
            <h4>Fakeshop Gallery</h4>
            <div className='ExpositorPrendas'>
                {
                    tienda.map((prenda) => {
                        return (<>
                            <div className='ExpositorPrendas-prenda'>
                                <h5 className='ExpositorPrendas-prenda-nombre'>{prenda.title}</h5>
                                <img className='ExpositorPrenda-prenda-imagen' src={prenda.image} alt="prenda" />
                                <div className='ExpositorPrenda-prenda-rating'>
                                    <img className='estrella' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Estrella_amarilla.png/2048px-Estrella_amarilla.png" alt="" />
                                    <span>{prenda.rating.rate}</span>
                                </div>
                               

                            </div>

                        </>)
                    })
                }
            </div>




        </>
    )
}

export default Fakeshop