import Link from 'next/link'

export default function Custom404() {
  return (
    <main>
      <div className={'not_found'}>
        <h1>404 Not Found</h1>
        <Link href={'/'}>홈으로 가기</Link>
      </div>
    </main>
  )
}
