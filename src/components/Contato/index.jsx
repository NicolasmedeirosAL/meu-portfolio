import FormContato from './FormContato'

import linkedinSvg from '@/assets/imgContato/linkedin.svg'
import EmailSvg from '@/assets/imgContato/email.svg'
import GithubSvg from '@/assets/imgContato/github.svg'
import WhatsappSvg from '@/assets/imgContato/whatsapp.svg'
import style from './contato.module.css'

import BotaoContato from './BotaoContato'
const Contato = () => {
  return (
    <section id="contato" className={style.secaoContato}>
      <div className={`${style.contatoContainer} limite-secao`}>
        <div className={style.contatoInformacao}>
          <h3>Contatos</h3>
          <FormContato />
          <span>
            *Caso queira optar por não usar esse formulário para enviar E-mail,
            basta clicar no botão E-Mail ao lado que sera redirecionado ao seu
            e-mail pessoal.
          </span>
        </div>

        <div className={style.linksContainer}>
          <BotaoContato
            link="https://wa.me/5515998168684?text=Ola%20 Nicolas.%20vim%20através%20do%20seu%20portfólio"
            image={WhatsappSvg}
            nome="WhatsApp"
          />
          <BotaoContato
            link="https://www.linkedin.com/in/nicolas-medeiros-al/"
            image={linkedinSvg}
            nome="LinkedIn"
          />
          <BotaoContato link="mailto:nicolas.medeiros.profissional@gmail.com" image={EmailSvg} nome="E-mail" />
          <BotaoContato
            link="https://github.com/NicolasmedeirosAL"
            image={GithubSvg}
            nome="GitHub"
          />
        </div>
      </div>
    </section>
  )
}

export default Contato
