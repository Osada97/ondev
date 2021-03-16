import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { cardFade, fade, paragraphAni, stagger } from "../pages/animation";
import useScroll from "./useScroll";

function AboutSectionTh() {
  const [element, controls] = useScroll();
  return (
    <div>
      <SectionTh>
        <motion.div className="main" ref={element} animate={controls}>
          <div className="column">
            <img src="/img/svg/values.svg" alt="" />
          </div>
          <motion.div variants={stagger} className="column">
            <motion.h1 variants={fade}>
              <span>OnDev</span> Values
            </motion.h1>
            <motion.p variants={paragraphAni}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dLorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            </motion.p>
            <div className="card-row">
              <motion.div variants={cardFade} className="card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45.997"
                  height="55.659"
                  viewBox="0 0 45.997 55.659"
                >
                  <defs></defs>
                  <path
                    className="a"
                    d="M85.1,119.715H64.371a6.274,6.274,0,1,0-9.465,0H49.956a5.43,5.43,0,0,0-5.424,5.424v6.4a1.085,1.085,0,1,0,2.17,0v-6.4a3.258,3.258,0,0,1,3.254-3.255H80.332a3.258,3.258,0,0,1,3.255,3.255V131H72.3a5.424,5.424,0,1,0,0,10.848H83.586V147.7a3.258,3.258,0,0,1-3.255,3.255H49.956A3.258,3.258,0,0,1,46.7,147.7v-6.409a1.085,1.085,0,0,0-2.17,0V147.7a5.43,5.43,0,0,0,5.424,5.424H85.1a5.43,5.43,0,0,0,5.424-5.424V125.139A5.43,5.43,0,0,0,85.1,119.715ZM59.638,111.5a4.1,4.1,0,1,1-4.1,4.1A4.109,4.109,0,0,1,59.638,111.5Zm25.03,10.385H85.1a3.258,3.258,0,0,1,3.254,3.255V131h-2.6v-5.858A5.4,5.4,0,0,0,84.668,121.884ZM69.049,136.421a3.258,3.258,0,0,1,3.255-3.255H88.359v6.509H72.3A3.258,3.258,0,0,1,69.049,136.421ZM85.1,150.958h-.437a5.4,5.4,0,0,0,1.088-3.255v-5.858h2.6V147.7A3.258,3.258,0,0,1,85.1,150.958Z"
                    transform="translate(-44.532 -97.469)"
                  />
                  <path
                    className="a"
                    d="M289.057,349.062a1.085,1.085,0,1,0,.767.318A1.094,1.094,0,0,0,289.057,349.062Z"
                    transform="translate(-261.563 -311.195)"
                  />
                  <path
                    className="a"
                    d="M277.725,34.544a6.274,6.274,0,1,0-6.274-6.274A6.281,6.281,0,0,0,277.725,34.544Zm0-10.378a4.1,4.1,0,1,1-4.1,4.1A4.109,4.109,0,0,1,277.725,24.166Z"
                    transform="translate(-246.834 -19.61)"
                  />
                  <path
                    className="a"
                    d="M222.7,10.694a1.085,1.085,0,0,0,1.085-1.085V1.085a1.085,1.085,0,1,0-2.17,0V9.61A1.085,1.085,0,0,0,222.7,10.694Z"
                    transform="translate(-202.403)"
                  />
                  <path
                    className="a"
                    d="M174.7,6.943a1.085,1.085,0,0,0,1.085-1.085V1.085a1.085,1.085,0,0,0-2.17,0V5.858A1.085,1.085,0,0,0,174.7,6.943Z"
                    transform="translate(-159.61)"
                  />
                  <path
                    className="a"
                    d="M45.617,351.232a1.085,1.085,0,1,0-.767-.318A1.093,1.093,0,0,0,45.617,351.232Z"
                    transform="translate(-44.532 -311.195)"
                  />
                </svg>
                <h3>Unique Design</h3>
              </motion.div>
              <motion.div variants={cardFade} className="card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45.997"
                  height="55.659"
                  viewBox="0 0 45.997 55.659"
                >
                  <defs></defs>
                  <path
                    className="a"
                    d="M85.1,119.715H64.371a6.274,6.274,0,1,0-9.465,0H49.956a5.43,5.43,0,0,0-5.424,5.424v6.4a1.085,1.085,0,1,0,2.17,0v-6.4a3.258,3.258,0,0,1,3.254-3.255H80.332a3.258,3.258,0,0,1,3.255,3.255V131H72.3a5.424,5.424,0,1,0,0,10.848H83.586V147.7a3.258,3.258,0,0,1-3.255,3.255H49.956A3.258,3.258,0,0,1,46.7,147.7v-6.409a1.085,1.085,0,0,0-2.17,0V147.7a5.43,5.43,0,0,0,5.424,5.424H85.1a5.43,5.43,0,0,0,5.424-5.424V125.139A5.43,5.43,0,0,0,85.1,119.715ZM59.638,111.5a4.1,4.1,0,1,1-4.1,4.1A4.109,4.109,0,0,1,59.638,111.5Zm25.03,10.385H85.1a3.258,3.258,0,0,1,3.254,3.255V131h-2.6v-5.858A5.4,5.4,0,0,0,84.668,121.884ZM69.049,136.421a3.258,3.258,0,0,1,3.255-3.255H88.359v6.509H72.3A3.258,3.258,0,0,1,69.049,136.421ZM85.1,150.958h-.437a5.4,5.4,0,0,0,1.088-3.255v-5.858h2.6V147.7A3.258,3.258,0,0,1,85.1,150.958Z"
                    transform="translate(-44.532 -97.469)"
                  />
                  <path
                    className="a"
                    d="M289.057,349.062a1.085,1.085,0,1,0,.767.318A1.094,1.094,0,0,0,289.057,349.062Z"
                    transform="translate(-261.563 -311.195)"
                  />
                  <path
                    className="a"
                    d="M277.725,34.544a6.274,6.274,0,1,0-6.274-6.274A6.281,6.281,0,0,0,277.725,34.544Zm0-10.378a4.1,4.1,0,1,1-4.1,4.1A4.109,4.109,0,0,1,277.725,24.166Z"
                    transform="translate(-246.834 -19.61)"
                  />
                  <path
                    className="a"
                    d="M222.7,10.694a1.085,1.085,0,0,0,1.085-1.085V1.085a1.085,1.085,0,1,0-2.17,0V9.61A1.085,1.085,0,0,0,222.7,10.694Z"
                    transform="translate(-202.403)"
                  />
                  <path
                    className="a"
                    d="M174.7,6.943a1.085,1.085,0,0,0,1.085-1.085V1.085a1.085,1.085,0,0,0-2.17,0V5.858A1.085,1.085,0,0,0,174.7,6.943Z"
                    transform="translate(-159.61)"
                  />
                  <path
                    className="a"
                    d="M45.617,351.232a1.085,1.085,0,1,0-.767-.318A1.093,1.093,0,0,0,45.617,351.232Z"
                    transform="translate(-44.532 -311.195)"
                  />
                </svg>
                <h3>Unique Design</h3>
              </motion.div>
              <motion.div variants={cardFade} className="card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45.997"
                  height="55.659"
                  viewBox="0 0 45.997 55.659"
                >
                  <defs></defs>
                  <path
                    className="a"
                    d="M85.1,119.715H64.371a6.274,6.274,0,1,0-9.465,0H49.956a5.43,5.43,0,0,0-5.424,5.424v6.4a1.085,1.085,0,1,0,2.17,0v-6.4a3.258,3.258,0,0,1,3.254-3.255H80.332a3.258,3.258,0,0,1,3.255,3.255V131H72.3a5.424,5.424,0,1,0,0,10.848H83.586V147.7a3.258,3.258,0,0,1-3.255,3.255H49.956A3.258,3.258,0,0,1,46.7,147.7v-6.409a1.085,1.085,0,0,0-2.17,0V147.7a5.43,5.43,0,0,0,5.424,5.424H85.1a5.43,5.43,0,0,0,5.424-5.424V125.139A5.43,5.43,0,0,0,85.1,119.715ZM59.638,111.5a4.1,4.1,0,1,1-4.1,4.1A4.109,4.109,0,0,1,59.638,111.5Zm25.03,10.385H85.1a3.258,3.258,0,0,1,3.254,3.255V131h-2.6v-5.858A5.4,5.4,0,0,0,84.668,121.884ZM69.049,136.421a3.258,3.258,0,0,1,3.255-3.255H88.359v6.509H72.3A3.258,3.258,0,0,1,69.049,136.421ZM85.1,150.958h-.437a5.4,5.4,0,0,0,1.088-3.255v-5.858h2.6V147.7A3.258,3.258,0,0,1,85.1,150.958Z"
                    transform="translate(-44.532 -97.469)"
                  />
                  <path
                    className="a"
                    d="M289.057,349.062a1.085,1.085,0,1,0,.767.318A1.094,1.094,0,0,0,289.057,349.062Z"
                    transform="translate(-261.563 -311.195)"
                  />
                  <path
                    className="a"
                    d="M277.725,34.544a6.274,6.274,0,1,0-6.274-6.274A6.281,6.281,0,0,0,277.725,34.544Zm0-10.378a4.1,4.1,0,1,1-4.1,4.1A4.109,4.109,0,0,1,277.725,24.166Z"
                    transform="translate(-246.834 -19.61)"
                  />
                  <path
                    className="a"
                    d="M222.7,10.694a1.085,1.085,0,0,0,1.085-1.085V1.085a1.085,1.085,0,1,0-2.17,0V9.61A1.085,1.085,0,0,0,222.7,10.694Z"
                    transform="translate(-202.403)"
                  />
                  <path
                    className="a"
                    d="M174.7,6.943a1.085,1.085,0,0,0,1.085-1.085V1.085a1.085,1.085,0,0,0-2.17,0V5.858A1.085,1.085,0,0,0,174.7,6.943Z"
                    transform="translate(-159.61)"
                  />
                  <path
                    className="a"
                    d="M45.617,351.232a1.085,1.085,0,1,0-.767-.318A1.093,1.093,0,0,0,45.617,351.232Z"
                    transform="translate(-44.532 -311.195)"
                  />
                </svg>
                <h3>Unique Design</h3>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </SectionTh>
    </div>
  );
}

export default AboutSectionTh;

const SectionTh = styled(motion.div)`
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
              font-size: 16px;
              margin-top: 18px;
              font-weight: normal;
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
