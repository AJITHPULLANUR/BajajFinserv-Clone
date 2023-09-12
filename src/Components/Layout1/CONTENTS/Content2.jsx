import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Content2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsivetwo = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="fullsecondbody">
        <div className="combosecondbody">
          <div className="secondbodytwoinone">
            <div className="secondbodyfullone">
              <Carousel className="carousal" responsive={responsive}>
                <div>
                  <img
                    className="carousalimages"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/fixed-deposite-v1?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousalimages"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/car-insurance-v1-5?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousalimages"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/bfsl-v1?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousalimages"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/doctor-loan-v1-5?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousalimages"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/mutual-fund-v1-1?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
              </Carousel>
            </div>

            <div className="secondbodyfulltwo">
              <div className="headingsecond">
                <span className="secondcarousalheadtext">
                  Electronics on EMI
                </span>
                <span className="secondcarousalheadtextlast">Explore</span>
              </div>
              <Carousel className="carousal" responsive={responsivetwo}>
                <div className="electronicscarousal">
                  <img
                    className="carousalimages"
                    width="56px"
                    height="60px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/smartphones-v1-4?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="textcarousal">SmartPhones</span>
                </div>
                <div className="electronicscarousal1">
                  <img
                    className="carousalimages"
                    width="56px"
                    height="60px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/acs-v1?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="textcarousal">ACs</span>
                </div>
                <div className="electronicscarousal2">
                  <img
                    className="carousalimages"
                    width="56px"
                    height="60px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/refrigerator-v2?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="textcarousal">Refrigerators</span>
                </div>
                <div className="electronicscarousal3">
                  <img
                    className="carousalimages"
                    width="56px"
                    height="60px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/sony-tv?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="textcarousal">LED TV</span>
                </div>
                <div className="electronicscarousal4">
                  <img
                    className="carousalimages"
                    width="56px"
                    height="60px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/washing-machines-3?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="textcarousal">Washing Machines</span>
                </div>
                <div className="electronicscarousal5">
                  <img
                    className="carousalimages"
                    width="56px"
                    height="60px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/cooler-v1?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="textcarousal">Coolers</span>
                </div>
                <div className="electronicscarousal6">
                  <img
                    className="carousalimages"
                    width="56px"
                    height="60px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/laptop-17?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="textcarousal">Laptops</span>
                </div>
                <div className="electronicscarousal7">
                  <img
                    className="carousalimages"
                    width="56px"
                    height="60px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/water-purifier-6?scl=1&fmt=png-alpha"
                    alt=""
                  />
                  <span className="textcarousal">Water Purifiers</span>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="secondbodysidetwo">
            <div className="secondsidecombo">
              <div className="secondsideimage">
                <img
                  width="30px"
                  height="30px"
                  src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/savdhan-rahein?scl=1&fmt=png-alpha"
                  alt=""
                />
              </div>
              <div className="secondsideheading">
                <span className="secondsidetext">
                  Savdhaan Rahein. Safe Rahein
                </span>
              </div>
              <div className="secondsideparagraph">
                <span className="secondsidepara">
                  Beware of fraud calls/ SMSes/ emails/ fake online and print
                  ads. Karattu Finance never asks for advance payments for
                  providing loans.{" "}
                </span>
                <span className="secondsideparalast">Know More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
