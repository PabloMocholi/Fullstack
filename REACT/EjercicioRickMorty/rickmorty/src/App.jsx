import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './newApp.css'
import ListaPersonajes from './components/Personajes/ListaPersonajes'
import ListaLugares from './components/Lugares/ListaLugares'
import ListaEpisodios from './components/Episodios/ListaEpisodios'

function App() {
  // const [count, setCount] = useState(0)
  // const [dataPersonaje, setDataPersonje] = useState({
  //   results:[]
  // })
  // const [isLoaded, setLoaded] = useState(false)
  const [paginaActual, setPagina] = useState("personajes")

  // const FetchDataPersonaje = async ()=>{
  //   try {

  //     const response = await fetch(`https://rickandmortyapi.com/api/character`)
  //     const jsonData = await response.json();
  //     console.log("json",jsonData)
  //     setDataPersonje(jsonData)
  //     setLoaded(true)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(()=>{

  //   FetchDataPersonaje()

  // },[])


  return (
    <>

      <nav className='NavRM'>
        <span className={`NavLink ${paginaActual === "personajes" ? "active" : ""}`} onClick={() => {
          setPagina("personajes")
        }}>Personajes</span>
        <span className={`NavLink ${paginaActual === "lugares" ? "active" : ""}`} onClick={() => {
          setPagina("lugares")
        }}>Lugares</span>
        <span className={`NavLink ${paginaActual === "episodios" ? "active" : ""}`} onClick={() => {
          setPagina("episodios")
        }}>Episodios</span>
      </nav>
      <div className='GeneralContainer'>
        {
          paginaActual === "personajes" && <ListaPersonajes />
        }
        {
          paginaActual === "lugares" && <ListaLugares />
        }
        {
          paginaActual === "episodios" && <ListaEpisodios />
        }
      </div>


    </>
  )
}

export default App
