import { useState , useEffect} from 'react'
import './App.css'
import Fakeshop from './components/Fakeshop/Fakeshop'
import Users from './components/Users/Users'
import Dnd from './components/Dnd/Dnd'

function App() {


  return (
    <>
      <h1>PROMESAS</h1>
      <Fakeshop/>
      <Users/>
      <Dnd/>
    </>
  )
}

export default App
