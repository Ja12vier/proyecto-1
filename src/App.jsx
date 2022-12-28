
import './App.css'
import Card from './componente/Card'
import Cardarreglo from './componente/Cardarreglo'
import Color from './colors'

import { useState, useEffect } from 'react'




function App() {
  

  const randomIndex= Math.floor( Math.random() * Color.length)

console.log(randomIndex)
  const [card, setCard]=useState(randomIndex)
  

const index=(()=>{
  
  const newIndex= Math.floor( Math.random() * Color.length)

  setCard(newIndex)
})
  

  return (
    <div className="App">
  <h1>card</h1>
<Card
tarjeta={Cardarreglo[card]}
colore ={Color[card]}
/>

     <div className='boton'>
      
<button onClick={index}>click</button>
     </div>
    </div>
  )
}

export default App
