import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Email from './components/emails/Email'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)


  
  



  return (
    <>
      <div className='Container'>
        <div>
          <Header/>
        </div>
        <div>
          <Email/>
        </div>
        <div> 
          <Footer/>
        </div>

      </div>
    </>
  )
}

export default App
