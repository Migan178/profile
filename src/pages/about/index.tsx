import styles from '@/styles/About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <main className={styles.about}>
      <div className={styles.languages}>
        <h1>Languages</h1>
        <ul className={styles.languages_items}>
          <li>
            <Image
              src={
                'https://img.shields.io/badge/-TypeScript-%233178C6?style=for-the-badge&logo=typescript&logoColor=white'
              }
              alt={'TypeScript'}
              width={126.5}
              height={28}
            />
          </li>
          <li>
            <Image
              src={
                'https://img.shields.io/badge/-Javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'
              }
              alt={'JavaScript'}
              width={126.5}
              height={28}
            />
          </li>
        </ul>
      </div>
      <div className={styles.devOps}>
        <h1>DevOps</h1>
        <ul className={styles.devOps_items}>
          <li>
            <Image
              src={
                'https://img.shields.io/badge/-Visual_Studio_Code-%23007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white'
              }
              alt={'Visual Studio Code'}
              width={190.5}
              height={28}
            />
          </li>
          <li>
            <Image
              src={
                'https://img.shields.io/badge/-ArchLinux-%231793D1?style=for-the-badge&logo=archlinux&logoColor=white'
              }
              alt={'ArchLinux'}
              width={122.5}
              height={28}
            />
          </li>
          <li>
            <Image
              src={
                'https://img.shields.io/badge/-Git-%23F05032?style=for-the-badge&logo=git&logoColor=white'
              }
              alt={'Git'}
              width={67.5}
              height={28}
            />
          </li>
          <li>
            <Image
              src={
                'https://img.shields.io/badge/-Docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white'
              }
              alt={'Docker'}
              width={97.5}
              height={28}
            />
          </li>
          <li>
            <Image
              src={
                'https://img.shields.io/badge/-MariaDB-%23003545?style=for-the-badge&logo=mariadb&logoColor=white'
              }
              alt={'MariaDB'}
              width={106.5}
              height={28}
            />
          </li>
        </ul>
      </div>
    </main>
  )
}
