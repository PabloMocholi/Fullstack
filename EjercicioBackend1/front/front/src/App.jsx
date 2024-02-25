import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './newApp.css'
import Pokemon from './components/Pokemon/Pokemon'
import Movimientos from './components/Movimientos/Movimientos'
import Ciudades from './components/Ciudades/Ciudades'

function App() {

  return (
    <>

      <Pokemon />
      <br /><hr className='separador' /><br />
      <Movimientos/>
      <br /><hr className='separador' /><br />
      <Ciudades/>
    </>
  )
}

export default App
