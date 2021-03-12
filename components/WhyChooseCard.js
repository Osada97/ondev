import React from "react";
import Tilt from "react-tilt";

export default function WhyChooseCard({ imgname, content }) {
  return (
    <Tilt className="card" options={{ max: 20, speed: 1000, scale: 1.02 }}>
      <div className="icon">
        <img src={`/img/svg/${imgname}`} alt="" />
      </div>
      <h3>{content}</h3>
    </Tilt>
  );
}
