import React from "react";
import { Link,Outlet } from "react-router-dom";
import cart from "../Layout1/Logos/icons8-cart-48.png";
import dial from "../Layout1/Logos/dial-pad.png";
import bell from "./Logos/bell.png";
import phone from "./Logos/iphone.png";

const Layout = () => {
  return (
    <div>
      <div className="navfull">
        <div className="navfullsub">
          <div className="layoutfull">
            <button
              className="canvasbutton"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <img
                src="https://www.bajajfinserv.in/MyAccountAsset/Login/images/menu.svg"
                alt=""
              />
            </button>

            <div
              class="offcanvas offcanvas-start"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabindex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                  MENU
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div class="dropdown">
                  <div className="dropsidebox">
                    <div className="dropimg">
                      <img
                        width="40"
                        height="40"
                        src="https://img.icons8.com/fluency/48/user-male-circle.png"
                        alt="user-male-circle"
                      />
                    </div>
                    <div className="textdrop">
                      <h6 className="account">My Account</h6>
                      <span className="droptext">
                        My loan payments, drawdown funds,explore personalized
                        offers, earn rewards and more
                      </span>
                    </div>
                    <div className="droparrow">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-filled/50/circled-chevron-right.png"
                        alt="circled-chevron-right"
                      />
                    </div>
                  </div>

                  {/* 1 */}
                  <div className="dropdownoptiondiv">
                    <span
                      id="dropdownbutton"
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Our Companies
                    </span>
                    <span className="review">Learn more about companies</span>

                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li>
                        <span class="dropdown-item active">
                          Bajaj Finserv Limited
                        </span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Finance Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Housing Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">
                          Bajaj Finserv Life Insurance
                        </span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">
                          Bajaj Finance Direct Limited
                        </span>
                      </li>
                      <li class="dropdown-divider"></li>
                    </ul>
                  </div>

                  {/* 2 */}

                  <div className="dropdownoptiondiv">
                    <span
                      id="dropdownbutton2"
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Help and Support
                    </span>

                    <span className="review">
                      Raise a query or find answers to your questions
                    </span>

                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li>
                        <span class="dropdown-item active">Reach us</span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Locate us</span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Raise a Request</span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">FAQs</span>
                      </li>
                      <li class="dropdown-divider"></li>
                    </ul>
                  </div>

                  {/* 3 */}

                  <div className="dropdownoptiondiv">
                    <span
                      id="dropdownbutton3"
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pay your dues
                    </span>
                    <span className="review">
                      Check your overdue amount and pay online
                    </span>
                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li>
                        <span class="dropdown-item active">
                          Clear your over due EMIs
                        </span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj LIC Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Lodge Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                    </ul>
                  </div>

                  {/* 4 */}

                  <div className="dropdownoptiondiv">
                    <span
                      id="dropdownbutton4"
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      My Rewards
                    </span>
                    <span className="review">
                      View all the rewards that you have earned so far
                    </span>

                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li>
                        <span class="dropdown-item active">
                          Bajaj Cash Limited
                        </span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Loan Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Scracth Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                    </ul>
                  </div>

                  {/* 5 */}

                  <div className="dropdownoptiondiv">
                    <span
                      id="dropdownbutton5"
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Locate us
                    </span>
                    <span className="review">Find bajaj Finserv branch</span>

                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li>
                        <span class="dropdown-item active">
                          Bajaj Loan Limited
                        </span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Bike Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Car Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                    </ul>
                  </div>

                  {/* 6 */}

                  <div className="dropdownoptiondiv">
                    <span
                      id="dropdownbutton6"
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Check pre-approved offers
                    </span>
                    <span className="review">
                      Enter your basic details to see our exclusive offers
                    </span>

                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li>
                        <span class="dropdown-item active">
                          Bajaj Cash Limited
                        </span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Fund Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Housing Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                    </ul>
                  </div>

                  {/* 7 */}

                  <div className="dropdownoptiondiv">
                    <span
                      id="dropdownbutton7"
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Download our apps
                    </span>
                    <span className="review">
                      Download our apps from the play store / App store
                    </span>

                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li>
                        <span class="dropdown-item active">
                          Bajaj Cash Limited
                        </span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Vehicle Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Car Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                    </ul>
                  </div>

                  {/* 8 */}

                  <div className="dropdownoptiondiv">
                    <span
                      id="dropdownbutton8"
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Give feedback
                    </span>
                    <span className="review">
                      Share your experience and help us serve you better
                    </span>

                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li>
                        <span class="dropdown-item active">
                          Bajaj Loan Limited
                        </span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Finance Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li>
                        <span class="dropdown-item">Bajaj Sports Limited</span>
                      </li>
                      <li class="dropdown-divider"></li>
                    </ul>
                  </div>

                  <span className="companytext">
                    © 2023 Bajaj Finserv Limited
                  </span>
                </div>
              </div>
            </div>

            <img
              src="https://www.bajajfinserv.in/MyAccountAsset/images/bajajLogo.svg"
              alt=""
            />

            <span className="line">|</span>
          </div>

          <div className="inputdiv">
            <input
              className="inputnav"
              type="text"
              placeholder="Search Bajajfinserv.in                                                                                                                 |    "
            />
          </div>

          <div className="options">
            <span className="line"> | </span>
            <div className="optionsdiv">
              <img
                width="30px"
                height="25px"
                src="https://www.bajajfinserv.in/MyAccountAsset/Login/images/emicard_icon.png"
                alt=""
              />

              <span className="optiontext" id='animation' >EMI Card</span>
            </div>

            <div className="optionsdiv">
              <img
                width="25"
                height="25"
                src={bell}
                alt="appointment-reminders--v1"
              />
              <span className="optiontext" id='animation' >Alert Message</span>
            </div>

            <div className="optionsdiv">
              <img width="25px" height="27px" src={cart} alt="" />
              <span className="optiontext" id='animation' >Cart</span>
            </div>

            <div className="optionsdiv">
              <img
                width="25"
                height="27"
                src="https://www.bajajfinserv.in/MyAccountAsset/Login/images/prof.svg"
                alt=""
              />
              <span className="optiontext" id='animation' >My Account</span>
            </div>

            <div className="optionsdiv">
              <img width="25" height="25" src={dial} alt="" />
              <span className="optiontext" id='animation' >Partners</span>
            </div>
          </div>
        </div>

        <div className="hovernav">
          <div className="fullsec">
            {/* 1 */}

            <div className="dropdowndiv">
              <div className="dropbutton">
                <span className="taghovernav" >Loans</span>
              </div>
              <div className="dropdownlist">
                <span>All Loans</span>
                <span>Personal Loans</span>
                <span>Insta Personal Loan</span>
                <span>Business Loan</span>
                <span>Home Loan</span>
                <span>Gold Loan</span>
              </div>
            </div>

            {/* 2 */}

            <div className="dropdowndiv">
              <div className="dropbutton">
                <span className="taghovernav">All on Emi</span>
              </div>
              <div className="dropdownlist">
                <span>Electronics</span>
                <span>Two-Wheelers</span>
                <span>Travel</span>

                <span>Lifestyle</span>
                <span>Offers & Promotions</span>
              </div>
            </div>

            {/* 3 */}

            <div className="dropdowndiv">
              <div className="dropbutton">
                <span className="taghovernav">Bajaj Mall</span>
              </div>
              <div className="dropdownlist">
                <span>Air conditioners</span>
                <span>Smartphones</span>
                <span>Air cooler</span>
                <span>LED TVs</span>
                <span>Airpods</span>
                <span>Smart Watches</span>
              </div>
            </div>

            {/* 4*/}

            <div className="dropdowndiv">
              <div className="dropbutton">
                <span className="taghovernavcard">Card</span>
              </div>
              <div className="dropdownlist">
                <span>All Cards</span>
                <span>Bajaj finserv Network </span>
                <span>Insta Emi Card</span>

                <span>Health EMI Cards</span>
              </div>
            </div>

            {/* 5 */}

            <div className="dropdowndiv">
              <div className="dropbutton">
                <span className="taghovernav1">Investment</span>
              </div>
              <div className="dropdownlist">
                <span>All Investments</span>
                <span>Fixed Deposits</span>
                <span>Stock Trading</span>
                <span>Mutual Funds</span>

                <span>Partner Portal</span>
              </div>
            </div>

            {/* 6*/}

            <div className="dropdowndiv">
              <div className="dropbutton">
                <span className="taghovernav">Insurance</span>
              </div>
              <div className="dropdownlist">
                <span>Insurance Mall</span>
                <span>Bike Insurance</span>
                <span>Car Insurance</span>
                <span>Pocket Inusrance</span>
                <span>Investment </span>
                <span>Life Insurance</span>
              </div>
            </div>

            {/* 7 */}

            <div className="dropdowndiv">
              <div className="dropbutton">
                <span className="taghovernav">Payments</span>
              </div>
              <div className="dropdownlist">
                <span>Pay your Emi</span>
                <span>Bills & Recharges</span>
                <span>Setup UPI ID</span>
                <span>Repay your Loans</span>
                <span>Manage Supercard Bill</span>
              </div>
            </div>

            {/* 8 */}

            <div className="dropdowndiv">
              <div className="dropbutton">
                <span className="taghovernav">Offers</span>
              </div>
              <div className="dropdownlist">
                <span>All offers</span>
                <span>Cards</span>
                <span>Loans</span>
                <span>Bajaj Mall</span>
                <span>Pre-approved</span>
                <span>Insurance</span>
              </div>
            </div>
            {/* 9 */}

            <div className="dropdowndiv">
              <div className="dropbutton">
                <span className="taghovernav">Locate us</span>
              </div>
              <div className="dropdownlist">
                <span>Branches</span>
                <span>EMI Network Partner Stores</span>
                <span>Collection Centres</span>
              </div>
            </div>
            {/* 10 */}

            <div className="dropdowndiv">
              <div className="dropbutton">
                <span className="taghovernav">Services</span>
              </div>
              <div className="dropdownlist">
                <span>Raise a Request</span>
                <span>Repay your Loans</span>
                <span>Manage your Loans</span>
                <span>Manage your Mandate</span>
                <span>Manage your Investments</span>
                <span>All Service Guides</span>
              </div>
            </div>
          </div>
          <div className="feedbackportion">
            <div className="feedoption">
              <div className="feedbackanddownload">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/sf-black-filled/64/FFFFFF/comments.png"
                  alt="comments"
                />
                <span className="iphone">Feedback</span>
              </div>
            </div>

            <div className="feedoption2">
              <div className="feedbackanddownload2">
                <img width="20" height="20" src={phone} alt="comments" />
                <span className="iphone">Download the App</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
