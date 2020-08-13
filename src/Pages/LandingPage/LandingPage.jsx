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
              <h1 className={Style.h1Name}>Jesse McKinney</h1>
              <p className={Style.introP}>
                <bold className={Style.letter}>C</bold>urrently living in
                Marietta, Georgia. I'm a Bartender and Server working full-time
                for a local Golf and Country Club. Over the past 2 years, I
                discovered the world of coding/programming and my passion for a
                long time career has changed. I started learning the basics from
                free website tutorials and soon decided to go back to school for
                a more advanced approach on the subject. Before I knew it, I was
                creating full websites and programs. I'm now a full-time Full
                Stack Flex Web Developer working freelance and looking for a
                full-time job opportunity to further my experience and career.
              </p>
            </div>
            <div id={Style.atl} className="col-md-3">
              <img className={Style.atlanta} src={ATL} alt="ATL City" />
            </div>
          </Row>
        </Container>
      </div>
      <MyCarousel />

      <div className={Style.projectWrapper}>
        <Container
          id="project-section"
          fluid
          className={Style.projectContainer}
        >
          <Row className={Style.projectRow}></Row>
        </Container>
      </div>

      <svg
        className={Style.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#282c34"
          fill-opacity="1"
          d="M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,181.3C672,181,768,235,864,256C960,277,1056,267,1152,266.7C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <Footer />
    </>
  );
}

export default LandingPage;
