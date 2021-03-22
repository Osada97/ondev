import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import AboutSection from "../components/AboutSection";
import AboutSection1 from "../components/AboutSection1";
import AboutSectionTh from "../components/AboutSectionTh";
import ContactSmallSection from "../components/ContactSmallSection";
import Meta from "../components/Meta";

import {
  mainIcon,
  pageAnimation,
  paragraphAni,
  stagger,
  titleAnim,
} from "../components/animation";

export default function about() {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      {/*meata */}
      <Meta title="About" />

      <Mainhero>
        <div className="main">
          <motion.div variants={stagger} className="column">
            <motion.h1 variants={titleAnim}>About Us</motion.h1>
            <motion.h2 variants={titleAnim}>
              <span>OnDev</span> We're Global Team
            </motion.h2>
            <motion.p variants={paragraphAni}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum d
            </motion.p>
          </motion.div>
          <div className="column">
            <motion.img variants={mainIcon} src="/img/about.png" alt="" />
          </div>
        </div>
      </Mainhero>

      <AboutSection />
      <AboutSection1 />
      <AboutSectionTh />

      <ContactSmallSection />
    </motion.div>
  );
}

const Mainhero = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #48484a 0%, #131315 100%);
  .main {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .column {
      flex: 0.4;
      &:nth-child(2) {
        flex: 0.6;
        text-align: center;
      }
      h1 {
        color: #fff;
        font-family: var(--main-font);
        font-size: 65px;
        font-weight: normal;
        margin-bottom: 23px;
      }
      h2 {
        color: #fff;
        font-family: var(--main-font);
        font-weight: normal;
        font-size: 35px;
        margin-bottom: 23px;

        span {
          color: #3499cc;
        }
      }
      p {
        font-family: var(--sub-font);
        color: #ffffff;
        font-size: 17px;
      }
      img {
        width: 80%;
      }
    }
  }
  @media (max-width: 825px) {
    .main .column h1 {
      font-size: 40px;
    }
    .main .column h2 {
      font-size: 25px;
    }
    .main .column p {
      font-size: 13px;
    }
  }
  @media (max-width: 600px) {
    .main .column:nth-child(1) {
      flex: 1;
      text-align: center;
    }
    .main .column:nth-child(2) {
      display: none;
    }
  }
`;
