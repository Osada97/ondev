import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import { scrollScale } from "./animation";
import useScroll from "./useScroll";

export default function WeBuild() {
  const [element, controls] = useScroll();

  return (
    <Build ref={element} animate={controls} initial="hidden">
      <div className="top">
        <motion.h1 variants={scrollScale}>We Build</motion.h1>
      </div>
      <motion.div variants={scrollScale} className="body">
        <div className="column">
          <img src="/img/svg/web.svg" alt="" />
          <div className="dl">
            <h2>Web</h2>
            <p>
              To manage and promote your business, having a website has become a
              must in today’s world. So, our duty is to create, well equipped
              single page static websites or complex web applications for you,
              that can perform well on the internet or intranet. So, we design
              and develop SEO friendly, flexible and user centric attractive
              websites according to your requirements.
            </p>
            <Link href="/mainservicesweb">
              <button>Explore More</button>
            </Link>
          </div>
        </div>
        <div className="column-mid">
          <img src="/img/svg/andLine.svg" alt="" />
        </div>
        <div className="column">
          <img src="/img/svg/App.svg" alt="" />
          <div className="dl">
            <h2>Mobile</h2>
            <p>
              In the 21st century, mobile devices lead the day today. So, we
              make sure your business attracts customers through their mobile,
              with our outstanding and reliable development, based on native and
              hybrid mobile applications.
            </p>
            <button>Explore More</button>
          </div>
        </div>
      </motion.div>
    </Build>
  );
}

const Build = styled(motion.div)`
  padding: 45px;
  max-width: 1400px;
  margin: 0 auto;
  .top {
    width: 100%;
    text-align: center;

    h1 {
      font-family: var(--main-font);
      font-size: 38px;
    }
  }

  .body {
    padding-top: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: Center;

    .column:first-child {
      img {
        width: 265px;
      }
    }
    .column {
      flex: 0.3;
      text-align: center;
      img {
        width: 300px;
      }
      .dl {
        padding: 15px 0;
      }
      .dl h2 {
        font-family: var(--main-font);
        font-size: 26px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .dl p {
        font-family: var(--sub-font);
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 30px;
      }
      .dl button {
        width: 160px;
        padding: 12px 0;
        background: #fff;
        border: 2px solid #2039cc;
        border-radius: 5px;
        box-shadow: 0px 0px 8px 1px #2039cc;
        outline: none;
        cursor: pointer;
        font-weight: bold;
        transition: 0.5s ease-in-out;

        &:hover {
          background: #2039cc;
          color: #fff;
        }
      }
    }

    .column-mid {
      flex: 0.1;
      text-align: center;
      img {
        width: 90px;
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 20px;
  }
  @media (max-width: 712px) {
    .body {
      flex-wrap: wrap;
      padding-top: 45px;
      .column {
        margin-bottom: 25px;
      }
      .column-mid {
        display: none;
      }
    }
  }
  @media (max-width: 334px) {
    .body {
      .column {
        img {
          width: 175px !important;
        }
        .dl {
          button {
            width: 120px;
          }
        }
      }
    }
  }
  @media (max-width: 200px) {
    padding: 10px 0;
    .body {
      .column {
        img {
          width: 130px !important;
        }
      }
    }
  }
`;
