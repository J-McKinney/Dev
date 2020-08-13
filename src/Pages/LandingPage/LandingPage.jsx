import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import MyCarousel from "../../Components/MyCarousel/MyCarousel";
import ATL from "../../images/atlanta.jpg";
import Footer from "../../Components/MyFooter/MyFooter";
import Style from "./LandingPage.module.css";

function LandingPage(props) {
  return (
    <>
      <div id="top-of-page" className={Style.landingWrapper}>
        <NavBar />
        <Container fluid className={Style.container}>
          <Row className={Style.row}>
            <div id={Style.name} className="col-md-9">
              <h2 className={Style.h2Name}>Jesse McKinney</h2>
              <p>
                Born in Atlanta, Georgia. I look forward to each and every
                project I begin. Whether it is an assignment or a self-motivated
                project, I take both very seriously. From the starting snippet
                of code to the final finishing touches of a new app, each moment
                offers an opportunity for growth and improvement. Learning to
                design, build, and write code. Has been one of my biggest
                projects, to this day...
              </p>
            </div>
            <div id={Style.atl} className="col-md-3">
              <img className={Style.atlanta} src={ATL} alt="ATL City" />
            </div>
          </Row>
        </Container>
      </div>
      <MyCarousel />
      <Footer />
    </>
  );
}

export default LandingPage;
