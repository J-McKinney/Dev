import React, { Component } from "react";
import Confetti from "../../images/ConfettiEffectPic.PNG";
import Cracked from "../../images/CrackedFontPic.PNG";
import Stars from "../../images/InfiniteStarsPic.PNG";
import Box from "../../images/InfinityBoxPic.PNG";
import Water from "../../images/RealWaterPic.PNG";
import Swiper from "swiper";
////////////CSS////////////
//swiper css must come first
import "swiper/css/swiper.min.css";
// your custom css must come second to overwrite certain stylings in swiper.css
import Style from "./MyCarousel.module.css";

class MyCarousel extends Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      speed: 800, // controls the speed between each slide when arrow click or grabCursor
      grabCursor: true, // little hand cursor over slides
      loop: true, // allows the slides to loop from the last slide back to the first in that direction
      centeredSlides: true, // helps to center the slides
      slidesPerView: 2, // allows the slide you're looking at to be the centered slide with the slide before and the slide after to be hanging just off the page from the left and right of it
      parallax: true, // Helps focus the users attention to the slide in front/center
      autoplay: {
        // allows for autoplay for the slides
        delay: 2500, // a delay for each slide before it flips to the next one
        disableOnInteraction: false, // if you want to stop autoplay with a click to the slides
      },
      effect: "coverflow", // coverflow is the type of effect on the pictures
      coverflowEffect: {
        // the effect that you want to use
        rotate: 43, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 200, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows: true, // Enables slides shadows
      },
      pagination: {
        // Object with navigation parameters
        el: ".swiper-pagination", // little dots under the slides for navigation
        clickable: true, // allows you to click on the little dots
      },
      navigation: {
        // Object with navigation parameters
        nextEl: ".swiper-button-next", // arrows on the side of the slides
        prevEl: ".swiper-button-prev", // arrows on the side of the slides
      },
    });
  }
  render() {
    return (
      <>
        <div className={Style.wrapper}>
          <div id={Style.wrapper} className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a
                  href="https://j-mckinney.github.io/ConfettiEffect/"
                  className={Style.pSlide}
                  style={{ color: "#fff" }}
                >
                  <p className={Style.pSlide}>
                    Click Here To See Confetti Effect
                  </p>
                </a>
                <img
                  className="d-block w-100"
                  src={Confetti}
                  alt="Confetti Effect"
                />
              </div>
              <div className="swiper-slide">
                <a
                  href="https://j-mckinney.github.io/CrackedFont/"
                  className={Style.pSlide}
                  style={{ color: "#fff" }}
                >
                  <p className={Style.pSlide}>Click Here To See Cracked Font</p>
                </a>
                <img
                  className="d-block w-100"
                  src={Cracked}
                  alt="Cracked Font"
                />
              </div>
              <div className="swiper-slide">
                <a
                  href="https://j-mckinney.github.io/InfinityStars/"
                  className={Style.pSlide}
                  style={{ color: "#fff" }}
                >
                  <p className={Style.pSlide}>
                    Click Here To See Infinite Stars
                  </p>
                </a>
                <img
                  className="d-block w-100"
                  src={Stars}
                  alt="Infinite Stars"
                />
              </div>
              <div className="swiper-slide">
                <a
                  href="https://j-mckinney.github.io/InfinityBox/"
                  className={Style.pSlide}
                  style={{ color: "#fff" }}
                >
                  <p className={Style.pSlide}>Click Here To See Infinity Box</p>
                </a>
                <img className="d-block w-100" src={Box} alt="Infinity Box" />
              </div>
              <div className="swiper-slide">
                <a
                  href="https://j-mckinney.github.io/Realistic-Water-Effect/"
                  className={Style.pSlide}
                  style={{ color: "#fff" }}
                >
                  <p className={Style.pSlide}>
                    Click Here To See Realistic Water Effect
                  </p>
                </a>
                <img
                  className="d-block w-100"
                  src={Water}
                  alt="Realistic Water Effect"
                />
              </div>
            </div>
            <div className="swiper-pagination" />
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
      </>
    );
  }
}

export default MyCarousel;
