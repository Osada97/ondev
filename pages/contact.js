import Head from "next/head";
import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <div>
      <Head>
        <title>OnDev Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Boxes className="box">
        <Main>
          <Row1>
            <div className="column">
              <div className="heimage">
                <img src="/img/svg/Getting Coffee.svg" alt="" />
              </div>
            </div>
            <div className="column">
              <h1>What Can We Build For You?</h1>
              <h2>Drop A Message</h2>
              <form>
                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="Email" placeholder="Email" />
                <textarea
                  name="message"
                  id="msg"
                  placeholder="Message"
                ></textarea>

                <button>Send Message</button>
              </form>
              <div className="fl_row">
                <h3>Follow Us</h3>
                <div className="scl">
                  <div className="col">
                    <a href="#">
                      <img src="/img/svg/facebook-f-brands.svg" alt="" />
                    </a>
                  </div>
                  <div className="col">
                    <a href="#">
                      <img src="/img/svg/twitter-brands.svg" alt="" />
                    </a>
                  </div>
                  <div className="col">
                    <a href="#">
                      <img src="/img/svg/github-brands.svg" alt="" />
                    </a>
                  </div>
                  <div className="col">
                    <a href="#">
                      <img src="/img/svg/whatsapp-brands.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Row1>
        </Main>
      </Boxes>
      <Row2>
        <div className="column">
          <div className="circl">
            <img src="/img/svg/at.svg" alt="" />
          </div>
          <h2>ondelanka@gmail.com</h2>
        </div>
        <div className="column">
          <div className="circl">
            <img src="/img/svg/pin.svg" alt="" />
          </div>
          <h2>ondelanka@gmail.com</h2>
        </div>
        <div className="column">
          <div className="circl">
            <img src="/img/svg/phone.svg" alt="" />
          </div>
          <h2>055-xxxxxxx</h2>
        </div>
      </Row2>
    </div>
  );
}
export default Contact;

const Boxes = styled.div`
  position: relative;
  min-height: 95vh;
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
    }
    h1 {
      font-family: var(--main-font);
      font-weight: 500;
      font-size: 35px;
      margin-bottom: 15px;
    }
    h2 {
      font-family: var(--main-font);
      font-weight: 500;
      font-size: 25px;
    }

    form {
      width: 75%;
      margin-top: 30px;
      input,
      textarea {
        display: block;
        width: 100%;
        padding: 14px 5px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: 1px solid #2039cc;
        outline: none;
        font-size: 16px;
        color: #2039cc;
        font-weight: normal;
      }
      textarea {
        height: 120px;
      }
      button {
        width: 100%;
        padding: 11px;
        background-color: #111e6c;
        color: #fff;
        font-size: 16px;
        outline: none;
        cursor: pointer;
      }
    }
    .fl_row {
      margin-top: 30px;
      width: 75%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--main-font);
      h3 {
        color: #192da1;
        font-size: 20px;
        flex: 0.3;
      }
      .scl {
        flex: 0.7;
        display: flex;
        justify-content: space-between;
        .col {
          width: 30px;
          height: 30px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .heimage {
      img {
        width: 80%;
      }
    }
  }
`;
const Row2 = styled.div`
  width: 1200px;
  margin: 0 auto 80px;
  display: flex;
  justify-content: space-between;

  .column {
    font-family: var(--main-font);
    flex-basis: 350px;
    border: 2px solid #e4e4e4;
    color: #192da1;
    padding: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 110px;
    border-radius: 3px;
    transition: box-shadow 0.5s ease;

    &:hover {
      box-shadow: 0px 0px 12px 3px #e4e4e4;
    }

    .circl {
      flex: 0.2;
      width: 60px;
      height: 60px;
      background-color: #48484a;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 8px;

      img {
        width: 40%;
        height: 40%;
      }
    }
    h2 {
      flex: 0.8;
      font-size: 18px;
      font-weight: 500;
      overflow-wrap: break-word;
      text-align: center;
    }
  }
`;
