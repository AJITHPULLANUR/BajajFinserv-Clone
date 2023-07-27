import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Content5 = () => {
    const responsivefifth = {
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
    
  return (
    <div>
         <div className="fifthbodyfull">
      <div className="fifthbodyfirstbody">
        <div className="fifthbodyfirstimagediv">
          <img width="480px" height="110px" className="fifthimage" src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/monsoon-mega-sale?scl=1" alt="" />

        </div>
        <div className="fifthbodysecondimagediv">
        <img width="480px" height="110px" src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/locater-banner?scl=1&fmt=png-alpha" alt="" />
        </div>

      </div>

      <div className="fifthbodysecondbody">
        <div className="fifthbodycarousal">
          <div className="fifthsecondhead">
            <span className="fifthoffertext">Offers for You</span>
          </div>
         
      <Carousel className="carousalfifth" responsive={responsivefifth}>
                <div>
                  <img
                    className="carousalimagesfifth"
                    width="335px"
                    height="100px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/offer-for-you-offer-world-banners-3036504?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousalimagesfifth"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/offer-for-you-gold-loan-banners-3036504?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousalimagesfifth"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/offer-for-you-credit-card-banners-3036504?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousalimagesfifth"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/offer-for-you-air-conditioner-banners-3036504?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousalimagesfifth"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/offer-for-you-doctor-loan-banners-3036504?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousalimagesfifth"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/offer-for-you-two-wheeler-loan-banners-3036504?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousalimagesfifth"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/offer-yor-you-smartphones-banners-3036504?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="carousalimagesfifth"
                    width="325px"
                    height="120px"
                    src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/offer-for-you-two-wheeler-loan-banners-3036504?scl=1&fmt=png-alpha"
                    alt=""
                  />
                </div>
              </Carousel>
              
              </div>

      </div>

    </div>
    </div>
  )
}

export default Content5