import React, { Component } from "react";
import SplitText from "react-pose-text";

const charPoses = {};

class SectionTwo extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content slider_content_two">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>University Website Redesign</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                    Virginia International University
                    </SplitText>
                  </h2>
                  <a href="#/" className="see_btn" data-text="See Projects">
                    View Project
                    <span className="arrow">
                      <span className="line"></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider_image_inner">
                  <span></span>
                  <img
                    src={require("../../image/new-page/viu-project.svg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTwo;
