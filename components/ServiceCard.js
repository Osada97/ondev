import React from "react";
import styled from "styled-components";

export default function ServiceCard({ title, msg, imgUrl }) {
  return (
    <>
      <Scard className="scard">
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
  opacity: 0;
  user-select: none;
  transition: 0.8s ease-in-out;

  img {
    width: 125px;
  }
`;

const Scard = styled.div`
  position: relative;
  border: 1px solid #fff;
  flex-basis: 272px;
  height: 315px;
  padding: 22px;
  box-shadow: 0px 0px 3px #fff;
  border-radius: 5px;
  transition: 0.8s ease;

  &:hover {
    background-color: #ffffff1c;
  }

  &:hover ${Image} {
    opacity: 1;
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
