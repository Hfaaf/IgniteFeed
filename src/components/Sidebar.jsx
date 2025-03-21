import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
    <aside className={styles.sidebar}>
        <img
         className={styles.cover} 
         src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background" 
         />

        <div className={styles.profile}>
            <Avatar src='https://github.com/Hfaaf.png'/>

            <strong>Heitor Farias</strong>
            <span>Developer</span>
        </div>
        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar o seu perfil
            </a>
        </footer>
    </aside>
    )
}