import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/style.module.css'
import Header from '../components/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title>徳山翔太 | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className={styles.mainInner}>
        </div>
      </main>

      
    </>
  )
}
