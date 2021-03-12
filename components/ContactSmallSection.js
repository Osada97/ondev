import React from "react";
import styled from "styled-components";

export default function ContactSmallSection() {
  return (
    <Wrapper>
      <Main>
        <div className="sma">
          <div className="dis">
            <h1>Have A Project In Mind?</h1>
            <button>Gets Started</button>
          </div>
          <div className="img-rc">
            <img src="/img/svg/rocket-phone.svg" alt="" />
          </div>
        </div>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
`;
const Main = styled.div`
  width: 100%;
  background: transparent linear-gradient(236deg, #0c154a, #0c154a, #111e6c);
  .sma {
    position: relative;
    width: 1200px;
    padding: 100px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .dis {
      display: flex;
      font-family: var(--main-font);
      h1 {
        font-weight: normal;
        color: #fff;
        margin-right: 50px;
      }
      button {
        background-color: #ffffff3b;
        border: 1px solid transparent;
        width: 160px;
        padding: 13px 0;
        border-radius: 5px;
        color: #ffffff;
        font-size: 17px;
        letter-spacing: 1px;
        cursor: pointer;
        transition: 0.5s ease-in-out 0.1s;

        &:hover {
          background-color: #ffffff5c;
        }
      }
    }
    .img-rc {
      position: absolute;
      top: -150px;
      right: 0;
      text-align: right;

      img {
        width: 75%;
      }
    }
  }
`;
