import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>

      </Head>
      <main>
        <header>
          <div className={styles.head}>
            <div className={styles.head_logo}>
              <Image />
            </div>
            <div>
              <div className={styles.mobile_nav}>
                
              </div>
              <div className={styles.desk_nav}>

              </div>
            </div>
          </div>
        </header>
      </main>
    </div>
  )
}
