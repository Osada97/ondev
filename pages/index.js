import Head from "next/head";
import Hero from "../components/Hero";
import OurServicesIn from "../components/OurServicesIn";
import WeBuild from "../components/weBuild";

export default function Home() {
  return (
    <div>
      <Head>
        <title>OnDev Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* body */}
      <Hero />
      <WeBuild />
      <OurServicesIn />
    </div>
  );
}
