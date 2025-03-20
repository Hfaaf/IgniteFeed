import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Hfaaf.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.author}>
                            <strong>Heitor Farias</strong>
                            <time dateTime='11/03/2025 as 11:06'> Cerca de 1h atras</time>
                        </div>

                        <button title='Deletar Comentario'>
                            <Trash width={24} />
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        <pre>Aplaudir <span> 20</span></pre>
                    </button>
                </footer>
            </div>
        </div>
    )
}