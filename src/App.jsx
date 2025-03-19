import { Header } from "./components/Header"
import { Post } from "./components/post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Hfaaf.png',
      name: 'Heitor Farias',
      role: 'Web Developer',
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋'},
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
        { type: 'link', content:'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2025-03-11 14:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://wallpapers.com/images/hd/funny-cartoon-of-mike-wazowski-byeruzljofv0ydip.jpg',
        name: 'mike wazowski',
        role: 'Assustador Profissional',
      },
      content: [
          { type: 'paragraph', content: 'Fala monstrada'},
          { type: 'paragraph', content: 'Acabei de assustar muito mais gente e coloquei no meu portifa profissional. Assustei elas com o meu amigão '},
          { type: 'mark', content: '@JSullivan'},
          { type: 'link', content:'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2025-03-1 14:00:00')
      },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
    </div>
  )
}

