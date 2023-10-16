import { useEffect } from 'react'

import Image from 'next/image'
import style from './modal.module.css'
import menuCloseIcon from '@/assets/imgModal/menu-close-icon.svg'




function Modal({ openModal, closeModal, projeto }) {
  useEffect(() => {
    
    const handleEscapeAndOutsideClick = event => {
      if (openModal) {
        if (event.key === 'Escape') {
          closeModal()
        } else if (!event.target.closest('.modalOutRange')) {
          closeModal()
        }
      }
    }
    document.addEventListener('keydown', handleEscapeAndOutsideClick)
    document.addEventListener('mousedown', handleEscapeAndOutsideClick)

    return () => {
      document.removeEventListener('keydown', handleEscapeAndOutsideClick)
      document.removeEventListener('mousedown', handleEscapeAndOutsideClick)
    }
  }, [openModal, closeModal])

  if (openModal) {
    return (
      <div className={style.modalBackground}>
        <div className={`${style.modalContainer} modalOutRange`}>
          <div className={style.closeBtn}>
          <button onClick={closeModal}><Image src={menuCloseIcon} alt={'icone fechar'}/></button>
          </div>
          
          <div className={style.modalInformacao}>
          <h3>{projeto.titulo}</h3>
            <Image
              className={style.modalImagem}
              src={projeto.imagem}
              alt={projeto.titulo}
            />
          </div>

          <div className={style.modalButtons}>
            <button>
              <a href={projeto.site} target='_blank'>Página</a>
            </button>
            <button>
              <a href={projeto.repositorio} target='_blank'>Repositório</a>
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Modal
