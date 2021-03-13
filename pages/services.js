import React from "react";
import styled from "styled-components";
import ContactSmallSection from "../components/ContactSmallSection";
import ServicesSection from "../components/ServicesSection";

export default function services() {
  return (
    <div>
      <Mainherose>
        <div className="main">
          <div className="column">
            <h1>Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum d
            </p>
          </div>
          <div className="column">
            <img src="/img/svg/services.svg" alt="" />
          </div>
        </div>
        <div className="wave">
          <img src="/img/s-curve-b-u.svg" alt="" />
        </div>
      </Mainherose>
      <Rowmid>
        <div className="main">
          <div className="col">
            <img src="/img/svg/database-solid.svg" alt="" />
            <h3>
              <span>Backend</span> Web
            </h3>
            <p>Development</p>
          </div>
          <div className="col">
            <img src="/img/svg/website.svg" alt="" />
            <h3>
              <span>Frontend</span> Web
            </h3>
            <p>Development</p>
          </div>
          <div className="col">
            <img src="/img/svg/wordpress-simple-brands.svg" alt="" />
            <h3>
              <span>WordPress</span> Web
            </h3>
            <p>Development</p>
          </div>
          <div className="col">
            <img src="/img/svg/mobile-alt-solid.svg" alt="" />
            <h3>
              <span>App</span> App
            </h3>
            <p>Development</p>
          </div>
        </div>
      </Rowmid>
      <ServicesSection />
      <ContactSmallSection />
    </div>
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
        width: 55%;
      }
    }
  }
`;
const Rowmid = styled.div`
  width: 100%;
  background-color: #48484a;
  padding: 45px 0;
  .main {
    width: 1200px;
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
`;
