import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { cardFade, fade, mainIcon, paragraphAni, stagger } from "./animation";
import useScroll from "./useScroll";

function AboutSection1() {
  const [element, controls] = useScroll();
  return (
    <div>
      <Sectionsecnd>
        <motion.div className="main" ref={element} animate={controls}>
          <motion.div className="column" variants={stagger}>
            <motion.h1 variants={fade}>
              <span>ONdev</span> Mission
            </motion.h1>
            <motion.p variants={paragraphAni}>
              To apply ICT to become a prior and globally recognized team which
              creates sustainable solutions to fulfil the needs and desires of
              the society.
            </motion.p>
            <div className="card-row">
              <motion.div variants={cardFade} className="card">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="users"
                  className="svg-inline--fa fa-users fa-w-20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                </svg>
                <h3>Friendly service</h3>
              </motion.div>
              <motion.div variants={cardFade} className="card">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="thumbs-up"
                  className="svg-inline--fa fa-thumbs-up fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path>
                </svg>
                <h3>Reliable Applications</h3>
              </motion.div>
              <motion.div variants={cardFade} className="card">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="wrench"
                  className="svg-inline--fa fa-wrench fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path>
                </svg>
                <h3>Updated solutions</h3>
              </motion.div>
            </div>
          </motion.div>
          <div className="column">
            <motion.img variants={mainIcon} src="/img/svg/mission.svg" alt="" />
          </div>
        </motion.div>
      </Sectionsecnd>
    </div>
  );
}

export default AboutSection1;

const Sectionsecnd = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 150px 0;
  background-color: #f8f8f8;

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
      &:nth-child(2) {
        align-items: flex-end;
        img {
          width: 65%;
          animation: shake 2s linear infinite alternate;
        }
      }

      &:nth-child(1) {
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
    .main .column:nth-child(1) {
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
    .main .column:nth-child(2) {
      img {
        width: 90%;
      }
    }
  }
  @media (max-width: 950px) {
    .main {
      flex-wrap: wrap;
      flex-direction: column;
      .column:nth-child(2) {
        order: 2;
      }
      .column:nth-child(1) {
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
      .column:nth-child(1) {
        .card-row {
          display: none;
        }
      }
    }
  }
`;
