import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { cardFade, fade, paragraphAni, stagger } from "./animation";
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
              <span>ONdev</span> Values
            </motion.h1>
            <motion.p variants={paragraphAni}>
              Enjoy the journey - Our team always has been given the freedom and
              they offer the friendship in every step of this journey, and
              always value and enjoy the interactions with every party of this
              climb
            </motion.p>
            <motion.p variants={paragraphAni}>
              Get the job done - Our sole purpose is to get the job you bring to
              us done, so that we can see you satisfied even more than you
              expected. So, we are always equipped with knowledge, skills and
              technology to bring your idea into reality.
            </motion.p>
            <motion.p variants={paragraphAni}>
              Focuses on a sustained future- Our duty is to see what we produce
              and create for you , is sustained in the future , and withstands ,
              not just for today but for many times ahead. And we always work
              hard to be fitted for sustainability which has become a globally
              trendy topic.
            </motion.p>
            <div className="card-row">
              <motion.div variants={cardFade} className="card">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="clipboard-list"
                  className="svg-inline--fa fa-clipboard-list fa-w-12"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path>
                </svg>
                <h3>Meeting deadlines</h3>
              </motion.div>
              <motion.div variants={cardFade} className="card">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="handshake"
                  className="svg-inline--fa fa-handshake fa-w-20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path>
                </svg>
                <h3>Customer responsiveness</h3>
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
                <h3>Worthy services</h3>
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
