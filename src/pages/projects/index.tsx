import doremiPhoto from '/public/doremi.png'
import discommandPhoto from '/public/discommand.png'
import Image from 'next/image'
import styles from '@/styles/Projects.module.css'
import Link from 'next/link'

export default function Projects() {
  const projectMove = '해당 프로젝트로 이동하기'
  return (
    <main>
      <div className={styles.doremi}>
        <div className={styles.doremi_wrap}>
          <Link
            href={'https://github.com/Migan-Studio/Doremi'}
            target={'_blank'}
          >
            <Image src={doremiPhoto} alt={'Doremi'} width={640} height={320} />
            <span className={styles.project_move}>{projectMove}</span>
          </Link>
        </div>
        <p>Doremi는 Migan이 만들고, 운영하는 디코봇이에요.</p>
      </div>
      <div className={styles.discommand}>
        <div className={styles.discommand_wrap}>
          <Link
            href={'https://github.com/discommand/discommand'}
            target={'_blank'}
          >
            <Image
              src={discommandPhoto}
              alt={'discommand'}
              width={640}
              height={320}
            />
            <span className={styles.project_move}>{projectMove}</span>
          </Link>
        </div>
        <p>
          discommand는 Migan이 만드는 discord.js에 쓸 수 있는 라이브러리에요.
        </p>
      </div>
    </main>
  )
}
