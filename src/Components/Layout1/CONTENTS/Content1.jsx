import React from "react";

import person from "../Secondnav/NEW/businessman.png";
import home from "../Secondnav/NEW/home.png";
import doctor from "../Secondnav/NEW/doctor.png";
import bag from "../Secondnav/NEW/money-bag.png";
import { black, bluelast, secondcard } from "../CONTENTS/Datas";
import fridge from "../Secondnav/SIDE DIV/electronics (1).png";
import cash from "../Secondnav/SIDE DIV/money-bag.png";
import verify from "../Secondnav/SIDE DIV/high-quality.png";
import trade from "../Secondnav/SIDE DIV/investment.png";

const Content1 = () => {
  const firstbox = [
    {
      img: person,
      text: "Personal",
    },
    {
      img: home,
      text: "Home",
    },
    {
      img: doctor,
      text: "Doctor",
    },
    {
      img: bag,
      text: "Business",
    },
  ];
  return (
    <div>
      <div className="side">
        <div className="firstcomponent">
          <div className="firstcardbody">
            <div className="firstsubdiv">
              <div className="firstsub">
                <span className="tagofhome">Loans</span>
              </div>

              <div className="secondsub">
                {firstbox.map((item) => (
                  <div className="section">
                    <div className="imgdiv">
                      <img width="40px" height="40px" src={item.img} alt="" />
                      <span className="textsize">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="firstsubdiv2">
              <div className="firstsub">
                <span className="tagofhome">EMI Network Card</span>
              </div>

              <div className="secondsub">
                {black.map((item1) => (
                  <div className="section">
                    <div className="imgdiv">
                      <img
                        width="40px"
                        height="40px"
                        src={item1.blackimg}
                        alt=""
                      />
                      <span className="textsize1">{item1.blacktext}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="firstsubdiv3">
              <div className="firstsub">
                <span className="tagofhome">Co-brand Credit Card</span>
              </div>

              <div className="secondsub">
                {bluelast.map((item2) => (
                  <div className="section">
                    <div className="imgdiv5">
                      <img
                        width="40px"
                        height="40px"
                        src={item2.blueimg}
                        alt=""
                      />
                      <span className="textsize1">{item2.bluetext}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECONDCARD ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

          <div className="secondcard">
            <div className="seccardsub">
              <div className="viewofsecondcard">
                <span className="bills">Bills & Recharges</span>
                <span className="bills2">View All</span>
              </div>
              <div className="Secimagefulldiv">
                {secondcard.map((card) => (
                  <div className="secimagediv">
                    <img
                      width="50px"
                      height="50px"
                      src={card.secimg}
                      className="imagedivision"
                    />
                    <span className="seccardtext">{card.sectext}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* sidediv........................................................... */}

        <div className="sidediv">
          <div className="sidedivsub">
            <div className="sidedivtext">
              <span className="storetext">Superstores</span>
            </div>
            <div className="sidecombodiv">
              <img width="30px" height="30px" src={fridge} alt="" />
              <span className="combotext">Bajaj Mall</span>
            </div>

            <div className="sidecombodiv">
              <img width="25px" height="25px" src={cash} alt="" />
              <span className="combotext">Investments</span>
            </div>

            <div className="sidecombodiv">
              <img width="25px" height="25px" src={verify} alt="" />
              <span className="combotext">Insurance Mall</span>
            </div>

            <div className="sidecombodiv1">
              <img width="25px" height="25px" src={trade} alt="" />
              <span className="combotext">Securities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
