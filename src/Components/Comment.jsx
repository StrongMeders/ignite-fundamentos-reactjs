import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'
import { Avatar } from "./Avatar"

export function Comment() {
  return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/strongmeders.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
            <div className={styles.authorAndTime}>
              <strong>StrongMeders</strong>
              <time title="13 de outubro ás 03:10h" dateTime="2024-10-13 03:10:02">Cerca de 1h atrás</time>
            </div>
            <button title='Deletar Comentário'>
                <Trash size={24} />
            </button>
          </header>

					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>
				<footer>
          <button>
            <ThumbsUp Size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
			</div>
		</div>
	)
}