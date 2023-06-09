import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from './navigation/Navigation'
import Presentation from './presentation/Presentation'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.Nav}>
        <Navigation />
      </nav>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>FranSabt</h1>
        </div>
        <Presentation />
        <div>
          <p>Aqui va una foto</p>
          <p>Despues las habilidades</p>
        </div>
        <div>
          <p>Aqui los proyectos de desarrollo</p>
        </div>
        <div>
          Otras HabilidadesS
        </div>
        <footer>
          el footer
        </footer>
      </main>
    </>
  )
}
