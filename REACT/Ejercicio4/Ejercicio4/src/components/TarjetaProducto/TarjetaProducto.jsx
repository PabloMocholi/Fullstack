import "./TarjetaProducto.css"

const TarjetaProducto = ({ nombre, imagen, precio, stock, children }) => {
    return (
        <>
            <div className="TarjetaProducto">
                <h1 className="TarjetaProducto-nombre">{nombre}</h1>
                <img className="TarjetaProducto-imagen" src={imagen} alt="switch" />
                <div className="TarjetaProducto-caracteristicas">
                    <span>{precio}</span>
                    <span>Disponibles: {stock}</span>
                </div>

                <div className="TarjetaProducto-descripcion">
                    <h2 className="TarjetaProducto-descripcion-tit">Descripción:</h2>
                    <div className="TarjetaProducto-descripcion-contenido">
                        {children}
                    </div>
                </div>


                {
                    stock > 0 ? <button className="TarjetaProducto-boton">Comprar</button> : <button disabled>No disponible</button>
                }


            </div>

        </>
    )
}

export default TarjetaProducto;