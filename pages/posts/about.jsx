import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>徳山翔太 | Portfolio2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}