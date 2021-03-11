import React from "react";
import styled from "styled-components";

export default function HowWeWork() {
  return (
    <HowWe>
      <Main>
        <div className="top">
          <h1>How We Work</h1>
        </div>
        <Bdy className="body">
          <div className="bdy-main">
            <img src="/img/svg/howweworkin.svg" alt="" />
          </div>
          <SimCard style={{ top: "-3%", left: "34%" }}>
            <h3>Requirements Gathering</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
          <SimCard style={{ top: "38%", left: "1%" }}>
            <h3>Designing</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
          <SimCard style={{ top: "45%", left: "41%" }}>
            <h3>Implementations</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
          <SimCard style={{ top: "1%", left: "72%" }}>
            <h3>Implementations</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
          <SimCard style={{ bottom: "-13%", left: "62%" }}>
            <h3>Deployement</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
          <SimCard style={{ bottom: "-21%", left: "3%" }}>
            <h3>Maintains</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
          </SimCard>
        </Bdy>
        <div className="bdy-sub">
          <img src="/img/svg/man-behind.svg" alt="" />
        </div>
      </Main>
    </HowWe>
  );
}

const HowWe = styled.div`
  width: 100%;
  padding: 82px 0;
`;
const Main = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;

  .top {
    font-family: var(--main-font);
    margin-bottom: 20px;
    h1 {
      color: #48484a;
      font-size: 35px;
    }
  }
  .bdy-sub {
    position: absolute;
    bottom: -80px;
    right: 30px;

    img {
      width: 160px;
    }
  }
`;
const Bdy = styled.div`
  position: relative;
  .bdy-main {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
  }
`;
const SimCard = styled.div`
  font-family: var(--sub-font);
  width: 300px;
  padding: 8px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  h3 {
    color: #2039cc;
    margin-bottom: 5px;
  }
  p {
    font-size: 15px;
    color: #48484a;
  }
`;
