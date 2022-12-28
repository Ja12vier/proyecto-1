

const Card=(({tarjeta, colore})=>{

const {imagen,name,edad,habilidad}=tarjeta



  return(
    <div className="content"
    style={{backgroundColor:colore}}
    >

      <div className="contet">
       <div className="card">
       <h1>{name}</h1>
        <div className="img">
        <img src={`/src/assets/${imagen}`} alt="" />
        </div>
        <h3>Edad:      {edad}</h3>
        <h3>Habilidad:      {habilidad}</h3>
      
       </div>
    
       </div>{}
   
    </div>
  )
})


export default Card