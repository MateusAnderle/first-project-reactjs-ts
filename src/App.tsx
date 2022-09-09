import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mateusanderle.png',
      name: 'Mateus Anderle',
      role: 'Front-End Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!!!'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates at quisquam dolore harum ab excepturi animi praesentium ad ratione possimus, ducimus minima rerum, beatae sunt, deleniti quaerat placeat ea aut.'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-09-02 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!!!'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates at quisquam dolore harum ab excepturi animi praesentium ad ratione possimus, ducimus minima rerum, beatae sunt, deleniti quaerat placeat ea aut.'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-09-08 08:00:00')
  },
];

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
            {
              posts.map(post => {
                return (
                  <Post 
                  key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                )
              })
            }
        </main>
      </div>

    </div>
  )
}
