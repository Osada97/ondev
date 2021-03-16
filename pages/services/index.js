import { motion } from "framer-motion";
import React from "react";
import { Link as Ln } from "react-scroll";
import styled from "styled-components";
import ContactSmallSection from "../../components/ContactSmallSection";
import Meta from "../../components/meta";
import ServicesSection from "../../components/ServicesSection";
import {
  mainIcon,
  pageAnimation,
  paragraphAni,
  stagger,
  titleAnim,
} from "../animation";

export default function services() {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      {/*meata */}
      <Meta title="Services" />

      <Mainherose>
        <div className="main">
          <motion.div variants={stagger} className="column">
            <motion.h1 variants={titleAnim}>Our Services</motion.h1>
            <motion.p variants={paragraphAni}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum d
            </motion.p>
          </motion.div>
          <div className="column">
            <motion.img
              variants={mainIcon}
              src="/img/svg/services.svg"
              alt=""
            />
          </div>
        </div>
        <div className="wave">
          <img src="/img/s-curve-b-u.svg" alt="" />
        </div>
      </Mainherose>
      <Rowmid>
        <div className="main">
          <Ln to="bd" smooth="true" duration={1500}>
            <div className="col">
              <img src="/img/svg/database-solid.svg" alt="" />
              <h3>
                <span>Backend</span> Web
              </h3>
              <p>Development</p>
            </div>
          </Ln>
          <Ln to="fd" smooth="true" duration={1500}>
            <div className="col">
              <img src="/img/svg/website.svg" alt="" />
              <h3>
                <span>Frontend</span> Web
              </h3>
              <p>Development</p>
            </div>
          </Ln>
          <Ln to="wp" smooth="true" duration={1500}>
            <div className="col">
              <img src="/img/svg/wordpress-simple-brands.svg" alt="" />
              <h3>
                <span>WordPress</span> Web
              </h3>
              <p>Development</p>
            </div>
          </Ln>
          <Ln to="dv" smooth="true" duration={1500}>
            <div className="col">
              <img src="/img/svg/mobile-alt-solid.svg" alt="" />
              <h3>
                <span>App</span> App
              </h3>
              <p>Development</p>
            </div>
          </Ln>
        </div>
      </Rowmid>
      <ServicesSection />
      <ContactSmallSection />
    </motion.div>
  );
}
const Mainherose = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  .wave {
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 50%;
    img {
      width: 100%;
    }
  }
  .main {
    width: 80%;
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
        color: #48484a;
        font-family: var(--main-font);
        font-size: 52px;
        font-weight: normal;
        margin-bottom: 23px;
      }
      h2 {
        color: #48484a;
        font-family: var(--main-font);
        font-weight: normal;
        font-size: 30px;
        margin-bottom: 23px;
      }
      p {
        font-family: var(--sub-font);
        color: #48484a;
        font-size: 17px;
      }
      img {
        width: 65%;
      }
    }
  }
  @media (max-width: 900px) {
    .main {
      .column {
        img {
          width: 80%;
        }
      }
    }
  }
  @media (max-width: 627px) {
    .main {
      flex-direction: column;
      .column {
        text-align: center;
        margin-bottom: 45px;
        h1 {
          font-size: 42px;
        }
        img {
          width: 50%;
        }
      }
    }
  }
  @media (max-width: 297px) {
    .main {
      width: 90%;
      padding: 120px 0;
      .column {
        h1 {
          font-size: 32px;
        }
        p {
          font-size: 16px;
        }
        img {
          width: 80%;
        }
      }
    }
  }
`;
const Rowmid = styled.div`
  width: 100%;
  background-color: #48484a;
  padding: 45px 0;
  .main {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .col {
      text-align: center;
      cursor: pointer;

      &:hover img {
        transform: scaleX(-1);
      }
      img {
        width: 45px;
        height: 45px;
        transition: transform 0.8s ease;
      }
      h3 {
        margin-top: 12px;
        color: #e6e6e6;
        font-family: var(--sub-font);
        font-size: 17px;
        letter-spacing: 1px;
        span {
          color: #3499cc;
        }
      }
      p {
        font-family: var(--sub-font);
        letter-spacing: 1px;
        color: #e6e6e6;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 1200px) {
    .main {
      justify-content: space-around;
    }
  }
  @media (max-width: 936px) {
    .main {
      flex-wrap: wrap;
      .col {
        margin-bottom: 12px;
      }
    }
  }
`;
