import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <Link rel="icon" href="/public/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
