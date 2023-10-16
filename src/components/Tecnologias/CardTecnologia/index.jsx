import Image from 'next/image'
import style from './cardTecnologia.module.css'

const CardTecnologia = tecnologia => {
  return (
      <div className={style.card}>
        <figure>
          <Image className={style.cardImage} src={tecnologia.imagem} alt={tecnologia.nome} />
          <figcaption>{tecnologia.nome}</figcaption>
        </figure>
      </div>
  )
}

export default CardTecnologia
