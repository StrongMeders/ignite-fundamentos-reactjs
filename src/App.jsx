import { Header } from "./Components/Header"
import { Post } from "./Components/Post"
import { Sidebar } from "./Components/Sidebar"

import styles from "./App.module.css"

import "./global.css"

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post author="Henrick Lopes" content="eu sou foda poha!" />
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
