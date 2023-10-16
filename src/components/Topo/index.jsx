import { useState, useEffect } from 'react'
import style from './topo.module.css'
import NavMenuBar from './NavMenu'
import Image from 'next/image'
import menuOpenSvg from '@/assets/imgMenu/menuOpen.svg'
import menuCloseSvg from '@/assets/imgMenu/menuClose.svg'

const Topo = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toogleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])



  return (
    <div className={style.header}>
      <div className={`${style.topo} limite-secao`}>
        <span>NMA.</span>
        <nav className={style.navBar}>
          <a href="#home">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className={style.openButton} onClick={toogleMenu}>
          <Image
            className={style.iconMenu}
            src={menuOpen ? menuCloseSvg : menuOpenSvg}
            alt="MenuIcons"
          />
        </div>
        {menuOpen && <NavMenuBar toogleMenu={toogleMenu} />}
      </div>
    </div>
  )
}

export default Topo
