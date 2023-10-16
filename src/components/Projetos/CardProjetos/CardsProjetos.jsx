
import Image from 'next/image'
import style from './cardProjetos.module.css'
import Modal from './CardsModal/CardsModal'

const CardProjetos = projeto => {
  return (
    <div className={style.cardProjeto}>
      <figure>
        <Image
          quality={100}
          className={style.projetoImg}
          src={projeto.imagem}
          alt={projeto.titulo}
        />
      </figure>
      <div className={style.cardInfo}>
        <h3>{projeto.titulo}</h3>
        <div className={style.cardTecnologia}>
          {projeto.tecnologias.map((tecnologia, index) => (
            <span key={index}>{tecnologia}</span>
          ))}
        </div>
        <p>{projeto.descricao}</p>
        <div className={style.buttonContainer}>
          <button onClick={projeto.modal}>Projeto</button>
        </div>
      </div>
    </div>
  )
}

export default CardProjetos
