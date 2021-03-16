import React from "react";
import styled from "styled-components";
import WhyChooseCard from "./WhyChooseCard";
import useScroll from "./useScroll";
import { motion } from "framer-motion";
import { fade, mainIcon, stagger, titleAnim } from "../pages/animation";

export default function WhyChooseUs() {
  const [element, controls] = useScroll();

  return (
    <WhyC ref={element} animate={controls} variants={stagger}>
      <div className="wave">
        <img src="/img/s-wave-w-d.svg" alt="" />
      </div>
      <div className="wave-mid">
        <img src="/img/svg/line-with-curve.svg" alt="" />
      </div>
      <Main>
        <Body className="body">
          <div className="column">
            <motion.h1 variants={titleAnim}>Why Choose Us</motion.h1>
            <motion.img variants={mainIcon} src="/img/svg/why.svg" alt="" />
          </div>
          <div className="column"></div>
          <motion.div className="column" variants={fade}>
            <div className="card-sec">
              <WhyChooseCard
                imgname="vollet.svg"
                content="Highly Cost-Effective"
              />
              <WhyChooseCard
                imgname="brain-light.svg"
                content="Out Of The Box Custom Solutions"
              />
              <WhyChooseCard
                imgname="flexible.svg"
                content="Flexible And Transparent Operation"
              />
              <WhyChooseCard imgname="on-time.svg" content="On Time Delivery" />
              <WhyChooseCard
                imgname="100precent.svg"
                content="100% Customer Satisfaction"
              />
              <WhyChooseCard
                imgname="user-experience.svg"
                content="Experience With Credibility"
              />
              <WhyChooseCard
                imgname="repair.svg"
                content="Support And Maintenance"
              />
            </div>
          </motion.div>
        </Body>
      </Main>
    </WhyC>
  );
}

const WhyC = styled(motion.div)`
  background-color: #48484a;
  position: relative;
  margin-top: 55px;

  .wave {
    position: absolute;
    top: 0;
    left: 0;
    animation: waving 5s linear infinite alternate;

    img {
      max-width: 80%;
    }
  }
  @keyframes waving {
    0% {
      left: 0px;
    }
    100% {
      left: -100px;
    }
  }
  .wave-mid {
    position: absolute;
    top: 0;
    left: 36%;
    transform: translateX(-35%);
    height: 100%;

    img {
      height: 100%;
    }
  }
  @media (max-width: 1200px) {
    .wave-mid {
      left: 31%;
    }
  }
  @media (max-width: 1000px) {
    .wave-mid {
      left: 27%;
    }
  }
  @media (max-width: 950px) {
    .wave-mid {
      display: none;
    }
  }
  @media (max-width: 890px) {
    padding: 35px 0;
  }
`;

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto 25px;

  @media (max-width: 1200px) {
    max-width: 95%;
  }
`;
const Body = styled.div`
  display: flex;
  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 90vh;

    &:nth-child(1) {
      flex: 0.3;
    }
    &:nth-child(2) {
      flex: 0.1;
    }
    &:nth-child(3) {
      flex: 0.6;
      .card-sec {
        display: grid;
        grid-template-columns: repeat(3, 180px);
        grid-template-rows: repeat(6, 50px);
        grid-template-areas:
          ". card2 ."
          "card1 card2 card3"
          "card1 card4 card3"
          "card5 card4 card6"
          "card5 card7 card6"
          ". card7 .";
        grid-column-gap: 45px;
        grid-row-gap: 45px;
        justify-items: center;
        align-items: center;

        .card {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border: 2px solid #fefefe;
          border-radius: 8px;
          overflow: hidden;
          padding: 5px;
          background-color: #ffffff05;
          transform: translateZ(20px);

          &::after {
            content: "";
            width: 162%;
            height: 146%;
            position: absolute;
            top: 0;
            left: -7px;
            background-color: transparent;
            border-radius: 100px;
            transform: rotateZ(6deg);
            border-left: 2px solid #b5b5b578;
          }

          &:nth-child(1) {
            grid-area: card1;
          }
          &:nth-child(2) {
            grid-area: card2;
          }
          &:nth-child(3) {
            grid-area: card3;
          }
          &:nth-child(4) {
            grid-area: card4;
          }
          &:nth-child(5) {
            grid-area: card5;
          }
          &:nth-child(6) {
            grid-area: card6;
          }
          &:nth-child(7) {
            grid-area: card7;
          }
          &:hover {
            box-shadow: 0px 0px 2px #313131, 0px 0px 13px #afafaf;
          }
          &:hover .icon {
            box-shadow: 0px 0px 5px 3px #e6e6e69e;
          }

          .icon {
            width: 60px;
            height: 60px;
            background-color: #e6e6e6;
            border-radius: 50%;
            padding: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            img {
              width: 35px;
              height: 35px;
            }
          }
        }
        h3 {
          color: #e6e6e6;
          font-family: var(--sub-font);
          font-size: 15px;
          text-align: center;
        }
      }
    }
    h1 {
      color: #ffffff;
      font-family: var(--main-font);
      margin-bottom: 50px;
      font-size: 35px;
    }

    img {
      width: 200px;
    }
  }
  @media (max-width: 1000px) {
    .column h1 {
      font-size: 25px;
    }
    .column img {
      width: 170px;
    }
  }
  @media (max-width: 890px) {
    flex-direction: column;
    .column {
      min-height: auto;
      padding: 20px 0 0;

      h1 {
        margin: 0;
        font-size: 35px;
      }
      &:nth-child(1) {
        img {
          display: none;
        }
      }
      &:nth-child(2) {
        display: none;
      }
    }
  }
  @media (max-width: 890px) {
    .column:nth-child(3) .card-sec {
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(180px, 0.5fr));
      grid-template-rows: initial;
      grid-template-areas:
        "card2"
        "card3"
        "card1"
        "card4"
        "card5"
        "card7"
        "card6";
      justify-content: center;
    }
  }
  @media (max-width: 210px) {
    .column:nth-child(3) .card-sec {
      grid-template-columns: repeat(auto-fit, minmax(130px, 0.5fr));
    }
  }
`;
