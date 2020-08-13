import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    // console.log("componentDidMount : ", this.state.open);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate: ", this.state.open);
  }

  onscroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
      open: false,
      changeNavBar: false,
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
      zIndex: "1001 !important",
      backgroundColor: "#5e6f819a",
      color: "#fff",
      position: "fixed",
      height: "50px",
      width: "100%",
      visibility: "visible",
      transition: "all 200ms ease-in",
    };
    const hidden = {
      zIndex: "1001 !important",
      backgroundColor: "#5e6f819a",
      color: "#fff",
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
      backgroundColor: "#fff",
      margin: "4px 0",
      transition: "0.4s",
    };
    const changeBar1 = {
      transform: "rotate(-45deg) translate(-8px, 6px)",
    };
    const changeBar2 = {
      opacity: "0",
    };
    const changeBar3 = {
      transform: "rotate(45deg) translate(-7px, -6px)",
    };
    return (
      <>
        {/* WRAPPER */}
        <div
          className={NavStyle.navBarWrapper}
          style={this.state.show ? active : hidden}
        >
          <div className={NavStyle.navbar}>
            <div className={NavStyle.buttonWrapper}>
              {/* WRAPPER */}

              {/* NAVBAR CONTENT */}
              <Row>
                <Col id={NavStyle.name} className="col-md-9">
                  <a
                    href="#top-of-page"
                    className={NavStyle.a}
                    style={{ color: "#fff" }}
                  >
                    Jesse McKinney
                  </a>
                </Col>
                <Col className={NavStyle.projects}>
                  <a
                    href="#project-section"
                    className={NavStyle.a}
                    style={{ color: "#fff" }}
                  >
                    Projects
                  </a>
                </Col>
                <Col className={NavStyle.contact}>
                  <a
                    href="#contact-section"
                    className={NavStyle.a}
                    style={{ color: "#fff" }}
                  >
                    Contact
                  </a>
                </Col>
                <Col>
                  {/* NAVBAR BUTTON */}
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
                  {/* NAVBAR BUTTON */}
                </Col>
              </Row>
              {/* NAVBAR CONTENT */}

              {/* COLLAPSE CONTENT */}
              <Collapse in={this.state.open}>
                <div
                  id="example-collapse-text"
                  className={NavStyle.collapsingContent}
                >
                  <div className={NavStyle.contentDiv}>
                    <Container className={NavStyle.contentContainer}>
                      <Row className={NavStyle.contentHeader}>
                        <h3 className={NavStyle.h3}>Favorite Projects</h3>
                      </Row>
                      <hr />
                      <Row className={NavStyle.contentRow}>
                        <Col className={NavStyle.contentCol}>
                          <ul className={NavStyle.ul}>
                            <li className={NavStyle.li}>
                              <a
                                href="https://j-mckinney.github.io/InfinityStars/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                Infinity Stars
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="https://j-mckinney.github.io/InfinityBox/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                Infinity Box
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                Thanos Snap Effect
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                SMB3 Card Game
                              </a>
                            </li>
                          </ul>
                        </Col>
                        <Col className={NavStyle.contentCol}>
                          <ul className={NavStyle.ul}>
                            <li className={NavStyle.li}>
                              <a
                                href="https://j-mckinney.github.io/ConfettiEffect/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                Confetti Effect
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="https://j-mckinney.github.io/CrackedFont/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                Cracked Font
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                Curved Container
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="https://j-mckinney.github.io/PerspectiveFont/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                Perspective Font
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                J-Bot
                              </a>
                            </li>
                          </ul>
                        </Col>
                        <Col className={NavStyle.contentCol}>
                          <ul className={NavStyle.ul}>
                            <li className={NavStyle.li}>
                              <a
                                href="https://j-mckinney.github.io/Realistic-Water-Effect/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                Real Water Effect
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                SimilTune
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                Neumorphism
                              </a>
                            </li>
                            <li className={NavStyle.li}>
                              <a
                                href="/"
                                className={NavStyle.a}
                                style={{
                                  color: "#fff",
                                  // backgroundColor: "black",
                                  borderRadius: "50px",
                                  padding: "5px",
                                }}
                              >
                                Reflective 3D Ball
                              </a>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </Collapse>
              {/* COLLAPSE CONTENT */}

              {/* WRAPPER */}
            </div>
          </div>
        </div>
        {/* WRAPPER */}
      </>
    );
  }
}

export default MyNavBar;
