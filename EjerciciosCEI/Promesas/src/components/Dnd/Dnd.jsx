import { useState, useEffect } from 'react';
import './Dnd.css'

const Dnd = () => {
    const [dnd, setDnd] = useState([]);
    const [monstruo, setMonstruo] = useState("/api/monsters/aboleth");
    const [infoM, setInfo] = useState([]);
    const [ArrayURLS, setArrayURLS] = useState([]);
    const [contador, setContador] = useState(0)

    const cargarMonstruos = async () => {
        try {
            const response = await fetch(`https://www.dnd5eapi.co/api/monsters/`);
            const data = await response.json();
            setDnd(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const cargaArrayMonstruos = () => {
        try {
            const urls = dnd.map((d) => d.url);
            setArrayURLS(urls);
        } catch (error) {
            console.error(error);
        }
    };

    const carga1Monstruo = async () => {
        console.log(monstruo)
        const response = await fetch(`https://www.dnd5eapi.co${monstruo}`);
        const data = await response.json();
        setInfo(data);
        console.log(data);
    };

    useEffect(() => {
        cargarMonstruos();
    }, []);

    useEffect(() => {
        cargaArrayMonstruos();
    }, [dnd]);

    useEffect(() => {
        setMonstruo(ArrayURLS[contador]);
        carga1Monstruo();
    }, [contador, monstruo]); // Se ejecutará cuando monstruo cambie

    return (
        <>
            <h4>Dnd Monster Data</h4>
            <div className='displayMonster'>
                <span className='nameMonster'>{infoM.name}</span>
                {infoM.image ? <img className='imageMonster' src={`https://www.dnd5eapi.co${infoM.image}`} alt="" /> : <h4>No hay foto disponible</h4>}

            </div>
            <button onClick={() => {
                console.log("ELEMENTOS", ArrayURLS.length)
                if (contador < ArrayURLS.length - 1) {
                    setContador(contador + 1)

                } else {
                    console.log("Ya no hay más monstruos en la lista.");
                }
            }}>Siguiente</button>
        </>
    );
};

export default Dnd;
