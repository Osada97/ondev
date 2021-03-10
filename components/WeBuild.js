import React from "react";
import styled from "styled-components";

export default function WeBuild() {
  return (
    <Build>
      <div className="top">
        <h1>We Build</h1>
      </div>
      <div className="body">
        <div className="column">
          <img src="/img/svg/web.svg" alt="" />
          <div className="dl">
            <h2>Web</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              ipsum animi assumenda explicabo quasi ea nesciunt doloremque
              dolore nulla dolorem. Veniam commodi a dolorum voluptas labore
              corrupti tenetur iusto neque.
            </p>
            <button>Explore More</button>
          </div>
        </div>
        <div className="column-mid">
          <img src="/img/svg/andLine.svg" alt="" />
        </div>
        <div className="column">
          <img src="/img/svg/App.svg" alt="" />
          <div className="dl">
            <h2>Mobile</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              ipsum animi assumenda explicabo quasi ea nesciunt doloremque
              dolore nulla dolorem. Veniam commodi a dolorum voluptas labore
              corrupti tenetur iusto neque.
            </p>
            <button>Explore More</button>
          </div>
        </div>
      </div>
    </Build>
  );
}

const Build = styled.div`
  padding: 45px;
  width: 100%;

  .top {
    width: 100%;
    text-align: center;

    h1 {
      font-family: var(--main-font);
      font-size: 38px;
    }
  }

  .body {
    padding-top: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: Center;

    .column:first-child {
      img {
        width: 265px;
      }
    }
    .column {
      flex: 0.3;
      text-align: center;
      img {
        width: 300px;
      }
      .dl {
        padding: 15px 0;
      }
      .dl h2 {
        font-family: var(--main-font);
        font-size: 26px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .dl p {
        font-family: var(--sub-font);
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 30px;
      }
      .dl button {
        width: 160px;
        padding: 12px 0;
        background: #fff;
        border: 2px solid #2039cc;
        border-radius: 5px;
        box-shadow: 0px 0px 8px 1px #2039cc;
        outline: none;
        cursor: pointer;
        font-weight: bold;
      }
    }

    .column-mid {
      flex: 0.1;
      text-align: center;
      img {
        width: 90px;
      }
    }
  }
`;
