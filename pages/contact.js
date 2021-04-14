import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import Meta from "../components/Meta";
import emailjs from "emailjs-com";
import {
  buttonAnim1,
  formanimation,
  mainIcon,
  pageAnimation,
  paragraphAni,
  stagger,
  titleAnim,
} from "../components/animation";
import Alert from "../components/Alert";

function Contact() {
  const [isEmail, setisEmail] = useState(false);
  const [info, setinfo] = useState({ title: "", msg: "" });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wjqe98f",
        "template_uy4ybdd",
        e.target,
        "user_zI16cRTRxHRYTsWz9OX5Z"
      )
      .then(
        (result) => {
          setisEmail(true);
          setinfo({ title: "Thank You", msg: "Your Message Has Been Sent" });
          console.log(result.text);
        },
        (error) => {
          setisEmail(true);
          setinfo({
            title: "Can Not Send Email",
            msg: "Please Try Again",
          });
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/*meata */}
      <Meta title="Contact" />

      {isEmail ? (
        <Alert setisEmail={setisEmail} info={info} isEmail={isEmail} />
      ) : (
        ""
      )}

      <Boxes className="box">
        <Main>
          <Row1>
            <div className="column">
              <div className="heimage">
                <motion.img
                  variants={mainIcon}
                  src="/img/svg/Getting Coffee.svg"
                  alt=""
                />
              </div>
            </div>
            <motion.div variants={stagger} className="column">
              <motion.h1 variants={titleAnim}>
                What Can We Build For You?
              </motion.h1>
              <motion.h2 variants={titleAnim}>Drop A Message</motion.h2>
              <form onSubmit={sendEmail}>
                <motion.input
                  variants={formanimation}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <motion.input
                  variants={formanimation}
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                />
                <motion.textarea
                  variants={formanimation}
                  name="message"
                  id="msg"
                  placeholder="Message"
                  required
                ></motion.textarea>

                <motion.button variants={buttonAnim1}>
                  Send Message
                </motion.button>
              </form>
              <div className="fl_row">
                <motion.h3 variants={paragraphAni}>Follow Us</motion.h3>
                <div className="scl">
                  <motion.div variants={paragraphAni} className="col">
                    <a href="#">
                      <img src="/img/svg/facebook-f-brands.svg" alt="" />
                    </a>
                  </motion.div>
                  <motion.div variants={paragraphAni} className="col">
                    <a href="#">
                      <img src="/img/svg/twitter-brands.svg" alt="" />
                    </a>
                  </motion.div>
                  <motion.div variants={paragraphAni} className="col">
                    <a href="#">
                      <img src="/img/svg/github-brands.svg" alt="" />
                    </a>
                  </motion.div>
                  <motion.div variants={paragraphAni} className="col">
                    <a href="#">
                      <img src="/img/svg/whatsapp-brands.svg" alt="" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Row1>
        </Main>
      </Boxes>
      <Row2>
        <motion.div variants={paragraphAni} className="column">
          <div className="circl">
            <img src="/img/svg/at.svg" alt="" />
          </div>
          <h2>ondevlanka@gmail.com</h2>
        </motion.div>
        <motion.div variants={paragraphAni} className="column">
          <div className="circl">
            <img src="/img/svg/pin.svg" alt="" />
          </div>
          <h2>|| Sri Lanka ||</h2>
        </motion.div>
        <motion.div variants={paragraphAni} className="column">
          <div className="circl">
            <img src="/img/svg/phone.svg" alt="" />
          </div>
          <div className="cont">
            <h2>071 010 1640</h2>
            <h2>076 859 7090</h2>
          </div>
        </motion.div>
      </Row2>
    </motion.div>
  );
}
export default Contact;

const Boxes = styled.div`
  position: relative;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  @media (max-width: 857px) {
    padding: 150px 0 100px;
  }
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
  @media (max-width: 857px) {
    .column form {
      width: 100%;
    }
  }
  @media (max-width: 595px) {
    flex-wrap: wrap;
    flex-direction: column;
    .column:nth-child(1) {
      order: 2;
      margin-top: 45px;
      .heimage {
        text-align: center;
      }
      img {
        width: 70%;
      }
    }
    .column:nth-child(2) {
      order: 1;
    }
  }
  @media (max-width: 239px) {
    .column {
      h1 {
        font-size: 25px;
      }
      h2 {
        font-size: 20px;
      }
      .fl_row {
        flex-wrap: wrap;
      }
    }
    .column:nth-child(1) {
      display: none;
    }
  }
`;
const Row2 = styled.div`
  max-width: 1200px;
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
  @media (max-width: 1200px) {
    justify-content: space-around;
    flex-wrap: wrap;

    .column {
      margin-bottom: 15px;
    }
  }
  @media (max-width: 330px) {
    .column {
      flex-direction: column;
      flex-basis: 200px;
      .circl {
        flex: initial;
        width: 35px;
        height: 35px;
      }
      h2 {
        font-size: 16px;
        word-break: break-all;
      }
    }
  }
`;
