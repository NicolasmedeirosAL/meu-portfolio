import style from './footer.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={`${style.footerContainer} limite-secao`}>
        <p>
          &copy; Nícolas Medeiros Alamino - 
          <span> Desenvolvedor Web Junior</span>
        </p>
        <div className={style.repositorio}>
          <p>Repositório do Portfólio: </p>
          <a href="https://github.com/NicolasmedeirosAL/portfolio"target='_blank'>Aqui</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
