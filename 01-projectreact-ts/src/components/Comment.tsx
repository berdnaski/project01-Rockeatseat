import styles from './Comment.module.css'
import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentsProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }:CommentsProps){
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })       
    }

    return(
        <div className={styles.Comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/berdnaski.png" 
                alt=""  
             />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Erick Berdnaski</strong>
                            <time title='28 de Junho ás 12:42:00' dateTime='2023-06-28 12:42:30'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}