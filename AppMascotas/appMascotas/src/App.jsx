import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaAnimales from './listaAnimales/listaAnimales'
import AddAnimal from './AddAnimal/AddAnimal'


const animalesAdoptados = [
  {
    id: 1,
    nombre: "Tobby",
    raza: "Golden Retriever",
    descripcion: "Perro juguetón y cariñoso",
    imagenes: ["https://www.laclinicaveterinaria.com/wp-content/uploads/2023/11/El-Golden-Retriever.webp",
      "https://www.portalveterinaria.com/upload/20231020114445ACGOLDENRgen_pv.jpg",
      "https://www.publico.es/yo-animal/wp-content/uploads/2023/10/golden-retriever-3.jpg"],
    detalles: [
      {
        id: 1, titulo: "Rasgos físicos", contenido: ["pelo largo", "4 años"]
      },
      {
        id: 2, titulo: "Detalles dueños", contenido: ["María", "34 años"]
      }, {
        id: 3, titulo: "Info extra ", contenido: ["Info extra"]
      }
    ]
  }
]


const animalesPendientes = [
  {
    id: 1,
    nombre: "Gary",
    raza: "Gato Persa",
    descripcion: "Refunfuñon y poco sociable",
    imagenes: ["https://www.kiwoko.com/blogmundoanimal/wp-content/uploads/2021/10/gato-persa-curiosidades.jpg"],
    detalles: [
      {
        id: 1, titulo: "Rasgos físicos", contenido: ["pelo gris", "3 años"]
      },
      {
        id: 2, titulo: "Detalles dueños", contenido: ["Pedro", "13 años"]
      }, {
        id: 3, titulo: "Info extra ", contenido: ["Info extra"]
      }
    ]
  }
]


function App() {
  const [count, setCount] = useState(0)
  const [listaActiva, setListaActiva] = useState("encontrados")
  const [newAnimal, setnewAnimal] = useState(false)



  const handleListaActiva = (valor) => {
    setListaActiva(valor)
  }

  const toggleNewAnimal = () => {
    setnewAnimal(!newAnimal)
  }





  return (
    <>
      <main className={`${newAnimal ? "u-blur" : ""}`}>
        {
          listaActiva == "encontrados" && <ListaAnimales animales={animalesAdoptados} categoria={listaActiva} />
        }
        {
          listaActiva == "perdidos" && <ListaAnimales animales={animalesPendientes} categoria={listaActiva} />
        }

        <div className='App-btns'>
          <button className='App-btn' onClick={() => handleListaActiva("encontrados")}>
            Encontrados
          </button>
          <button  className='App-btn'  onClick={() => handleListaActiva("perdidos")}>
            Perdidos
          </button>
          <button className=' App-btn App-btn--add'  onClick={toggleNewAnimal}>+</button>

        </div>

      </main>
      <section>
        {
          newAnimal && <AddAnimal toggleNewAnimal={toggleNewAnimal} />
        }

      </section>
    </>
  )
}

export default App
