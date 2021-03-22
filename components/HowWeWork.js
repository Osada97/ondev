import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { cardFade, fade, stagger } from "./animation";
import useScroll from "./useScroll";

export default function HowWeWork() {
  const [element, controls] = useScroll();

  return (
    <HowWe>
      <Main>
        <div className="top">
          <h1>How We Work</h1>
        </div>
        <Bdy
          ref={element}
          animate={controls}
          className="body"
          variants={stagger}
        >
          <div className="bdy-main">
            <img src="/img/svg/howweworkin.svg" alt="" />
          </div>
          <SimCard variants={cardFade} style={{ top: "-3%", left: "34%" }}>
            <h3>Requirements Gathering</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
          <SimCard variants={cardFade} style={{ top: "38%", left: "1%" }}>
            <h3>Designing</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
          <SimCard variants={cardFade} style={{ top: "45%", left: "41%" }}>
            <h3>Implementations</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
          <SimCard variants={cardFade} style={{ top: "1%", left: "72%" }}>
            <h3>Implementations</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
          <SimCard variants={cardFade} style={{ bottom: "-13%", left: "62%" }}>
            <h3>Deployement</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
          <SimCard variants={cardFade} style={{ bottom: "-21%", left: "3%" }}>
            <h3>Maintains</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
        </Bdy>
        <div className="bdy-sub">
          <motion.img variants={fade} src="/img/svg/Man-behind.svg" alt="" />
        </div>
      </Main>
    </HowWe>
  );
}

const HowWe = styled(motion.div)`
  width: 100%;
  padding: 82px 0;
`;
const Main = styled(motion.div)`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;

  .top {
    font-family: var(--main-font);
    margin-bottom: 20px;
    h1 {
      color: #48484a;
      font-size: 35px;
    }
  }
  .bdy-sub {
    position: absolute;
    bottom: -80px;
    right: 30px;

    img {
      width: 160px;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    max-width: 95%;
  }
`;
const Bdy = styled(motion.div)`
  position: relative;
  .bdy-main {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
  }
  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    counter-reset: section;
    .bdy-main {
      display: none;
    }
  }
`;
const SimCard = styled(motion.div)`
  font-family: var(--sub-font);
  width: 255px;
  padding: 8px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  h3 {
    color: #2039cc;
    margin-bottom: 5px;
  }
  p {
    font-size: 15px;
    color: #48484a;
  }
  @media (max-width: 900px) {
    position: relative;
    margin-bottom: 15px;
    top: 0 !important;
    left: 0 !important;
    transition: 0.8s ease;

    &:before {
      counter-increment: section;
      content: counter(section);
      display: block;
      width: 40px;
      height: 40px;
      padding: 8px;
      margin-bottom: 8px;
      background-color: transparent;
      color: #48484a;
      border-radius: 50px;
      font-size: 40px;
      z-index: -1;
      opacity: 0.6;
      font-weight: 900;
      transition: 0.8s ease;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:hover:before {
      background: #48484a;
      color: #fff;
      transition: 0.8s ease;
    }
  }
`;
