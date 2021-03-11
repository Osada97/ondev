import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Fooot>
      <div className="cur">
        <img src="/img/footer-curve.svg" alt="" />
      </div>
      <Main>
        <div className="column">
          <img src="/img/MAIN LOGO 1.1.png" alt="" />
          <div className="dis">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor diam nonumy eirmod tempor
            </p>
          </div>
        </div>
        <div className="column">
          <h1>Contact</h1>
          <div className="dis">
            <h3>ondevlanka@gmail.com</h3>
            <h3>055-xxxxxxx</h3>
          </div>
          <div className="social">
            <div className="scol">
              <img src="/img/svg/facebook-f-brands.svg" alt="" />
            </div>
            <div className="scol">
              <img src="/img/svg/twitter-brands.svg" alt="" />
            </div>
            <div className="scol">
              <img src="/img/svg/github-brands.svg" alt="" />
            </div>
            <div className="scol">
              <img src="/img/svg/whatsapp-brands.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="column">
          <h1>Company</h1>
          <div className="dis">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Ondev Shop</li>
            </ul>
          </div>
        </div>
      </Main>
      <Sub>
        <h2>&copy; 2021 OnDev. All rights reserved</h2>
      </Sub>
    </Fooot>
  );
}

const Fooot = styled.div`
  position: relative;
  width: 100%;
  padding: 45px 0 0;
  background-color: #f5f5f5;

  .cur {
    position: absolute;
    top: -7px;
    left: 0;
    width: 100%;

    img {
      width: 100%;
    }
  }
`;
const Main = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .column {
    flex-basis: 300px;
    text-align: center;
    .social {
      width: 60%;
      margin: 25px auto 0;
      display: flex;
      justify-content: space-around;
      .scol {
        width: 25px;
        height: 25px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    img {
      width: 120px;
    }
    h1 {
      font-family: var(--main-font);
      font-size: 22px;
      font-weight: 700;
      color: #2039cc;
    }
    .dis {
      margin-top: 15px;
      font-family: var(--sub-font);
      color: #48484a;

      p {
        font-size: 15px;
      }
      h3 {
        margin-bottom: 10px;
        font-size: 17px;
        font-weight: lighter;
      }

      ul {
        list-style: none;
        li {
          margin-bottom: 5px;
          font-size: 16px;
          cursor: pointer;

          &:hover {
            color: #2039cc;
          }
        }
      }
    }
  }
`;
const Sub = styled.div`
  border-top: 1px solid #48484a;
  padding: 25px;
  text-align: center;
  font-family: var(--sub-font);
  h2 {
    font-size: 16px;
    letter-spacing: 0.8px;
  }
`;
