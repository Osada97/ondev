import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {
  animateList,
  cardFade,
  fade,
  paragraphAni,
  stagger,
} from "./animation";
import useScroll from "./useScroll";

function AboutSection() {
  const [element, controls] = useScroll();

  return (
    <div>
      <Section>
        <div className="curve">
          <img src="/img/s-curve-b-d.svg" alt="" />
        </div>
        <motion.div className="main" ref={element} animate={controls}>
          <div className="column">
            <motion.img variants={fade} src="/img/svg/team.svg" alt="" />
          </div>
          <div className="column">
            <motion.h1 variants={fade}>
              <span>ONdev</span> Vision
            </motion.h1>
            <motion.p variants={paragraphAni}>
              Prioritize sustainability in the fields of business, digital
              marketing, ICT and technological solutions through the advancement
              of virtual literacy and capabilities
            </motion.p>
            <motion.div variants={stagger} className="card-row">
              <motion.div variants={cardFade} className="card">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="drafting-compass"
                  className="svg-inline--fa fa-drafting-compass fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M457.01 344.42c-25.05 20.33-52.63 37.18-82.54 49.05l54.38 94.19 53.95 23.04c9.81 4.19 20.89-2.21 22.17-12.8l7.02-58.25-54.98-95.23zm42.49-94.56c4.86-7.67 1.89-17.99-6.05-22.39l-28.07-15.57c-7.48-4.15-16.61-1.46-21.26 5.72C403.01 281.15 332.25 320 256 320c-23.93 0-47.23-4.25-69.41-11.53l67.36-116.68c.7.02 1.34.21 2.04.21s1.35-.19 2.04-.21l51.09 88.5c31.23-8.96 59.56-25.75 82.61-48.92l-51.79-89.71C347.39 128.03 352 112.63 352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96c0 16.63 4.61 32.03 12.05 45.66l-68.3 118.31c-12.55-11.61-23.96-24.59-33.68-39-4.79-7.1-13.97-9.62-21.38-5.33l-27.75 16.07c-7.85 4.54-10.63 14.9-5.64 22.47 15.57 23.64 34.69 44.21 55.98 62.02L0 439.66l7.02 58.25c1.28 10.59 12.36 16.99 22.17 12.8l53.95-23.04 70.8-122.63C186.13 377.28 220.62 384 256 384c99.05 0 190.88-51.01 243.5-134.14zM256 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32z"></path>
                </svg>
                <h3>Unique Design</h3>
              </motion.div>
              <motion.div variants={cardFade} className="card">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="tv"
                  className="svg-inline--fa fa-tv fa-w-20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"></path>
                </svg>
                <h3>Sustainable systems</h3>
              </motion.div>
              <motion.div variants={cardFade} className="card">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="microchip"
                  className="svg-inline--fa fa-microchip fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z"></path>
                </svg>
                <h3>Best technology</h3>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

export default AboutSection;

const Section = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 150px 0;

  .curve {
    position: absolute;
    top: 0;
    left: 0;
    animation: curving 2s linear infinite alternate;
  }

  @keyframes curving {
    0% {
      left: 0;
    }
    100% {
      left: -50px;
    }
  }

  .main {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    .column {
      flex: 0.5;
      display: flex;
      justify-content: Center;
      align-items: flex-start;
      flex-direction: column;
      &:nth-child(1) {
        img {
          width: 70%;
          animation: shake 2s linear infinite alternate;
        }
      }
      @keyframes shake {
        0% {
          transform: translateY(0px) scale(1);
        }
        100% {
          transform: translateY(15px) scale(1.01);
        }
      }

      &:nth-child(2) {
        flex: 0.4;
        h1 {
          font-size: 55px;
          font-family: var(--main-font);
          font-weight: normal;
          margin-bottom: 25px;
          span {
            color: #3499cc;
          }
        }
        p {
          font-family: var(--sub-font);
          font-size: 18px;
          font-weight: bold;
          line-height: 23px;
          margin-bottom: 25px;
        }
        ul {
          font-family: var(--sub-font);
          list-style-position: inside;
          li {
            margin-bottom: 13px;
            font-weight: bold;
            font-size: 17px;
          }
        }
        .card-row {
          width: 100%;
          margin: 25px 0 0;
          display: flex;
          justify-content: space-between;
          .card {
            flex-basis: 150px;
            background-color: #48484a;
            padding: 20px 8px;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            svg {
              width: 40px;
              height: 40px;
              fill: #ffffff;
            }

            h3 {
              color: #ffffff;
              font-family: var(--sub-font);
              font-size: 15px;
              margin-top: 18px;
              font-weight: normal;
              text-align: center;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .curve {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .main .column:nth-child(2) {
      h1 {
        font-size: 35px;
      }
      p {
        font-size: 15px;
      }
      ul li {
        font-size: 15px;
      }
      .card-row .card {
        margin: 0px 3px;
      }
    }
  }
  @media (max-width: 1100px) {
    .main .column:nth-child(1) {
      img {
        width: 90%;
      }
    }
  }
  @media (max-width: 950px) {
    .main {
      flex-wrap: wrap;
      flex-direction: column;
      .column:nth-child(1) {
        order: 2;
      }
      .column:nth-child(2) {
        order: 1;
        margin-bottom: 40px;
      }
    }
  }
  @media (max-width: 360px) {
    .main {
      flex-wrap: wrap;
      flex-direction: column;
      .column:nth-child(1) {
        order: 2;
      }
      .column:nth-child(2) {
        .card-row {
          display: none;
        }
      }
    }
  }
`;
