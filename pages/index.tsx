import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>pekeq.com</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-[10vw] sm:text-6xl font-bold">
          pekeq.com
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 w-[100vw] sm:w-full">
          <a
            href="https://pekeq.hateblo.jp/"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Blog &rarr;</h3>
            <p className="mt-4 text-xl">
              My Blog.
            </p>
          </a>

          <a
            href="https://pekeq.hatenablog.com/"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Old Blog &rarr;</h3>
            <p className="mt-4 text-xl">
              My old Blog.
            </p>
          </a>

          <a
            href="https://zenn.dev/pekeq"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Zenn &rarr;</h3>
          </a>

          <a
            href="https://qiita.com/pekeq"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Qiita &rarr;</h3>
          </a>

          <a
            href="https://github.com/pekeq"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">GitHub &rarr;</h3>
          </a>

          <a
            href="https://twitter.com/pekeq"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Twitter &rarr;</h3>
          </a>
        </div>
      </main>
    </div>
  )
}
