import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import useScroll from "./useScroll";
import { motion } from "framer-motion";
import { fade } from "./animation";

export default function OurServicesIn() {
  const [element, controls] = useScroll();

  const [count, setcount] = useState(4);

  const [sliderRef] = useKeenSlider({
    slidesPerView: count,
    mode: "free-snap",
    spacing: 40,
    centered: false,
    loop: false,
    duration: 1000,
  });

  useEffect(() => {
    let innerWidth = window.innerWidth;
    console.log(innerWidth);
    if (innerWidth < 600) {
      setcount(1);
    } else if (innerWidth < 815) {
      setcount(2);
    } else if (innerWidth < 1111) {
      setcount(3);
    }
  }, []);

  return (
    <Oservices>
      <MainS ref={element} variants={fade} animate={controls} initial="hidden">
        <div className="top">
          <div className="column">
            <h1>Our Services</h1>
            <div className="nav-area">
              {/* <button>
                <img src="/img/svg/left.svg" alt="" />
              </button>
              <button>
                <img src="/img/svg/right.svg" alt="" />
              </button> */}
            </div>
          </div>
          <p>
            <Link href="/services">Read more</Link>
          </p>
        </div>
        <div className="body keen-slider" ref={sliderRef}>
          <ServiceCard
            title="Frontend Web Development"
            msg="We do front-end development which is client-side development using vast varieties of technologies from HTML, CSS, and JavaScript to Next.js and React, for websites and web applications, in order to make users interact with them directly."
            imgUrl="lap.svg"
            num="1"
          />
          <ServiceCard
            title="Backend Web Development"
            msg="We do back-end development which also refers to server-side development using python, PHP and Node.js focusing on databases, scripting and website architecture much reliably so that the behind-the-scenes activities perform well."
            imgUrl="backend.svg"
            num="2"
          />
          <ServiceCard
            title="API Development"
            msg="We develop Application Programming Interfaces with the use of Django REST Framework and Nodejs that hide complexity from developers, extend systems to partners, organize code, and make components reusable"
            imgUrl="api.svg"
            num="3"
          />
          <ServiceCard
            title="React Development"
            msg="We produce services related to React which is an open-source front end JavaScript library to build user interfaces or UI components."
            imgUrl="react.svg"
            num="4"
          />
          <ServiceCard
            title="Django Development"
            msg="We use Django which is a Python-based, free and open-source web framework, which follows the model-template-views architectural pattern."
            imgUrl="dar.svg"
            num="5"
          />
          <ServiceCard
            title="Deploy on cloud"
            msg="We are experienced in cloud platforms like AWS, DigitalOcean and LINODE to do Cloud deployment which is the enablement of SaaS (software as a service), PaaS (platform as a service) or IaaS (infrastructure as a service) solutions that is accessed on demand by end users or consumers."
            imgUrl="database.svg"
            num="6"
          />
          <ServiceCard
            title="WordPress Development"
            msg="We do web development using WordPress which is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. "
            imgUrl="wp.svg"
            num="7"
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
  overflow: hidden;

  @media (max-width: 319px) {
    padding: 80px 10px;
  }
`;
const MainS = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
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
    a {
      color: #ffff;
      font-size: 16px;
      cursor: pointer;
      font-family: var(--main-font);
      font-weight: lighter;
      text-decoration: none;
    }
  }
  .body {
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: grab;
    overflow: visible;
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
  @media (max-width: 1200px) {
    max-width: 95%;
  }
  @media (max-width: 319px) {
    .top .column h1 {
      font-size: 20px;
    }
    .top p a {
      font-size: 14px;
    }
  }
`;
