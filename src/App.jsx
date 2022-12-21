
import './App.css'
import { useState } from 'react'
import Message from './COMPONENTE/Message'
import Lightbulb from './COMPONENTE/Lightbulb'

function App() {

  {/* ESTA FUE MI IDEAS Y FUNCIONA
  const [constate, setconstate]=useState("HOLA JUAN")
  function app1(){
    if(constate=="HOLA JUAN"){

      setconstate ("hola luis")
    }else{
      setconstate ("HOLA JUAN")
    }
  }*/}


  return (
    <div className="App">
      {/*
      
    <h1>{constate}</h1>
   <button onClick={()=>app1(constate)}>click</button>
          <Message></Message>
     */}
 <Lightbulb ></Lightbulb>
    </div>
  )
}

export default App
