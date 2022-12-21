import { useState } from "react"

const Lightbulb =()=>{
const [isOn, setiOn]=useState(true)
document.body.style= isOn ? "background: red" : "background: black"


  {/*
const componentStyle = {
  backgroundColor: 'yellow'

}
*/}

 {/*vas dentro de donde esta el style por si los quiere hace
 hacer d esa forma
 style={componentStyle}*/}
const boston=()=>{
  setiOn( !isOn )
 document.body.style= isOn ? "background: red" : "background: black"

}

  return(
  <>
  <div 
  className="linghtbuld"
  style ={{backgroundColor: isOn ? 'yellow' : 'grey'}}
  >
   
  </div>
  <button onClick={()=>boston(!isOn)}>on / of</button>
 
  </>
  )
}

export default Lightbulb