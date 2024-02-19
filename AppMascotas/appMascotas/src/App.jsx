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
  },  {
    id: 2,
    nombre: "Lucky",
    raza: "Husky",
    descripcion: "Perro gritón",
    imagenes: ["https://www.diariodesevilla.es/2023/10/24/mascotas/Motivos-debes-pensar-adoptar-husky_1841826089_195473169_1200x675.jpg",
      "https://estaticos-cdn.prensaiberica.es/clip/dd635419-5120-4a72-a488-bd77608a3492_source-aspect-ratio_default_0.jpg",
      "https://www.zooplus.es/magazine/wp-content/uploads/2019/10/Siberian-Husky-mit-Welpe-768x512.jpg"],
    detalles: [
      {
        id: 1, titulo: "Rasgos físicos", contenido: ["pelo largo", "3 años"]
      },
      {
        id: 2, titulo: "Detalles dueños", contenido: ["Pablo", "14 años"]
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
    imagenes: ["https://www.kiwoko.com/blogmundoanimal/wp-content/uploads/2021/10/gato-persa-curiosidades.jpg",
  "https://ateuves.es/wp-content/uploads/2018/03/at0318_gato_persa_enfermedades_portada.jpg"],
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
