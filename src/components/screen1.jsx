import React from "react";
import stat1 from "./images/firstStat.svg";
import stat2 from "./images/secondStat.svg";
import stat3 from "./images/thirdStat.svg";
import stick1 from "./images/screen1/stick1.svg";
import timeSpent from "./images/screen1/timeSpent.svg";
import { FaPlayCircle } from "react-icons/fa";
import { PiClockFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import avatar2 from "./images/screen1/dashboard-avatar2.jpeg";
import "./styles/screen1.css";

function FirstScreen() {
  return (
    <div className="first-screen">
      <section className="screen1-top">
        <div className="stat1">
          <img src={stat1} alt="statistics1" className="stat1-image" />
          <ul className="stat1-list">
            <li style={{ color: "rgba(196, 189, 213, 1)" }}>VISITORS</li>
            <li style={{ color: "rgba(0, 0, 19, 1)" }}>10320</li>
          </ul>
        </div>
        <div className="stat1">
          <img src={stat2} alt="statistics1" className="stat1-image" />
          <ul className="stat1-list" id="stat1-list">
            <li style={{ color: "rgba(196, 189, 213, 1)" }}>CUSTOMERS</li>
            <li style={{ color: "rgba(0, 0, 19, 1)" }}>4628</li>
          </ul>
        </div>
        <div className="stat3">
          <img src={stat2} alt="statistics1" className="stat3-image" />
          <ul className="stat1-list">
            <li style={{ color: "rgba(196, 189, 213, 1)" }}>ORDERS</li>
            <li style={{ color: "rgba(255, 255, 255, 1)" }}>2980</li>
          </ul>
        </div>
      </section>

      <div className="hidden-center">
        <span>Statistics</span>
        <button className="dropdown-button">
          Year
          <span>
            <MdOutlineKeyboardArrowDown
              style={{
                position: "relative",
                width: "12px",
                height: "10px",
                left: "6px",
                top: "1.5px",
                color: "rgba(112, 103, 198, 1)",
              }}
            />
          </span>
        </button>
      </div>
      <section className="screen1-center">
        <img src={stick1} />
      </section>

      <section className="screen1-end">
        <div className="screen1-end1">
          <img src={timeSpent} />
        </div>
        <div className="screen1-end2">
          <div style={{ marginLeft: "20px", height: "100%" }}>
            <div className="avatar2-holder">
              <img
                src={avatar2}
                alt="Lily"
                style={{ width: "35.26px", height: "33.92px" }}
              />
              <ul className="lily">
                <li style={{ color: "rgba(0, 0, 0, 1)" }}>Lily Donovan</li>
                <li style={{ color: "rgba(196, 189, 213, 1)" }}>
                  Business trainer
                </li>
              </ul>
            </div>
            <div style={{ width: "70%" }}>
              <p>How to properly manage your personal budget?</p>
            </div>
            <div className="icons">
              <span className="video">
                <FaPlayCircle style={{ color: "blue" }} />
                <span className="video-icon">Video</span>
              </span>
              <span className="time">
                <PiClockFill style={{ color: "rgba(0, 195, 248, 1)" }} />{" "}
                <span className="time-icon">15 mins</span>
              </span>
              <span className="likes">
                <FaStar style={{ color: "rgba(255, 0, 0, 1)" }} />
                <span className="likes-icon">12 likes</span>
              </span>
            </div>
            <div className="button-holder">
              <span>5 days ago</span>
              <button className="button-1">
                Connect
                <span>
                  <LiaGreaterThanSolid
                   className="connect-arrow"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstScreen;
