import React, { Component } from "react";
import ScrollNav from "./ScrollNav";
import dummyText from "../../../data/dummytext";
import ScrollSection from "./ScrollSection";
import "./Scroll.css";

class Scroll extends Component {
  render() {
    return (
      <div className="scroll-container">
        <ScrollNav />
        <ScrollSection
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <ScrollSection
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <ScrollSection
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <ScrollSection
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <ScrollSection
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default Scroll;