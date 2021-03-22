import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {
  buttonAnim,
  mainIcon,
  shadowIcon,
  stagger,
  titleAnim,
} from "./animation";

export default function Hero() {
  return (
    <Box className="box">
      <motion.div variants={shadowIcon} className="ovl">
        <img src="/img/MAIN LOGO 1.1.png" alt="" />
      </motion.div>
      <motion.div variants={stagger} className="text-section">
        <motion.h3 variants={titleAnim}>
          Welcome To <span>OnDev</span> Technology
        </motion.h3>
        <motion.h1 variants={titleAnim}>
          Let's Devolop a Great Product
        </motion.h1>
        <motion.button variants={buttonAnim}>Let's Talk</motion.button>
      </motion.div>
      <div className="dev-imge">
        <motion.img variants={mainIcon} src="/img/test.png" />
      </div>
      <div className="svg">
        <img src="/img/wave.svg" alt="" />
      </div>
    </Box>
  );
}

const Box = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  background-image: linear-gradient(
    215deg,
    #080e33 36%,
    #111e6c 85%,
    #192da1 100%
  );

  .ovl {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: rotateZ(336deg) translateY(-50%);
    opacity: 0.08;

    img {
      width: 750px;
    }
  }

  .text-section {
    flex: 0.4;
    font-family: "ubuntu", sans-serif;
    z-index: 0;

    h3 {
      color: #fff;
      font-size: 31px;
      font-weight: 400;
      margin-bottom: 10px;
      span {
        color: #3499cc;
      }
    }

    h1 {
      color: #fff;
      font-size: 68px;
      margin-bottom: 28px;
      letter-spacing: 1.3px;
    }
    button {
      width: 200px;
      padding: 12px 0;
      font-size: 22px;
      border-radius: 5px;
      border: 1px solid transparent;
      background-color: #47518b;
      color: #fff;
      letter-spacing: 1.2px;
      outline: none;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        box-shadow: 0px 0px 12px 3px #34408a;
      }
    }
  }
  .dev-imge {
    flex: 0.6;
    min-height: 85vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    overflow: hidden;
    img {
      width: 82%;
      animation: scale 3s linear alternate infinite 1.8s;
    }
  }
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.04);
    }
  }
  .svg {
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    width: 100%;

    img {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    .text-section {
      flex: 1;
    }
    .dev-imge {
      display: none;
    }
    .text-section {
      flex: 1;
      text-align: center;
      h1 {
        font-size: 48px;
      }
    }
  }
  @media (max-width: 770px) {
    .ovl {
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 560px) {
    padding: 0 20px;
    .text-section {
      width: 90%;
      flex: initial;
      text-align: center;
      h1 {
        font-size: 38px;
      }
      h3 {
        font-size: 21px;
      }
    }
  }
  @media (max-width: 320px) {
    button {
      width: 120px !important;
      font-size: 15px !important;
    }
  }
  @media (max-width: 220px) {
    .text-section {
      h1 {
        font-size: 25px;
      }
      h3 {
        font-size: 15px;
      }
      button {
        width: 100px !important;
        font-size: 13px !important;
      }
    }
  }
`;
