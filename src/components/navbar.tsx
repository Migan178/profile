import Image from 'next/image'
import Link from 'next/link'
import myProfile from '/public/myprofile.png'
import githubLogo from '/public/github_logo.png'

export default function Navbar() {
  return (
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
          <Link href={'/'}>홈</Link>
        </li>
        <li>
          <Link href={'/about'}>정보</Link>
        </li>
      </ul>
      <ul className={'navbar_icon'}>
        <li>
          <a href={'https://github.com/Migan178'} target={'_blank'}>
            <Image
              className={'github_logo'}
              src={githubLogo}
              alt={'GitHub logo'}
              width={20}
              height={20}
            />
          </a>
        </li>
      </ul>
    </nav>
  )
}
