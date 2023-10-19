***Refatorando***


Olá bem-vindo ao meu Portfólio, me chamo Nicolas e to aqui para explicar algumas das funções e métodos utilizados nesse projeto.

Globals.css
-------------
Através da variável (--hue) é possível alterar a cor da página sem precisar alterar diretamente na style dos componentes.

A variável (--content-width) ajusta automaticamente a largura de todo content em after das tags h2 e h3 da página.

Pages - Home
-------------
Pagina principal que agrega os outros componentes, para que pudesse usar o background-image na página foi preciso usar style direto no arquivo, pois o uso da background-image no css acabou causando um bug de fundo branco.



Components - Topo
-------------

Funções:

toogleMenu: Abre e fecha menu

useEffect - handleResize: fecha o menu quando a tela fica acima de 768px. Pois houve um bug que se aberto o menu abaixo desse pixel e depois maximizado a tela o menu continuava aberto.


Optei por usar uma condicional para abrir um componente de menu(NavBarMenu).

Components - Topo - NavMenuBar
-------------
Todo links de ancoragem desse menu recebem a função toogleMenu, pois assim que clicado o menu fecha sozinho.

Components - Projetos
-------------

funções:

toogleOpenModal: abre modal do projeto passando o index do projeto como parâmetro.

toogleModalClose: fecha modal e volta o projeto selecionado com null.

Slider: recebe o mapeamento dos dados(listaProjetos.js) sendo assim fica mais fácil na manutenção como no caso adicionar, remover ou alterar projetos.



Components - Projetos - modal
-------------
funções: 
useEffect - handleEscapeAndOutsideClick: uma função para quando clicar fora do modal ou a tecla ESC ele fechar o modal.



Components - Tecnologias
-------------

Usado mapeamento nos dados(listaTecnologias.js) e dados(listaFerramentas.js) para listar as mesmas, sendo assim tornando mais fácil a manutenção.



Components - Contato - formContato
-------------
Componente criado separado, para fácil manutenção e para tornar código mais legível separado da secão


Components - Contato - BotaoContato
-------------
Componente de botão reutilizável
