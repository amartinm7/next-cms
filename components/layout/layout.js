import Head from 'next/head'
import styles from './layout.module.scss'
import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Header/>
      <main className={styles.main}>{children}</main>
    </>
  )
}
