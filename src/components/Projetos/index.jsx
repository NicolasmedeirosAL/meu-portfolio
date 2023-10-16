import { useState } from 'react'
import Slider from 'react-slick'
import CardProjetos from './CardProjetos/CardsProjetos'
import { dadosProjetos } from '@/data/listaProjetos'
import Modal from './CardProjetos/CardsModal/CardsModal'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import style from './projetos.module.css'



TODO: 'refratorar classes de estilização'


const Projetos = () => {
  const [openModal, setOpenModal] = useState(false)
  const [projetoSelecionado, setprojetoSelecionado] = useState(null)

  const toogleOpenModal = projeto => {
    setprojetoSelecionado(projeto)
    setOpenModal(true)
  }

  const toogleCloseModal = () => {
    setOpenModal(false)
    setprojetoSelecionado(null)
  }

  const settings = {
    dots: true,
    arrows: true,
    className: `${style.slider}`,
    infinite: true,
    speed: 700,
    centerPadding: 0,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <section id="projetos" className={style.projetos}>
      <div className={`${style.projetosContainer} `}>
        <div className={style.textoProjetos}>
          <h2>Meus Projetos</h2>
          <p>Alguns dos meus projetos no Front-end.</p>
        </div>

        <div className={style.cardProjetosContainer}>
          <Slider {...settings}>
            {dadosProjetos.map((projeto, index) => (
              <CardProjetos
                key={index}
                titulo={projeto.titulo}
                tecnologias={projeto.tecnologias}
                descricao={projeto.descricao}
                imagem={projeto.imagem}
                site={projeto.site}
                repositorio={projeto.repositorio}
                modal={() => toogleOpenModal(projeto)}
              />
            ))}
          </Slider>

          {openModal && (
            <Modal
              openModal={openModal}
              closeModal={toogleCloseModal}
              projeto={projetoSelecionado}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Projetos
