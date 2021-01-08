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
              <li><a href="#">Profile</a></li>
              <li><a href="#">Skill</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Contact</a></li>
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
        {/* プロフィールここから */}
        <div className={styles.mainWrapper}>
          <div className={styles.mainWrapperBox}>
            <img src="/img/profile.jpg" alt="メイン画像"/>
            <ul>
              <li><strong>名前</strong><br/>徳山翔太</li>
              <li><strong>趣味</strong><br/>カフェ巡り、カラオケ、サッカー</li>
              <li><strong>年齢</strong><br/>25歳</li>
              <li><strong>出身</strong><br/>大阪府</li>
              <li><strong>好きな時間</strong><br/>のんびり過ごしている時</li>
            </ul>
          </div>
        </div>
      </main>

      {/* <div>
        Read<Link href="/posts/about"><a>this page!</a></Link>
      </div> */}
    </>
  )
}
