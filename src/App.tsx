import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header"
import { Post,PostType } from "./components/Post"


import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl:"https://github.com/marcossouza407.png",
      name: "marcos",
      role: "DEV formtend",
    },
    content: [
     { type: 'paragraph', content: 'fala galera  👋'},
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      { type: 'link', content: 'jane.design/doctorcara'},
    ],
    publishedAt: new Date("2023-02-02 12:00:00")
  },
  {
    id: 2,
    author:{
      avatarUrl:"https://github.com/Feelpe.png",
      name: "felipe",
      role: "DEV formtend",
    },
    content: [
     { type: 'paragraph', content: 'fala galera  👋'},
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date("2023-02-02 12:00:00")


  }
]




export function App() {


 return (
  <div>

  <Header/>
  <div className={styles.wrapper}>
   <Sidebar/>
    <main>
      {posts.map(post =>{
        return (
        <Post
        key={post.id}
        post={post}
        />
        )
      })}
   
    </main>
    </div>
   </div>
  )
}


