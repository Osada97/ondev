import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import ContactSmallSection from "../components/ContactSmallSection";
import Meta from "../components/meta";
import { pageAnimation } from "../components/animation";

export default function mainservicesweb() {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      {/*meata */}
      <Meta title="Web" />

      <Boxes className="box">
        <Main>
          <Row1>
            <div className="column">
              <div className="heimage">
                <img src="/img/svg/web.svg" alt="" />
              </div>
            </div>
            <div className="column">
              <h1>Web Development</h1>
              <p>
                As the user-facing part of a product, nailing the frontend is
                essential. We are building beautiful, responsive frontend
                interfaces. Our frontend development expertise enables our
                clients to differentiate themselves with digital products that
                are a delight to use
              </p>
            </div>
          </Row1>
        </Main>
      </Boxes>
      <Row2 className="row">
        <div className="maincol">
          <div className="column">
            <h1>Technology Focus</h1>
            <p>We focus on the most popular JavaScript frameworks: React</p>
          </div>
          <div className="column">
            <div className="col">
              <img src="/img/svg/html5.svg" alt="" />
            </div>
            <div className="col">
              <img src="/img/svg/css3.svg" alt="" />
            </div>
            <div className="col">
              <img src="/img/svg/js.svg" alt="" />
            </div>
            <div className="col">
              <img src="/img/svg/python.svg" alt="" />
            </div>
            <div className="col">
              <img src="/img/svg/php.svg" alt="" />
            </div>
          </div>
        </div>
      </Row2>
      <ContactSmallSection />
    </motion.div>
  );
}

const Boxes = styled.div`
  position: relative;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  width: 90%;
  margin: 0 auto;
  background: #fff;
`;
const Row1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  background: #fff;

  .column {
    flex: 0.5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    &:nth-child(2) {
      align-items: flex-start;

      h1 {
        font-family: var(--main-font);
        font-size: 45px;
        color: #3499cc;
        font-weight: normal;
      }
      p {
        font-family: var(--sub-font);
        font-size: 21px;
        margin-top: 18px;
        line-height: 35px;
      }
    }

    .heimage {
      img {
        width: 90%;
      }
    }
  }
  @media (max-width: 739px) {
    .column:nth-child(2) {
      h1 {
        font-size: 35px;
        word-break: break-all;
      }
      p {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 610px) {
    flex-direction: column;
    padding: 107px 0;
    .column:nth-child(2) {
      order: 1;
    }
    .column:nth-child(1) {
      order: 2;
      img {
        width: 70%;
      }
    }
  }
`;
const Row2 = styled.div`
  width: 100%;
  background-color: #48484a;
  padding: 75px 0;
  margin-bottom: 45px;
  .maincol {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .column {
      flex-basis: 500px;
      h1 {
        color: #ffffff;
        font-family: var(--main-font);
        font-weight: normal;
        font-size: 40px;
        margin-bottom: 10px;
      }
      p {
        color: #ffffff;
        font-family: var(--sub-font);
        font-size: 20px;
      }

      &:nth-child(2) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        img {
          width: 40px;
        }
      }
    }
  }
  @media (max-width: 544px) {
    .maincol {
      flex-wrap: wrap;
      padding: 5px;

      .column:nth-child(1) {
        margin-bottom: 25px;
        h1,
        p {
          word-break: break-all;
        }
      }
      .column:nth-child(2) {
        flex-wrap: wrap;
        .col {
          margin: 5px;
        }
      }
    }
  }
`;
