import React from "react";
import Header from "./header";
import { IoMdHome } from "react-icons/io";
import { RxTimer } from "react-icons/rx";
import { BsChatRightFill } from "react-icons/bs";
import { FaRadio } from "react-icons/fa6";
import "./styles/home.css";
import lefticon1 from "./images/leftheaderIcon.svg";
import lefticon2 from "./images/leftheaderIcon2.svg";
import FirstScreen from "./screen1";
import SecondScreen from "./screen2";
import { HiChartBar } from "react-icons/hi";
import { PiSquareHalfBottomLight } from "react-icons/pi";
import { PiSquareHalfBottomBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="body">
      <div className="little-icons">
        <img className="little-icon1" src={lefticon2} alt="little1" />
        <img
          className="little-icon2"
          src={lefticon1}
          alt="little2"
          style={{ color: "red" }}
        />
      </div>

      <section className="dashboard">
        <ul className="dashboard-icons">
          <li className="home-icon" style={{}}>
            <IoMdHome
              style={{
                color: "red",
                position: "relative",
                top: "8px",
                left: "10px",
              }}
            />
          </li>
          <li style={{ marginBottom: "30px" }}>
            <RxTimer style={{ color: "rgba(136, 128, 207, 1)" }} />
          </li>
          <li style={{ marginBottom: "30px" }}>
            <BsChatRightFill style={{ color: "rgba(136, 128, 207, 1)" }} />
          </li>
          <li>
            <FaRadio style={{ color: "rgba(136, 128, 207, 1)" }} />
          </li>
        </ul>
      </section>
      <section className="main-section">
        <div className="header-screen">
          <Header />
          <div className="toggle">
            <span className="toggleicon-1">
              <Link to="/">
                <HiChartBar
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    width: "13.75px",
                    height: "12.3px",
                    position:'relative',
                    top:'4px',
                    left:'17px'
                  }}
                />
              </Link>{" "}
            </span>
            <span className="toggleicon-2">
              <Link to="/screen2">
                <PiSquareHalfBottomBold
                  style={{
                    color: "rgba(187, 190, 217, 1)",
                    width: "15px",
                    height: "13px",
                    position:'relative',
                    top:'5px',
                    left:'17px'
                  }}
                />
              </Link>
            </span>
          </div>
          <div className="screen">
            <FirstScreen />
            <div className="screen-2">
              <SecondScreen />
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default Home;
