import React from 'react'
import CryptexInput from "../components/CryptexInput/CryptexInput"
import ans from "../assets/lac-de-souliers.jpg"
import Quote from "../components/Quote/Quote"

export default function Connemara() {
  return (
    <div className='container text-center'>
       <Quote riddle={"À flanc de montagne, là où le ciel foule la terre, Un miroir d'argent repose, veillé par les géants de pierre. "}></Quote>

<CryptexInput
        imgSrc={ans}
        cryptex="?"
        keyWord="soulier"
        description="Félicitations, vous avez trouvé le mot clé !"
      />
    </div>
  )
}
