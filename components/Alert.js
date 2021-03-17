import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function Alert({ setisEmail, info, isEmail }) {
  if (setisEmail) {
    setTimeout(() => {
      setisEmail(false);
    }, 4000);
  }

  const alert = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duraion: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duraion: 1,
      },
    },
  };

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {isEmail && (
          <Alerts variants={alert} initial="hidden" animate="show" exit="exit">
            <div className="alert_main">
              <div className="icon">
                <img src="/img/svg/alertemail.svg" alt="" />
              </div>
              <h1>{info.title}</h1>
              <p>{info.msg}</p>
            </div>
          </Alerts>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Alert;

const Alerts = styled(motion.div)`
  width: 30vw;
  overflow: hidden;
  position: absolute;
  top: 12%;
  left: 50%;
  border: 1px solid #777;
  padding: 10px 5px;
  background-color: #fffffff0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -20%);
  z-index: 5;

  .alert_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: var(--main-font);
  }
  .icon {
    width: 50px;
    height: 50px;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 30px;
      animation: rotate 1s linear;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  h1 {
    font-size: 22px;
    color: #2039cc;
  }
  p {
    margin-top: 5px;
    font-size: 15px;
    color: #777;
  }
`;
