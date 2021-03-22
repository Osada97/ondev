import { motion } from "framer-motion";
import ContactSmallSection from "../components/ContactSmallSection";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";
import OurServicesIn from "../components/OurServicesIn";
import WeBuild from "../components/weBuild";
import WhyChooseUs from "../components/WhyChooseUs";
import { pageAnimation } from "../components/animation";

export default function Home() {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      {/* body */}
      <Hero />
      <WeBuild />
      <OurServicesIn />
      <HowWeWork />
      <WhyChooseUs />
      <ContactSmallSection />
    </motion.div>
  );
}
