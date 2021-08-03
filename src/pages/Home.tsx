import { useHistory } from 'react-router-dom';import { Button } from './../components/Button';

import illustrationImg from './../assets/images/illustration.svg';
import logoImg from './../assets/images/logo.svg';
import googleIconImg from './../assets/images/google-icon.svg';

import './../styles/auth.scss';

export function Home() {
  const history = useHistory();

  function navigateToNewRoom() {
    history.push('./rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas"></img>
        <h1><strong>Toda a pergunta tem uma resposta</strong></h1>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>

      <main>
        <div id="main-content">
          <img src={logoImg} alt="letmeask" />
          <button onClick={navigateToNewRoom} id="create-room">
            <img src={googleIconImg} alt="Google Logo" />
            Crie sua sala com o Google
          </button>
          <div id="separator"><p>Ou entre em uma sala</p></div>
        
          <form action="">
            <input type="text" placeholder="Insira o código da sala" />
            <Button type="submit">
              Entrar em uma sala
            </Button>
          </form>
        
        </div>
      </main>
    </div>
  );
}