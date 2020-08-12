import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterStyle from "./MyFooter.module.css";

class MyFooter extends Component {
  render() {
    return (
      <>
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
                      The World Of React 2
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
                      The World Of React 3
                    </a>
                  </h5>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MyFooter;
