
import './App.css'
import Card from './componente/Card'
import Cardarreglo from './componente/Cardarreglo'
import Colors from './Colors'

import { useState, useEffect } from 'react'




function App() {
  
console.log(Colors);
  const randomIndex= Math.floor( Math.random() * Cardarreglo.length)
  console.log(Cardarreglo);

  const [card, setCard]=useState(randomIndex)
  

const index=(()=>{
  
  const newIndex= Math.floor( Math.random() * Cardarreglo.length)

  setCard(newIndex)
})
  
console.log(Colors[card]);

  return (
    <div className="App">
  
<Card
tarjeta={Cardarreglo[card]}
colore ={Colors[card]}

/>

     <div className='boton'>
<button onClick={index}
style={{backgroundColor:Colors[card]}}
>click</button>
     </div>
    </div>
  )
}

export default App
