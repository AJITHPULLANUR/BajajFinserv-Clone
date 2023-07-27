import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Content4 = () => {
    const responsive2 = {
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

<div className="fourthbodyfull">
     
     <div className="fourthsecondbody">
       <div className="fourthtext1">
         <span className="fourthbodyinsurancehead">LifeStyle Products on EMI</span>
         <span className="fourthbodysubhead">Explore</span>
       </div>
       <div className="fourthsecondrowcomboimage">
       <div className="fourthsecondbodyfullone">
         <Carousel className="carousal" responsive={responsive2}>
           {/* 1 */}
         <div className="fourthelectronicscarousal">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/kitchen-appliances-v1?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Kitchen Appliances</span>
           </div>

           {/* 2 */}
           <div className="fourthelectronicscarousal1">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/watches-v1?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Watches</span>
           </div>

           {/* 3 */}
           <div className="fourthelectronicscarousal2">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/mattress-v1?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Mattress</span>
           </div>

           {/* 4 */}
           <div className="fourthelectronicscarousal3">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/tread-mill-v1?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Fitness</span>
           </div>

           {/* 5 */}
           <div className="fourthelectronicscarousal4">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/furniture-v1?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Furniture</span>
           </div>

           {/* 6 */}
           <div className="fourthelectronicscarousal5">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/bicycle?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Bicycles</span>
           </div>

           {/* 7 */}
           <div className="fourthelectronicscarousal6">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/mixer-and-grinder-v1?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Mixers and Grinders</span>
           </div>

           {/* 8 */}
           <div className="fourthelectronicscarousal7">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/camera-and-accessories-v1?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Camera & Acceccories</span>
           </div>
         </Carousel>
       </div>
          

         </div>

     </div>


     <div className="fourthsecondbody">
       <div className="fourthtext1">
         <span className="fourthbodyinsurancehead">Two Wheeler Loan</span>
         <span className="fourthbodysubhead">Explore</span>
       </div>
       <div className="fourthsecondrowcomboimage">
       <div className="fourthsecondbodyfullone1">
    
           {/* 1 */}
         <div className="fourthelectronicscarousal">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/scooter-2?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Scooters</span>
           </div>

           {/* 2 */}
           <div className="fourthelectronicscarousal1">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/bikes-4?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Bikes</span>
           </div>

           {/* 3 */}
           <div className="fourthelectronicscarousal2">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/electric-vehicle-1?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Electric Vehicles</span>
           </div>

           {/* 4 */}
           <div className="fourthelectronicscarousal3">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/best-mileage?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Best Milleage</span>
           </div>

           {/* 5 */}
           <div className="fourthelectronicscarousal4">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/top-selling?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Top Selling</span>
           </div>

           {/* 6 */}
           <div className="fourthelectronicscarousal5">
             <img
               className="carousalimages"
               width="56px"
               height="50px"
               src="https://cms-assets.bajajfinserv.in/is/image/bajajfinance/popular-brands-8?scl=1&fmt=png-alpha"
               alt=""
             />
             <span className="textcarousal">Popular Brands</span>
           </div>

         
         
       </div>
          

         </div>

     </div>

   </div>


    </div>
  )
}

export default Content4