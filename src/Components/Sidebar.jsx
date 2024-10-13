import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://media.discordapp.net/attachments/1294897491904430090/1294897569604046932/photomode_22092024_040610.png?ex=670caed6&is=670b5d56&hm=0ee6cf87a96ede6dde86e17405d93779a81f201bc432699b83476e4f9d3932f5&=&format=webp&quality=lossless&width=500&height=280"
			/>
			<div className={styles.profile}>
				<img
					className={styles.avatar}
					src="https://github.com/strongmeders.png"
				/>

				<strong>StrongMeders</strong>
				<span>Web Developer & UI Designer</span>
			</div>
			<footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	)
}
