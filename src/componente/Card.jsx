import { useState, useEffect } from 'react'
import Cardarreglo from './Cardarreglo'

const Card=(()=>{

  const [card, setCard]=useState(" ")
  const [card1, setCard1]=useState("")
  const [card2, setCard2]=useState("")
  const [card3, setCard3]=useState("")
;
  useEffect(()=>{
    fetch (Cardarreglo)
    .then(()=>Cardarreglo())

    .then((card)=>{
      setCard (card.name)
   
    })
  })


  return(
    <div className="content">
      <div className="contet">
       <div className="card">
       <h1>{card}</h1>
        <div className="img">
        <img src="/src/assets/3lsabio.jpg" alt="" />
        </div>
        <h3>correo</h3>
        <h3>correo</h3>
        <h3>correo</h3>

       </div>
       <button>click</button>
       </div>
    </div>
  )
})


export default Card