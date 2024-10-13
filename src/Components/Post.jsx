import styles from "./Post.module.css"
import { Comment } from "./Comment"

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src="https://github.com/strongmeders.png"
					/>
					<div className={styles.authorInfo}>
						<strong>StrongMeders</strong>
						<span>Web Developer & UI Designer</span>
					</div>
				</div>

				<time title="13 de outubro ás 03:10h" dateTime="2024-10-13 03:10:02">
					Publicado há 1h
				</time>
			</header>
			<div className={styles.content}>
				<p>Fala galeraa 👋 </p>
				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀{" "}
				</p>
				<p>
					<a href="#">jane.design/doctorcare</a>
				</p>
				<p>
					<a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
					<a href="">#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea placeholder="Deixe um comentário" />

			<footer>
				<button type="submit">Publicar</button>
			</footer>
				
			</form>

			<div className={styles.commentList}>
			<Comment />
			<Comment />
			<Comment />
			</div>
		</article>
	)
}
