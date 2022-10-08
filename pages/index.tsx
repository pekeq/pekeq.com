import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

type ExtLinkProps = {
  href: string
  title: string
}

const ExtLink = ({href, title}: ExtLinkProps) => {
  return (
    <li>
      <a
        href={href}
        className='hover:underline'
      >
      {title}
      </a>
    </li>
  )
}

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>pekeq.com</title>
      </Head>

      <main className="container mx-auto my-4">
        <h1 className="font-montserrat text-xl text-center">
          pekeq.com
        </h1>

        <div className="mx-6 my-6 text-center">
          <ul className="list-inside">
            <ExtLink href="https://zenn.dev/pekeq" title="Zenn" />
            <ExtLink href="https://qiita.com/pekeq" title="Qiita" />
            <ExtLink href="https://github.com/pekeq" title="GitHub" />
            <ExtLink href="https://twitter.com/pekeq" title="Twitter" />
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home
