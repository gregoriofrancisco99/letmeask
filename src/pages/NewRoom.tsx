import { Button } from './../components/Button';

import illustrationImg from './../assets/images/illustration.svg';
import logoImg from './../assets/images/logo.svg';
import googleIconImg from './../assets/images/google-icon.svg';
import './../styles/auth.scss';
import { Link } from 'react-router-dom';

export function NewRoom() {
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
          <h2>Cria uma nova sala</h2>
          <form action="">
            <input type="text" placeholder="Insira o código da sala" />
            <Button type="submit">
              Criar Sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Click aqui</Link></p>
        
        </div>
      </main>
    </div>
  );
}