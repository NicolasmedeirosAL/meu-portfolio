
import Image from "next/image"
import style from './botaoContato.module.css'

const BotaoContato = (props) => {
return(
  <>
  <a className={style.botaoLink}
            href={props.link}
            target="_blank"
          >
            <Image className={style.svg}
              src={props.image}
              alt={props.nome}
            />
            <p className={style.paragrafo}>{props.nome}</p>
          </a>
  </>
)
}

export default BotaoContato