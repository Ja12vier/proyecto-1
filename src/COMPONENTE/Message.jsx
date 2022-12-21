import { useState } from "react"
const Message =()=>{
   const [ isOriginal, setIsOriginal] = useState ( true )
  {/*
  const [ state, setstate]=useState("como esta maria")
 */}
  return(
    <>
         <h1>{isOriginal ? "hola mundo" : "el esta solead"}</h1>
         <button onClick={()=>setIsOriginal( !isOriginal)}>boton</button>

     {/* LA IDEAS DE LA PROFE
     <h1>{state}</h1>
     <button onClick={()=>setstate("juan le duele la cabeza")}>cambiar estado</button>*/}
    
    </>
  )
 
}


export default Message