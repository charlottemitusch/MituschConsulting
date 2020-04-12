import React from "react";
import icon from "../src/assets/icons/bg.png";

function Bakgrunn() {
  return (
    <div>
      <img
        src={icon}
        alt=""
        id="family-lawyers"
        className="with-overlay scroll-section screen-size   text-center  hero-banner showing"
      />
      <div class="center-screen">
        <div class="elm-with-fade-in fade-in">
          <h1 class="max-1820 heading-60 ">
            <small>CHARLOTTE MITUSCH</small>{" "}
            <a
              class="typewrite"
              data-period="2000"
              data-type='[ "BUILDING A PORTFOLIO", "PROJECT BY PROJECT"]'
            >
              <span class="wrap"></span>
            </a>
          </h1>
        </div>
      </div>
      <div class="arrow bounce"></div>{" "}
    </div>
  );
}
export default Bakgrunn;
