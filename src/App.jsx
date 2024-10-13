import { Header } from './Components/header';
import { Post } from './post';
import './global.css';

  export function App (){
    return (
      <div>
        <Header />
        <Post 
          author="Henrick Lopes" 
          content="eu sou foda poha!"
        />
        <Post 
          author="Vitor Rafael" 
          content="eu sou o melhor piloto caralho!"
        />
      </div>
    )
  }

export default App
