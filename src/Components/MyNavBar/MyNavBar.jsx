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
    const active = {
      zIndex: "1000",
      backgroundColor: "#61dafb",
      position: "fixed",
      height: "50px",
      width: "100%",
      visibility: "visible",
      transition: "all 200ms ease-in",
    };
    const hidden = {
      zIndex: "1000",
      backgroundColor: "#61dafb",
      position: "fixed",
      height: "50px",
      width: "100%",
      visibility: "hidden",
      transition: "all 200ms ease-out",
      transform: "translate(0, -100%)",
    };
    return (
      <>
        <div
          className={NavStyle.navBarWrapper}
          style={this.state.show ? active : hidden}
        >
          <div className={NavStyle.navbar}></div>
        </div>
      </>
    );
  }
}

export default MyNavBar;
