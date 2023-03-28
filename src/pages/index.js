import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next tw starter</title>
      </Head>
      <main>
        <h1>Hello world</h1>
        <h2>This is text</h2>
        <button className="btn-blue">click</button>
        <div className="content-area">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod corporis hic dolor deleniti ex reprehenderit nesciunt iusto eius vero asperiores soluta ullam beatae possimus, non dignissimos. Similique, nobis esse. Fugiat, alias. Soluta, corporis reprehenderit et sunt nesciunt hic iure. Blanditiis, quam voluptates temporibus facilis soluta sapiente? Illo, recusandae provident?</div>
      </main>
    </>
  )
}
