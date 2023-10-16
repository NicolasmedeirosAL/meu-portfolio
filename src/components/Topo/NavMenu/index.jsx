
import Image from 'next/image'
import style from './navMenu.module.css'
import WhatsappSvg from '@/assets/imgContato/whatsapp.svg'
import TelefoneSvg from '@/assets/imgContato/telefone.svg'
import linkedinSvg from '@/assets/imgContato/linkedin.svg'
import GithubSvg from '@/assets/imgContato/github.svg'

const NavMenuBar = ({ toogleMenu }) => {
  return (
    <>
      <div className={`${style.menuContainer} outMenuContainer`}>
        <div className={style.menu}>
          <nav className={style.navLinks}>
            <a onClick={toogleMenu} href="#home">Inicio</a>
            <a onClick={toogleMenu} href="#projetos">
              Projetos
            </a>
            <a onClick={toogleMenu} href="#sobre">
              Sobre
            </a>
            <a onClick={toogleMenu} href="#tecnologias">
              Tecnologias
            </a>
            <a onClick={toogleMenu} href="#contato">
              Contato
            </a>
          </nav>
          <nav className={style.navIconsMenu}>
            <a href="https://github.com/NicolasmedeirosAL" target="_blank">
              <Image className={style.navIcons} src={GithubSvg} alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-medeiros-al/"
              target="_blank"
            >
              <Image
                className={style.navIcons}
                src={linkedinSvg}
                alt="Linkedin"
              />
            </a>
            <a
              href="https://wa.me/5515998168684?text=Ola%20 Nicolas.%20vim%20através%20do%20seu%20portfólio"
              target="_blank"
            >
              <Image
                className={style.navIcons}
                src={WhatsappSvg}
                alt="Whatsapp"
              />
            </a>
            <a href="tel:+5515998168684">
              <Image
                className={style.navIcons}
                src={TelefoneSvg}
                alt="Telefone"
              />
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavMenuBar
