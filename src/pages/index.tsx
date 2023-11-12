import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <h1 className={styles.main_text}>안녕하세요, 저는 Migan이에요!</h1>
      <ul className={styles.main_move}>
        <li>
          <Link href={'/about'}>소개</Link>
        </li>
        <li>
          <Link href={'/projects'}>프로젝트</Link>
        </li>
      </ul>
    </main>
  )
}
