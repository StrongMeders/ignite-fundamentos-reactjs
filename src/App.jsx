import { Header } from './Components/Header';
import { Post } from './post';
import './global.css';
import styles from './App.module.css'
import { Sidebar } from './Components/Sidebar';

  export function App (){
    return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
              author="Henrick Lopes" 
              content="eu sou foda poha!"
            />
            <Post 
              author="Vitor Rafael" 
              content="eu sou o melhor piloto caralho!"
            />
          </main>
        </div>
      </div>
    )
  }

export default App
