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

                            </div>

                        </>)
                    })
                }
            </div>




        </>
    )
}

export default Fakeshop