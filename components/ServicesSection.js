import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <div>
      <Sectionfon>
        <div className="main">
          <div className="column">
            <img src="/img/svg/backend-dev.svg" alt="" />
          </div>
          <div className="column" id="bd">
            <h1>Backend Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum d
            </p>
            <Link href="/services/backend">Read More &#8594;</Link>

            <div className="card-row">
              <h3>Django Development</h3>
              <h3>Database Development</h3>
              <h3>App Development</h3>
              <h3>PHP Development</h3>
            </div>
          </div>
        </div>
      </Sectionfon>
      <Sectionback id="fd">
        <div className="main">
          <div className="column">
            <h1>Frontend Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum d
            </p>
            <Link href="/services/frontend">Read More &#8594;</Link>
            <div className="card-row">
              <h3>React Development</h3>
            </div>
          </div>
          <div className="column">
            <img src="/img/svg/frontend.svg" alt="" />
          </div>
        </div>
      </Sectionback>
      <Sectionfon id="wp">
        <div className="main">
          <div className="column">
            <img src="/img/svg/wpre.svg" alt="" />
          </div>
          <div className="column">
            <h1>WordPress Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum d
            </p>
            <Link href="/services/wp">Read More &#8594;</Link>
          </div>
        </div>
      </Sectionfon>
      <Sectionback id="dv">
        <div className="main">
          <div className="column">
            <h1>Mobile App Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum d
            </p>
            <Link href="/services/mobileapp">Read More &#8594;</Link>
            <div className="card-row">
              <h3>IOS Development</h3>
              <h3>Android Development</h3>
            </div>
          </div>
          <div className="column">
            <img src="/img/svg/mobile.svg" alt="" />
          </div>
        </div>
      </Sectionback>
    </div>
  );
}
const Sectionfon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 90px 0;

  .curve {
    position: absolute;
    top: 0;
    left: 0;
    animation: curving 2s linear infinite alternate;
  }

  @keyframes curving {
    0% {
      left: 0;
    }
    100% {
      left: -50px;
    }
  }

  .main {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    .column {
      flex: 0.5;
      display: flex;
      justify-content: Center;
      align-items: flex-start;
      flex-direction: column;
      &:nth-child(1) {
        img {
          width: 65%;
          animation: shake 2s linear infinite alternate;
        }
      }
      @keyframes shake {
        0% {
          transform: translateY(0px) scale(1);
        }
        100% {
          transform: translateY(15px) scale(1.01);
        }
      }

      &:nth-child(2) {
        flex: 0.4;
        h1 {
          font-size: 32px;
          font-family: var(--main-font);
          font-weight: normal;
          margin-bottom: 25px;
          color: #3499cc;
          span {
            color: #3499cc;
          }
        }
        p {
          font-family: var(--sub-font);
          font-size: 17px;
          font-weight: bold;
          line-height: 23px;
          margin-bottom: 20px;
        }
        a {
          font-family: var(--sub-font);
          text-decoration: none;
          color: #192da1;
          font-weight: 600;
          font-size: 16px;
        }
        .card-row {
          width: 100%;
          margin: 20px 0 0;

          h3 {
            background-color: #48484a;
            color: #e6e6e6;
            margin: 8px;
            min-width: 190px;
            font-family: var(--sub-font);
            font-size: 15px;
            padding: 12px;
            text-align: center;
            display: inline-block;
            border-radius: 5px;

            &:nth-child(odd) {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .main .column:nth-child(2) {
      flex: 0.5;
      .card-row h3 {
        min-width: 166px;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 918px) {
    .main .column:nth-child(1) {
      img {
        width: 85%;
      }
    }
  }
  @media (max-width: 810px) {
    .main .column:nth-child(2) {
      .card-row h3 {
        min-width: 150px;
        font-size: 13px;
      }
    }
  }
  @media (max-width: 750px) {
    .main .column:nth-child(2) {
      .card-row h3 {
        min-width: 137px;
        font-size: 13px;
      }
    }
  }
  @media (max-width: 720px) {
    .main {
      flex-direction: column;
      .column:nth-child(1) {
        align-items: center;
        img {
          width: 50%;
        }
      }
      .column:nth-child(2) {
        margin-top: 35px;
        .card-row h3 {
          min-width: 137px;
          font-size: 13px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .main {
      .column:nth-child(1) {
        img {
          width: 80%;
        }
      }
    }
  }
  @media (max-width: 342px) {
    .main .column:nth-child(2) {
      .card-row h3 {
        margin: 5px 0;
        display: block;
      }
    }
  }
  @media (max-width: 220px) {
    .main {
      .column:nth-child(1) {
        img {
          width: 100%;
        }
      }
      .column:nth-child(2) {
        .card-row h3 {
          min-width: initial;
          width: 95%;
        }
        h1 {
          font-size: 25px;
          word-break: break-all;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
`;
const Sectionback = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 0;
  background-color: #f8f8f8;
  .curve {
    position: absolute;
    top: 0;
    left: 0;
    animation: curving 2s linear infinite alternate;
  }

  @keyframes curving {
    0% {
      left: 0;
    }
    100% {
      left: -50px;
    }
  }

  .main {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    .column {
      flex: 0.5;
      display: flex;
      justify-content: Center;
      align-items: center;
      flex-direction: column;
      &:nth-child(2) {
        img {
          width: 65%;
          animation: shake 2s linear infinite alternate;
        }
      }
      @keyframes shake {
        0% {
          transform: translateY(0px) scale(1);
        }
        100% {
          transform: translateY(15px) scale(1.01);
        }
      }

      &:nth-child(1) {
        flex: 0.4;
        align-items: flex-start;
        h1 {
          font-size: 32px;
          font-family: var(--main-font);
          font-weight: normal;
          margin-bottom: 25px;
          color: #3499cc;
          span {
            color: #3499cc;
          }
        }
        p {
          font-family: var(--sub-font);
          font-size: 17px;
          font-weight: bold;
          line-height: 23px;
          margin-bottom: 20px;
        }
        a {
          font-family: var(--sub-font);
          text-decoration: none;
          color: #192da1;
          font-weight: 600;
          font-size: 16px;
        }
        .card-row {
          width: 100%;
          margin: 20px 0 0;

          h3 {
            background-color: #48484a;
            color: #e6e6e6;
            margin: 8px;
            min-width: 190px;
            font-family: var(--sub-font);
            font-size: 15px;
            padding: 12px;
            text-align: center;
            display: inline-block;
            border-radius: 5px;

            &:nth-child(odd) {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .main .column:nth-child(1) {
      flex: 0.5;
      .card-row h3 {
        min-width: 166px;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 918px) {
    .main .column:nth-child(2) {
      img {
        width: 85%;
      }
    }
  }
  @media (max-width: 810px) {
    .main .column:nth-child(1) {
      .card-row h3 {
        min-width: 150px;
        font-size: 13px;
      }
    }
  }
  @media (max-width: 750px) {
    .main .column:nth-child(1) {
      .card-row h3 {
        min-width: 137px;
        font-size: 13px;
      }
    }
  }
  @media (max-width: 720px) {
    .main {
      flex-direction: column;
      .column:nth-child(2) {
        align-items: center;
        img {
          width: 50%;
        }
      }
      .column:nth-child(1) {
        margin-top: 35px;
        .card-row h3 {
          min-width: 137px;
          font-size: 13px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .main {
      .column:nth-child(2) {
        img {
          width: 80%;
        }
      }
    }
  }
  @media (max-width: 342px) {
    .main .column:nth-child(1) {
      .card-row h3 {
        margin: 5px 0;
        display: block;
      }
    }
  }
  @media (max-width: 220px) {
    .main {
      .column:nth-child(2) {
        img {
          width: 100%;
        }
      }
      .column:nth-child(1) {
        .card-row h3 {
          min-width: initial;
          width: 95%;
        }
        h1 {
          font-size: 25px;
          word-break: break-all;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
`;
