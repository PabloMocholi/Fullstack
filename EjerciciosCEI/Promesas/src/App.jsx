import { useState , useEffect} from 'react'
import './App.css'
import Fakeshop from './components/Fakeshop/Fakeshop'
import Users from './components/Users/Users'
import Dnd from './components/Dnd/Dnd'
import Games from './components/Games/Games'
import Pokemon from './components/Pokemon/Pokemon'

function App() {


  return (
    <>
      <h1>PROMESAS</h1>
      <Fakeshop/>
      <hr />
      <Users/>
      <hr />
      <Dnd/>
      <hr />
      <Games/>
      <hr />
      <Pokemon/>
    </>
  )
}

export default App
