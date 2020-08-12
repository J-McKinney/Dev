import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterStyle from "./MyFooter.module.css";

class MyFooter extends Component {
  render() {
    return (
      <>
        <div className={FooterStyle.CurvedDivTop}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#282c34"
              fill-opacity="1"
              d="M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,181.3C672,181,768,235,864,256C960,277,1056,267,1152,266.7C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <Container className={FooterStyle.slider}>
          <Row>
            <Col>
              <ul className={FooterStyle.ul}>
                <li className={FooterStyle.li}>
                  <h5 className={FooterStyle.h5}>
                    <a className={FooterStyle.a} href="/">
                      The World Of React 1
                    </a>
                  </h5>
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li className={FooterStyle.li}>
                  <h5 className={FooterStyle.h5}>
                    <a className={FooterStyle.a} href="/">
                      The World Of React 4
                    </a>
                  </h5>
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li className={FooterStyle.li}>
                  <h5 className={FooterStyle.h5}>
                    <a className={FooterStyle.a} href="/">
                      The World Of React 7
                    </a>
                  </h5>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className={FooterStyle.CurvedDivBottom}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#282c34"
              fill-opacity="1"
              d="M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,181.3C672,181,768,235,864,256C960,277,1056,267,1152,266.7C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </>
    );
  }
}

export default MyFooter;
