import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/style.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>徳山翔太 | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1><a href="#">Portfolio</a></h1>
          <nav>
            <ul>
              <li><a href="#">あああ</a></li>
              <li><a href="#">いいい</a></li>
              <li><a href="#">ううう</a></li>
              <li><a href="#">えええ</a></li>
              <li><a href="#">おおお</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className={styles.mainInner}>
          <img src="/img/top.jpeg" alt="トップ画像"/>
          <div className={styles.mainContainer}>
            <h2>Tokuyama Shouta<br/>Portfolio</h2>
          </div>
        </div>
      </main>

      {/* <div>
        Read<Link href="/posts/about"><a>this page!</a></Link>
      </div> */}
    </>
  )
}
