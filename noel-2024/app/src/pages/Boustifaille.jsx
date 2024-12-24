import React from 'react'
import CryptexInput from "../components/CryptexInput/CryptexInput"
import ans from "../assets/potj.webp"
import pot from "../assets/pot.png"

export default function Boustifaille() {
  return (
    <div className='container text-center'>
        <p>Comment s'appelle cette spécialité?</p>

        <img className='img-fluid' src={pot} alt="" />

<CryptexInput
        imgSrc={ans}
        cryptex="p"
        keyWord="potjevleesch"
        description="Félicitations, vous avez trouvé le mot clé !"
      />
    </div>
  )
}
