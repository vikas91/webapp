import React from "react";
import {Element, animateScroll as scroll, scroller } from 'react-scroll';
import { Component } from "react";

class ScrollSection extends Component {

  constructor(props){
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  
  render(){
    return (
      <Element className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="section-content" id={this.props.id}>
          <h1>{this.props.title}</h1>
          <p>{this.props.subtitle}</p>
        </div>
      </Element>
    );
  }
}

export default ScrollSection; 
