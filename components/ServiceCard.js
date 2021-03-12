import React from "react";
import styled from "styled-components";

export default function ServiceCard({ title, msg, imgUrl, num }) {
  return (
    <>
      <Scard className={`scard keen-slider__slide number-slide${num}`}>
        <h2>{title}</h2>
        <div className="bdy">
          <p>{msg}</p>
        </div>
        <div className="tail">
          <p>Read more</p>
        </div>
        <Image className="scpic">
          <img src={`/img/svg/${imgUrl}`} alt="" />
        </Image>
      </Scard>
    </>
  );
}
const Image = styled.div`
  position: absolute;
  bottom: 12px;
  right: -20px;
  opacity: 1;
  user-select: none;
  z-index: -1;
  opacity: 0;
  transition: 0.8s ease-in-out;

  img {
    width: 125px;
  }
`;

const Scard = styled.div`
  position: relative;
  border: 1px solid #fff;
  flex-basis: 262px;
  height: 300px;
  padding: 22px;
  box-shadow: 0px 0px 3px #fff;
  border-radius: 5px;
  overflow: visible;
  transition: background-color 0.8s ease;

  &:hover {
    background-color: #ffffff1c;
    transform: scale(1.02);
  }

  &:hover ${Image} {
    opacity: 1;
    z-index: 1;
  }

  .bdy {
    overflow: hidden;
    height: 70%;
  }
  h2 {
    color: #fff;
    font-family: var(--sub-font);
    font-size: 19px;
    margin-bottom: 10px;
  }
  p {
    color: #fff;
    font-family: var(--sub-font);
    letter-spacing: 0.3px;
    font-size: 13px;
  }
  .tail {
    p {
      position: relative;
      color: #fff;
      font-family: var(--sub-font);
      font-size: 15px;
      font-weight: bold;

      &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 35%;
        border-bottom: 2px solid #9a9a9a;
      }
    }
  }
`;
