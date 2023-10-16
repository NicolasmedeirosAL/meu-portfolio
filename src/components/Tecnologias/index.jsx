import style from './tecnologias.module.css'
import { dadosTecnologias } from '@/data/listaTecnologias'
import { dadosFerramentas } from '@/data/listaFerramentas'
import CardTecnologia from './CardTecnologia'

const Tecnologias = () => {
  return (
    <section id="tecnologias" className={style.secaoTecnologia}>
      <div className={style.tecnologiaContainer}>
        <h2>Habilidades e Conhecimento</h2>
        <div className={`${style.cardsContainer} limite-secao`}>
          <div className={style.cardsConteudo}>
            <h3>Tecnologias</h3>

            <div className={style.cards}>
              {dadosTecnologias.map((tecnologia, index) => (
                <CardTecnologia
                  key={index}
                  nome={tecnologia.nome}
                  imagem={tecnologia.imagem}
                />
              ))}
            </div>
          </div>

          <div className={style.cardsConteudo}>
            <h3>Frameworks e Ferramentas</h3>
            <div className={style.cards}>
              {dadosFerramentas.map((tecnologia, index) => (
                <CardTecnologia
                  key={index}
                  nome={tecnologia.nome}
                  imagem={tecnologia.imagem}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tecnologias
