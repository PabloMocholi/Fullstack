import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './components/Pokemon'

function App() {

  const [data, setData] = useState([])
  const [isLoaded, setLoad] = useState(false)

  useEffect(() => {
    setTimeout(()=>{
      fetchData()
    },2000)


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
      : <img className='Gif' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs" alt="" />
    }

  </>)

}

export default App
