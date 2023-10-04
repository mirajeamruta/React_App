import React, { useState } from "react";
import Typed from "react-typed";
import { ProgressBar } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const state = {
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      450: {
        items: 2,
        dots: false,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <div
        className="scroll-up-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-solid fa-angle-up"></i>
      </div>
      {/* socila media */}
      <div className="socil-0-0">
        <ul>
          <li className="facebook">
            Facebook
            <i class="fa-brands fa-facebook-f"></i>
          </li>
          <li className="instagram">
            Instagram
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li className="twitter">
            Whatsapp
            <i class="fa-brands fa-whatsapp"></i>
          </li>
          <li className="linkedin">
            Linkedin
            <i class="fa-brands fa-linkedin"></i>
          </li>
        </ul>
      </div>

      {/* ======= */}
      <div className="navbar-0">
        <div className="logo">
          <a href="#home">
            Portf<span>olio</span>
          </a>
        </div>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <a href="#home" className="menu-btn">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="menu-btn">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="menu-btn">
              Services
            </a>
          </li>
          <li>
            <a href="#teams" className="menu-btn">
            Teams
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-btn">
            Contact
            </a>
          </li>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i class="fa-solid fa-bars"></i>
          )}
        </button>
      </div>
      <section
        className="home"
        style={{
          backgroundImage: "url('../image/bg-image-28.jpg')",
        }}
      >
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Amruta M</div>
            <div className="text-3">
              And I'm a{" "}
              <span className="typing">
                <Typed
                  strings={["Junior Front End Developer"]}
                  typeSpeed={150}
                  backSpeed={50}
                  loop={true}
                />
              </span>
            </div>
            <a href="#">Contact me</a>
          </div>
        </div>
      </section>
      {/* About us */}

      <section>
        <div className="container production" style={{ padding: "0 80px" }}>
          <div className="fa" id="about">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="fro-0">
                  <div className="fro-img">
                    <img src="../image/bg-image-28.jpg" alt="jk" />
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-8">
                <div className="ghf">
                  <div className="about">
                    <h3>About Me</h3>
                  </div>
                  <div className="about-content mb-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  {/* Skill */}
                  <div className="skill">
                    <div className="developer mb-3">Skills</div>
                    <div className="skill-html mb-3">
                      <h4>Html</h4>
                      <div className="fgd">
                        <ProgressBar now={70} style={{ height: "10px" }} />
                      </div>
                    </div>
                    <div className="skill-html  mb-3">
                      <h4>Css</h4>
                      <div className="fgd">
                        <ProgressBar now={65} style={{ height: "10px" }} />
                      </div>
                    </div>
                    <div className="skill-html  mb-3">
                      <h4>Bootstrap</h4>
                      <div className="fgd">
                        <ProgressBar now={80} style={{ height: "10px" }} />
                      </div>
                    </div>
                    <div className="skill-html  mb-3">
                      <h4>Javascript</h4>
                      <div className="fgd">
                        <ProgressBar now={51} style={{ height: "10px" }} />
                      </div>
                    </div>
                    <div className="skill-html  mb-3">
                      <h4>React Js</h4>
                      <div className="fgd">
                        <ProgressBar now={57} style={{ height: "10px" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service */}

      <section>
        <div className="container production" style={{ padding: "0 80px" }}>
          <div className="ser-0" id="services">
            <div className="about">
              <h3>My Services</h3>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="full-sec mt-5 mb-3">
                  <div className="icon0 mb-3">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </div>
                  <div className="service-name">
                    <h4>Website Development</h4>
                    <p>
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="full-sec mt-5 mb-3">
                  <div className="icon0 mb-3">
                    <i class="fa-solid fa-display"></i>
                  </div>
                  <div className="service-name">
                    <h4>Website Design</h4>
                    <p>
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="full-sec mt-5 mb-3">
                  <div className="icon0 mb-3">
                    <i class="fa-solid fa-reply"></i>
                  </div>
                  <div className="service-name">
                    <h4>Mobile Responsive</h4>
                    <p>
                      I throw myself down among the tall grass by the stream as
                      I lie close to the earth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div
          className="container production"
          id="teams"
          style={{ padding: "0 80px" }}
        >
          <div className="ser-0">
            <div className="about">
              <h3>My Teams</h3>
            </div>
          </div>
          <div className="teams mt-5">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={20}
              nav={false}
              autoplay={true}
              responsive={state.responsive}
            >
              <div class="item">
                <div className="new-title">
                  <div className="tumbnail">
                    <img
                      src="../image/team-07.jpg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="overlay">
                    <div class="content">
                      <h4 class="title-0">Jone Due</h4>
                      <p class="designation">Sr. Web Developer</p>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-linkedin"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="new-title">
                  <div className="tumbnail">
                    <img
                      src="../image/team-01.jpg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="overlay">
                    <div class="content">
                      <h4 class="title-0">Jone Due</h4>
                      <p class="designation">Sr. Front-end Developer</p>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-linkedin"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="new-title">
                  <div className="tumbnail">
                    <img
                      src="../image/team-05.jpg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="overlay">
                    <div class="content">
                      <h4 class="title-0">Jone Due</h4>
                      <p class="designation">Sr. Graphic Designer</p>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-linkedin"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="new-title">
                  <div className="tumbnail">
                    <img
                      src="../image/team-06.jpg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="overlay">
                    <div class="content">
                      <h4 class="title-0">Jone Due</h4>
                      <p class="designation">Sr. Front-end Developer</p>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-linkedin"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="new-title">
                  <div className="tumbnail">
                    <img
                      src="../image/team-07.jpg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="overlay">
                    <div class="content">
                      <h4 class="title-0">Jone Due</h4>
                      <p class="designation">Sr. Web Developer</p>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-linkedin"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="new-title">
                  <div className="tumbnail">
                    <img
                      src="../image/team-01.jpg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="overlay">
                    <div class="content">
                      <h4 class="title-0">Jone Due</h4>
                      <p class="designation">Sr. Front-end Developer</p>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-linkedin"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="new-title">
                  <div className="tumbnail">
                    <img
                      src="../image/team-05.jpg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="overlay">
                    <div class="content">
                      <h4 class="title-0">Jone Due</h4>
                      <p class="designation">Sr. Graphic Designer</p>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-linkedin"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="new-title">
                  <div className="tumbnail">
                    <img
                      src="../image/team-06.jpg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="overlay">
                    <div class="content">
                      <h4 class="title-0">Jone Due</h4>
                      <p class="designation">Sr. Front-end Developer</p>
                    </div>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li>
                          <i class="fa-brands fa-linkedin"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* Footer */}

      <div className="fooet" id="contact">
        <div className="container">
          <div className="footerpo-s0">
            <div className="conten-0">
              <p>
              Copyright ©2022 All rights reserved Designed By<span style={{color:"#ef0963"}}> Amruta</span>
              </p>
              <ul>
                <li>
                  <span>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                 amrutamiraje2@gmail.com
                </li>
                <li>
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  +91-9741952569
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
