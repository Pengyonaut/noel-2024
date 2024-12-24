import React from 'react'
import cesar from "../assets/cesar.png"

export default function Decode() {
  return (
    <div className='container'>
      <p className='mb-5'>Déchiffrez ce code à partir de l'indice suivant:</p>
      <div className="row w-100">
        <div className="col-4"><img src={cesar} className="img-fluid" alt="" /></div>
        <div className="col-4"><img src={cesar} className="img-fluid" alt="" /></div>
        <div className="col-4"><img src={cesar} className="img-fluid" alt="" /></div>
      </div>
      <div className="row w-100 mx-auto fw-bold mt-5 text-uppercase fw-bold">
        <textarea name="" id="" cols="30" rows="2">odfohgxfubswhahvwohulouhvwhgxhirlhjudv?</textarea>
      </div>
      <div >
      </div>
    </div>
  )
}
