import Head from "next/head";
import ContactSmallSection from "../components/ContactSmallSection";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";
import OurServicesIn from "../components/OurServicesIn";
import WeBuild from "../components/weBuild";
import WhyChooseUs from "../components/WhyChooseUs";

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
      <HowWeWork />
      <WhyChooseUs />
      <ContactSmallSection />
    </div>
  );
}
