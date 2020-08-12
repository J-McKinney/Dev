import React, { Component } from "react";
import NavStyle from "./MyNavBar.module.css";

class MyNavBar extends Component {
  state = {
    show: true,
    scrollPos: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onscroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }

  onscroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    return (
      <>
        <div></div>
      </>
    );
  }
}

export default MyNavBar;
