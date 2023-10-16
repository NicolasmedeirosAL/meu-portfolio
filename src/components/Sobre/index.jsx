import style from './sobre.module.css'
import Image from 'next/image'

const Sobre = () => {
  return (
    <section id="sobre" className={style.secaoSobre}>
      <div className={`${style.sobreContainer} limite-secao`}>
        <div className={style.informacaoContainer}>
          <h3>Sobre mim</h3>
          <p>
            Olá! Sou Nicolas, um apaixonado por desenvolvimento web, tenho 28
            anos, sou do interior de São Paulo, atualmente no quarto ciclo do
            curso de Análise e Desenvolvimento de Sistemas. Nesses anos de
            envolvimento na area de Tecnologia da Informação, concentrei-me no
            desenvolvimento web. Estou sempre em busca de novos desafios para
            aplicar minhas habilidades e paixão pelo código. Estou animado para
            colaborar em projetos inovadores e crescer profissionalmente. Pronto
            para contribuir e aprender, estou aberto a oportunidades
            emocionantes no mundo do desenvolvimento.
          </p>

          <p>
            Continuarei aprimorando minhas hábilidades em 
            JavaScript sendo assim estarei me aprofundando mais em : front-end(
            <b>React.js, Next.js, Angular ,TailwindCSS </b>) e também no  Back-end(
            <b>TypeScript, Node.js, Express.js , API e MongoDB</b>).
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sobre
