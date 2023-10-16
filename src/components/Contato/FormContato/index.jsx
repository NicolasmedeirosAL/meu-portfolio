import style from './formContato.module.css'
import BotaoContato from '../BotaoContato'

import sendSvg from '@/assets/imgContato/send.svg'
const FormContato = () => {
  return (
    <>
      <form className={style.form}
        action="https://formsubmit.co/nicolas.medeiros.profissional@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_next" value="http://localhost:3000/" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Seu Email foi enviado com sucesso, logo entrarei em contato!"
        />
        <div className={style.inputArea}>
          <label htmlFor="nome">Nome:</label>
          <input type="text"  name="nome" placeholder="Nome" required />
        </div>
        <div className={style.inputArea}>
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" placeholder="E-mail" required />
        </div>

        <div className={style.inputArea}>
          <label htmlFor="assunto">Assunto:</label>
          <input type="text" name="assunto" placeholder="Assunto" required />
        </div>

        <div className={style.inputArea}>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea name="mensagem" placeholder="Mensagem" required></textarea>
        </div>
        <button type="submit">{<BotaoContato nome={'Enviar'} image={sendSvg}/>}</button>
      </form>
     
    </>
  )
}

export default FormContato
