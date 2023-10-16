import Topo from '@/components/Topo'
import Intro from '@/components/Introducao'
import Tecnologias from '@/components/Tecnologias'
import Projetos from '@/components/Projetos'
import Sobre from '@/components/Sobre'
import Contatos from '@/components/Contato'
import Footer from '@/components/Footer'

import imgBg from '@/assets/background-code.jpg'


FIXED: 'Corrigido erro na background em que o fundo ficava branco'
const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${imgBg.src}')`,
          width: '100%',
          height: '100%',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover'
        }}
      >
        <Topo />

        <Intro />

        <Projetos />

        <Sobre />

        <Tecnologias />

        <Contatos />

        <Footer />
      </div>
    </>
  )
}

export default Home
