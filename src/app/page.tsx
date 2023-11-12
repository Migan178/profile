import Image from 'next/image'
import myProfile from '/public/myprofile.png'

export default function Home() {
  return (
    <main>
      <nav className={'navbar'}>
        <Image
          className={'navbar_photo'}
          src={myProfile}
          alt={'My profile photo'}
          width={50}
          height={50}
        />

        <ul className={'navbar_item'}>
          <li>
            <a href={'https://github.com/Migan178'}>GitHub</a>
          </li>
        </ul>
      </nav>
    </main>
  )
}
