import React from 'react'
import char from '../assets/gouidasse.jpg'
import CloudCard from '../components/CloudCard/CloudCard'


export default function Home() {

  let config = [
    {
      name:"Enigme 1 : Retour vers le passé",
      icon: "history",
      description: "Affronte un vestige du passé pour trouver la première clé.",
      url: "/dans-le-passey",
      remind: "a"
    },
    {
      name:"Enigme 2 : Savoir et calvitie",
      icon: "search",
      description: "Cherche la clé dans l'appartement en suivant les traces de l'indice caché du père Gouidasse",
      url: "/noel-2024/crane-luisant",
      remind: "é"
    },
    {
      name:"Enigme 3 : Là où la musique se repose",
      icon: "search",
      description: "Cherche la clé dans l'appartement en suivant les traces de l'indice caché du père Gouidasse",
      url: "/noel-2024/zzzzz",
      remind:"o"
    },
    {
      name:"Enigme 4 : Ceux qui vont mourir te saluent !",
      icon: "fingerprint",
      description: "Craque le code pour trouver cette clé !",
      url: "/noel-2024/decode",
      remind:"r"
    },
    {
      name:"Enigme 5 : Dans le Nord, les tablées font les lois",
      icon: "history_edu",
      description: "Retrouve un mot à partir du dessin du père Gouidasse !",
      url: "/noel-2024/boustifaille",
      remind:"p"
    },
    {
      name:"Enigme 6 : Bienvenue dans le Ch'connemara",
      icon: "history_edu",
      description: "Retrouve un mot à partir de l'énigme du père Gouidasse !",
      url: "/noel-2024/connemara",
      remind:"?"
    },
      
  ]
  return (
    <div className='container-fluid text-center mt-2'>

<h1>Bienvenue dans cette première édition de Fort Boyard Saint Crépin</h1>

<p>Dans cette suite d'épreuve, votre savoir et vos compétences collectives seront mises à l'épreuve pour atteindre le Saint Graal: à boire et à manger.</p>
<p> Votre mission si vous l'acceptez, <b>résoudre les énigmes du Père Gouidasse, pour ouvrir le Cryptex !</b></p>
<div className="w-100">
<img src={char} className="img-fluid mb-2" alt="" />
<span className='fst-italic small'>Rare cliché du père Gouidasse, développant cette application depuis son lit de fortune dans les Hautes-Alpes</span>
</div>
<p className='mt-5'>
Le Cryptex contient {config.length} caractères, chaque épreuve vous permettra de trouver l'une de ces clés pour atteindre votre objectif. Résolvez les énigmes, retrouvez les lettres et ajoutez les au cryptex pour accéder à votre récompense !</p>
<p className='mb-5'>Répartissez vous les tâches et choisissez une épreuve parmi les propositions ci-dessous ! Attention les clés sont peut-être dans le désordre... </p>

<div className='row'>
  {config.map((x, key) => (
    <>
    <div key={key} className="col-sm-4 col-xs-6">
      <CloudCard name={x.name} description={x.description} icon={x.icon} url={x.url} ></CloudCard>
    </div>
    
    </>
  ))}
  <div className="spacer"></div>
</div>
    </div>
  )
}
