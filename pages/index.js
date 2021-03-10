import Head from 'next/head'
import Hero from '../components/Hero'
import WeBuild from '../components/weBuild'

export default function Home() {
  return (
    <div>
      <Head>
        <title>OnDev Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* body */}
      <Hero/>
      <WeBuild/>
    </div>
  )
}
