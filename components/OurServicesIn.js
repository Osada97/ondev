import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

export default function OurServicesIn() {
  return (
    <Oservices>
      <MainS>
        <div className="top">
          <div className="column">
            <h1>Our Services</h1>
            <div className="nav-area">
              <button>
                <img src="/img/svg/left.svg" alt="" />
              </button>
              <button>
                <img src="/img/svg/right.svg" alt="" />
              </button>
            </div>
          </div>
          <p>Read more</p>
        </div>
        <div className="body">
          <ServiceCard
            title="Frontend Web Development"
            msg="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, similique? Beatae accusamus quo deserunt ipsum
                excepturi, inventore expedita possimus? Mollitia quisquam illum
                sed error maxime explicabo consequuntur ab, debitis eius."
            imgUrl="lap.svg"
          />
          <ServiceCard
            title="Backend Web Development"
            msg="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, similique? Beatae accusamus quo deserunt ipsum
                excepturi, inventore expedita possimus? Mollitia quisquam illum
                sed error maxime explicabo consequuntur ab, debitis eius."
            imgUrl="backend.svg"
          />
          <ServiceCard
            title="API Development"
            msg="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, similique? Beatae accusamus quo deserunt ipsum
                excepturi, inventore expedita possimus? Mollitia quisquam illum
                sed error maxime explicabo consequuntur ab, debitis eius."
            imgUrl="api.svg"
          />
          <ServiceCard
            title="React Development"
            msg="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, similique? Beatae accusamus quo deserunt ipsum
                excepturi, inventore expedita possimus? Mollitia quisquam illum
                sed error maxime explicabo consequuntur ab, debitis eius."
            imgUrl="react.svg"
          />
        </div>
        <div className="swave">
          <img src="/img/s-wave-w-u.svg" alt="" />
        </div>
      </MainS>
    </Oservices>
  );
}

const Oservices = styled.div`
  position: relative;
  padding: 100px 40px;
  width: 100%;
  background-color: #48484a;
`;
const MainS = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 55px;

    .column {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        color: #fff;
        font-family: var(--main-font);
        font-size: 31px;
      }

      button {
        background: transparent;
        border: none;
        outline: none;
        width: 60px;
        cursor: pointer;

        img {
          width: 11px;
        }
      }
    }
    p {
      color: #ffff;
      font-size: 16px;
      cursor: pointer;
      font-family: var(--main-font);
      font-weight: lighter;
    }
  }
  .body {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .swave {
    position: absolute;
    bottom: -5px;
    right: 0;
    text-align: right;

    img {
      width: 80%;
    }
  }
`;
