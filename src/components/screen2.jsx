import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { RiNetflixFill } from "react-icons/ri";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import Header from "./header";

import "./styles/screen2.css";

function SecondScreen() {
  return (
    <div className="screen2-body">

    <div className="screen-2">
        <div className="screen2-header">
        <Header />
        </div>
      <section className="screen2-top"></section>
      <section className="screen2-middle"></section>
      <section className="screen2-end">
        <ul className="main-list">
          <li
          className="transaction"
          >
            <h3 style={{position:'relative', left:'20px'}}>Transaction</h3>
            <FaPlusSquare
              style={{
                width: "23.93px",
                height: "23.93px",
                color: "red",
                borderRadius: "16px",
                marginRight:'15px'
              }}
            />
          </li>
          <li style={{ marginLeft: "-50px" }}>
            <ul className="inner-list1">
              <li
                style={{
                  width: "37.5px",
                  height: "37.5px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  marginBottom: "20px",
                }}
              >
                <BsFillTaxiFrontFill
                  style={{
                    color: "red",
                    position: "relative",
                    top: "8px",
                    left: "10px",
                  }}
                />
              </li>
              <li>
                <ul style={{ marginLeft: "-80px", listStyle: "none" }}>
                  <li>Taxi</li>
                  <li>01:21 PM</li>
                </ul>
              </li>
              <li style={{marginRight:'-10px', marginTop:'10px'}}>-9,20</li>
            </ul>
          </li>
          <li style={{ marginLeft: "-45px" }}>
            <ul className="inner-list1">
              <li
                style={{
                  width: "37.5px",
                  height: "37.5px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  marginBottom: "20px",
                }}
              >
                <GiShoppingBag
                  style={{
                    position: "relative",
                    top: "8px",
                    left: "10px",
                    color: "red",
                  }}
                />
              </li>
              <li>
                <ul style={{ marginLeft: "-66px", listStyle: "none" }}>
                  <li>Shopping</li>
                  <li>11:15 AM</li>
                </ul>
              </li>
              <li style={{marginRight:'-10px', marginTop:'10px'}}>-142,00</li>
            </ul>
          </li>
          <li style={{ marginLeft: "-40px" }}>
            <ul className="inner-list1">
              <li
                style={{
                  width: "37.5px",
                  height: "37.5px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              >
                <RiNetflixFill
                  style={{
                    position: "relative",
                    top: "8px",
                    left: "10px",
                    color: "red",
                  }}
                />
              </li>
              <li>
                <ul style={{ marginLeft: "-55px", listStyle: "none" }}>
                  <li>Netflix</li>
                  <li>JAN 10 2020</li>
                </ul>
              </li>
              <li style={{marginRight:'-10px', marginTop:'10px'}}>-24.99</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
    </div>
  );
}

export default SecondScreen;
