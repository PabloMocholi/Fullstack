import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './components/Pokemon'

function App() {

  const [data, setData] = useState([])
  const [isLoaded, setLoad] = useState(false)

  useEffect(() => {

    fetchData()

  }, [])


  const fetchData = async () => {


    let indicesRandom = []

    for (let i = 0; i < 5; i++) {
      indicesRandom.push(Math.floor(Math.random() * 800))
    }

    const responses = await Promise.all(
      indicesRandom.map(async (i) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        return response.json()
      }))

    setData(responses)
    setLoad(true)
  }

  return (<>
    {isLoaded ?
      <>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
        {

          data.map(((d, i) => {
            return (<Pokemon key={i} datos={d} />)
          }))
        }
      </>
      : <h1>Buscando Pokemon</h1>
    }

  </>)

}

export default App
