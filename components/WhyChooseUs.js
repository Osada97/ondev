import React from "react";
import styled from "styled-components";

export default function WhyChooseUs() {
  return (
    <WhyC>
      <div className="wave">
        <img src="/img/s-wave-w-d.svg" alt="" />
      </div>
      <div className="wave-mid">
        <img src="/img/svg/line-with-curve.svg" alt="" />
      </div>
      <Main>
        <Body className="body">
          <div className="column">
            <h1>Why Choose Us</h1>
            <img src="/img/svg/why.svg" alt="" />
          </div>
          <div className="column"></div>
          <div className="column">
            <div className="card-sec">
              <div className="card">
                <div className="icon">
                  <img src="/img/svg/vollet.svg" alt="" />
                </div>
                <h3>Highly Cost-Effective</h3>
              </div>
              <div className="card">
                <div className="icon">
                  <img src="/img/svg/vollet.svg" alt="" />
                </div>
                <h3>Highly Cost-Effective</h3>
              </div>
              <div className="card">
                <div className="icon">
                  <img src="/img/svg/vollet.svg" alt="" />
                </div>
                <h3>Highly Cost-Effective</h3>
              </div>
              <div className="card">
                <div className="icon">
                  <img src="/img/svg/vollet.svg" alt="" />
                </div>
                <h3>Highly Cost-Effective</h3>
              </div>
              <div className="card">
                <div className="icon">
                  <img src="/img/svg/vollet.svg" alt="" />
                </div>
                <h3>Highly Cost-Effective</h3>
              </div>
              <div className="card">
                <div className="icon">
                  <img src="/img/svg/vollet.svg" alt="" />
                </div>
                <h3>Highly Cost-Effective</h3>
              </div>
              <div className="card">
                <div className="icon">
                  <img src="/img/svg/vollet.svg" alt="" />
                </div>
                <h3>Highly Cost-Effective</h3>
              </div>
            </div>
          </div>
        </Body>
      </Main>
    </WhyC>
  );
}

const WhyC = styled.div`
  background-color: #48484a;
  position: relative;
  margin-top: 55px;

  .wave {
    position: absolute;
    top: 0;
    left: 0;

    img {
      max-width: 80%;
    }
  }
  .wave-mid {
    position: absolute;
    top: 0;
    left: 36%;
    transform: translateX(-35%);
    height: 100%;

    img {
      height: 100%;
    }
  }
`;

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto 25px;
`;
const Body = styled.div`
  display: flex;
  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 90vh;

    &:nth-child(1) {
      flex: 0.3;
    }
    &:nth-child(2) {
      flex: 0.1;
    }
    &:nth-child(3) {
      flex: 0.6;
      .card-sec {
        display: grid;
        grid-template-columns: repeat(3, 180px);
        grid-template-rows: repeat(6, 50px);
        grid-template-areas:
          ". card2 ."
          "card1 card2 card3"
          "card1 card4 card3"
          "card5 card4 card6"
          "card5 card7 card6"
          ". card7 .";
        grid-column-gap: 45px;
        grid-row-gap: 45px;
        justify-items: center;
        align-items: center;

        .card {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border: 2px solid #fefefe;
          border-radius: 8px;
          overflow: hidden;
          background-color: #ffffff05;

          &::after {
            content: "";
            width: 162%;
            height: 146%;
            position: absolute;
            top: 0;
            left: -7px;
            background-color: transparent;
            border-radius: 100px;
            transform: rotateZ(6deg);
            border-left: 2px solid #b5b5b578;
          }

          &:nth-child(1) {
            grid-area: card1;
          }
          &:nth-child(2) {
            grid-area: card2;
          }
          &:nth-child(3) {
            grid-area: card3;
          }
          &:nth-child(4) {
            grid-area: card4;
          }
          &:nth-child(5) {
            grid-area: card5;
          }
          &:nth-child(6) {
            grid-area: card6;
          }
          &:nth-child(7) {
            grid-area: card7;
          }

          .icon {
            width: 60px;
            height: 60px;
            background-color: #e6e6e6;
            border-radius: 50%;
            padding: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;

            img {
              width: 35px;
              height: 35px;
            }
          }
        }
        h3 {
          color: #e6e6e6;
          font-family: var(--sub-font);
          font-size: 15px;
        }
      }
    }
    h1 {
      color: #ffffff;
      font-family: var(--main-font);
      margin-bottom: 50px;
      font-size: 35px;
    }

    img {
      width: 200px;
    }
  }
`;
