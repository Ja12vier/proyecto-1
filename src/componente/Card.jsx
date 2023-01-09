

const Card=(({tarjeta, colore})=>{

console.log(colore);

console.log(tarjeta.picture);
  return(
    <div className="content"
    style={{backgroundColor:colore}}
    >

      <div className="contet">
       <div className="card">
        <div className="img">
          <h1
          style={{color:colore}}
          >{tarjeta.name.first}</h1>
        <img src={tarjeta.picture.large} alt="" />
        </div>
        <h3
        style={{color:colore}}
        > <img src="/src/assets/gmail.png" alt="" />  {tarjeta.email}</h3>
        <h3
        style={{color:colore}}
        ><img src="/src/assets/llamada-telefonica.png" alt="" />{tarjeta.phone} </h3>
        <h3
        style={{color:colore}}
        ><img src="/src/assets/puntero-del-mapa.png" alt="" />{tarjeta.location.street.name} </h3>
  
       </div>
    
       </div>{}
   
    </div>
  )
})


export default Card