import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterStyle from "./MyFooter.module.css";

class MyFooter extends Component {
  render() {
    return (
      <>
        <Container className={FooterStyle.slider} id="contact-section">
          <Row className={FooterStyle.footerName}>
            <Col>
              <h3>Contact Information:</h3>
            </Col>
            <Col>
              <h3>Follow Me:</h3>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className={FooterStyle.Col}>
              <ul className={FooterStyle.ul}>
                <li className={FooterStyle.li}>
                  <h5 className={FooterStyle.h5}>
                    <a
                      className={FooterStyle.a}
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=JesseMcKinney513&#64gmail.com&su=ContactingYouOnPortfolioEmail"
                    >
                      <code>@</code>Gmail
                    </a>
                  </h5>
                </li>
                <li className={FooterStyle.li}>
                  <h5 className={FooterStyle.h5}>
                    <a
                      className={FooterStyle.a}
                      href="https://www.linkedin.com/in/jesse-mckinney-4a3b10185?trk=people-guest_profile-result-card_result-card_full-click"
                    >
                      LinkedIn
                    </a>
                  </h5>
                </li>
              </ul>
            </Col>
            <Col className={FooterStyle.Col}>
              <ul className={FooterStyle.ul}>
                <li className={FooterStyle.li}>
                  <h5 className={FooterStyle.h5}>
                    <a
                      className={FooterStyle.a}
                      href="https://github.com/J-McKinney"
                    >
                      GitHub
                    </a>
                  </h5>
                </li>
                <li className={FooterStyle.li}>
                  <h5 className={FooterStyle.h5}>
                    <a
                      className={FooterStyle.a}
                      href="https://www.pinterest.com/jesse6446/"
                    >
                      Pinterest
                    </a>
                  </h5>
                </li>
                <li className={FooterStyle.li}>
                  <h5 className={FooterStyle.h5}>
                    <a
                      className={FooterStyle.a}
                      href="https://instagram.com/jessman51386?igshid=sfn5fawa2ea2"
                    >
                      Instagram
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
