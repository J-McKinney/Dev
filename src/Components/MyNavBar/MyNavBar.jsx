import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import NavStyle from "./MyNavBar.module.css";

class MyNavBar extends Component {
  state = {
    show: true,
    scrollPos: 0,
    open: false,
    changeNavBar: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onscroll);
    console.log("componentDidMount : ", this.state.open);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate: ", this.state.open);
  }

  onscroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  toggleCollapse = (e) => {
    e.preventDefault();
    this.setState({ changeNavBar: !this.state.changeNavBar });
    if (this.state.open === false) {
      this.setState({ open: true });
    } else if (this.state.open === true) {
      this.setState({ open: false });
    } else {
      this.setState({ open: false });
    }
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
    const bar = {
      width: "35px",
      height: "5px",
      backgroundColor: "#333",
      margin: "4px 0",
      transition: "0.4s",
    };
    const changeBar1 = {
      width: "35px",
      height: "5px",
      backgroundColor: "#333",
      margin: "4px 0",
      transition: "0.4s",
      transform: "rotate(-45deg) translate(-8px, 6px)",
    };
    const changeBar2 = {
      width: "35px",
      height: "5px",
      backgroundColor: "#333",
      margin: "4px 0",
      transition: "0.4s",
      opacity: "0",
    };
    const changeBar3 = {
      width: "35px",
      height: "5px",
      backgroundColor: "#333",
      margin: "4px 0",
      transition: "0.4s",
      transform: "rotate(45deg) translate(-7px, -6px)",
    };
    return (
      <>
        <div
          className={NavStyle.navBarWrapper}
          style={this.state.show ? active : hidden}
        >
          <div className={NavStyle.navbar}>
            <div className={NavStyle.buttonWrapper}>
              <Button
                className={NavStyle.menuButton}
                aria-controls="example-collapse-text"
                aria-expanded={this.state.open}
                onClick={this.toggleCollapse}
              >
                <div className={NavStyle.menuIconContainer}>
                  <div
                    className={NavStyle.bar1}
                    style={this.state.changeNavBar ? changeBar1 : bar}
                  ></div>
                  <div
                    className={NavStyle.bar2}
                    style={this.state.changeNavBar ? changeBar2 : bar}
                  ></div>
                  <div
                    className={NavStyle.bar3}
                    style={this.state.changeNavBar ? changeBar3 : bar}
                  ></div>
                </div>
              </Button>
              <Collapse in={this.state.open}>
                <div
                  id="example-collapse-text"
                  className={NavStyle.collapsingContent}
                >
                  <ul>
                    <li>Hello</li>
                    <li>World</li>
                  </ul>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyNavBar;
