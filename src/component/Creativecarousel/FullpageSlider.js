import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import NavbarThree from "../Navbar/NavbarThree";
import jhonData from "../jhonData";

const FullpageSlider = (fullpageProps) => (
  <div className="scroll_page">
    <NavbarThree mainlogo="logo.svg" />
    <ReactFullpage
      {...fullpageProps}
      render={({ state, fullpageApi }) => {
        return (
          <React.Fragment>
            <SectionOne smallText="Photography" />
            <SectionTwo />
            <SectionThree />
            <SectionFour jhonData={jhonData} />
          </React.Fragment>
        );
      }}
    />
    <div
      className="section_bg"
      style={{
        background: "linear-gradient( 61deg, #fef2f6 0%, #ebfdfd 100%)",
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        zIndex: "-1",
      }}
    >
      <ul
        data-relative-input="true"
        className="list-unstyled memphis"
        id="scene"
      >

      </ul>
    </div>
  </div>
);

export default FullpageSlider;
