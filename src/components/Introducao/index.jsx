import Image from 'next/image'
import fotoPerfil from '@/assets/fotoPerfil.jpg'
import style from './introducao.module.css'

const Intro = () => {
  return (
    <section id="home" className={style.secaoIntro}>
      <div className={`${style.introConteudo} limite-secao`}>
        <Image
          className={style.imgIntro}
          src={fotoPerfil}
          alt="minha foto"
          quality={75}
          priority={true}
        />

        <div className={style.informacoesContainer}>
          <small>Olá, Bem vindo ao meu portfólio!👋. eu sou </small>
          <h1>Nicolas Medeiros Alamino</h1>
          <span>Desenvolvedor Web Júnior</span>
          <p>
            Me formando em Análise e desenvolvimento de sistemas, sou apaixonado
            por desenvolvimento web. Tenho 1 ano de estudo e experiências com
            JavaScript e tenho trabalhado em uma variedade de projetos
            emocionantes e desafiadores, desde a criação de sites interativos
            até o desenvolvimento de aplicativos web.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Intro
