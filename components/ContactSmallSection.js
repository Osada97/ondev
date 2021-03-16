import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { buttonAnim1, fade, stagger, titleAnim } from "../pages/animation";
import useScroll from "./useScroll";

export default function ContactSmallSection() {
  const [element, controls] = useScroll();

  return (
    <Wrapper ref={element} animate={controls} variants={stagger}>
      <Main>
        <div className="sma">
          <div className="dis">
            <motion.h1 variants={titleAnim}>Have A Project In Mind?</motion.h1>
            <Link href="/contact">
              <motion.button variants={buttonAnim1}>Gets Started</motion.button>
            </Link>
          </div>
          <div className="img-rc">
            <motion.img
              variants={fade}
              src="/img/svg/rocket-phone.svg"
              alt=""
            />
          </div>
        </div>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
`;
const Main = styled.div`
  width: 100%;
  background: transparent linear-gradient(236deg, #0c154a, #0c154a, #111e6c);
  .sma {
    position: relative;
    max-width: 1200px;
    padding: 100px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .dis {
      display: flex;
      font-family: var(--main-font);
      h1 {
        font-weight: normal;
        color: #fff;
        margin-right: 50px;
      }
      button {
        background-color: #ffffff3b;
        border: 1px solid transparent;
        width: 160px;
        padding: 13px 0;
        border-radius: 5px;
        color: #ffffff;
        font-size: 17px;
        letter-spacing: 1px;
        cursor: pointer;
        transition: 0.5s ease-in-out 0.1s;

        &:hover {
          background-color: #ffffff5c;
        }
      }
    }
    .img-rc {
      position: absolute;
      top: -150px;
      right: 0;
      text-align: right;

      img {
        width: 75%;
      }
    }
  }

  @media (max-width: 936px) {
    .sma .img-rc img {
      width: 60%;
    }
  }
  @media (max-width: 936px) {
    .sma {
      justify-content: center;
      align-items: center;
      .img-rc {
        display: none;
      }
      .dis {
        h1 {
          margin: 0;
        }
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media (max-width: 223px) {
    .sma {
      padding: 50px 0;
      .dis {
        h1 {
          font-size: 20px;
        }
        button {
          margin-top: 5px;
          width: 120px;
        }
      }
    }
  }
`;
