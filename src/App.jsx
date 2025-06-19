import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from "./assets/logo-dark-svg.svg";
import backtotop from "./assets/backtotop.svg";
import navcross from "./assets/navcross.svg";
import heroimage from "./assets/hero-image.svg";
import html5 from "./assets/Html 5.svg";
import css3 from "./assets/CSS3.svg";
import javascript from "./assets/JavaScript.svg";
import bootstrap from "./assets/Bootstrap.svg";
import react from "./assets/React Native.svg";
import nodeJs from "./assets/Node Js.svg";
import figma from "./assets/Figma.svg";
import canva from "./assets/Canva.svg";
import firebase from "./assets/Firebase.svg";
import java from "./assets/Java.svg";
import mysql from "./assets/MySQL Logo.svg";
import cProgramming from "./assets/C Programming.svg";
import git from "./assets/Git.svg";
import github from "./assets/GitHub.svg";
import arrow from "./assets/arrow.svg";
import sayhi from "./assets/sayhi.svg";
import AnimatedCursor from "react-animated-cursor";
import "animate.css";
import "./App.css";
import { Analytics } from '@vercel/analytics/react';

// Navbar Component 
const Navbar = ({ isNavOpen, toggleNav, topcontentRef, navCrossRef }) => (
  <div className="top-content w-100 top-0 d-flex justify-content-between position-fixed">
    <div className="top-content-left animate__animated animate__slideInRight">
      <div className="nav-logo-bg d-flex justify-content-center align-items-center">
        <img className="logo-svg" src={logo} alt="logo" />
      </div>
    </div>
    <div
      className={`top-content-right bg bg-dark ${isNavOpen ? "nav-open" : ""}`}
      ref={topcontentRef}
    >
      <div className="top-nav-content d-flex flex-column justify-content-end align-items-end m-3">
        <div className="navbar-cross" onClick={toggleNav}>
          <img
            src={navcross}
            className="navcross-svg"
            alt="navcross"
            ref={navCrossRef}
          />
        </div>
        <ul className="top-nav flex-column d-flex align-items-stretch montserrat-regular text-end mt-3">
          <li className="nav-item d-flex justify-content-end align-items-center position-relative">
            <div className="nav-bg-div position-absolute"></div>
            <div className="nav-link ms-1 position-relative z-index-1">
              <a href="#contact">Reach Out</a>
            </div>
          </li>
          <li className="nav-item d-flex justify-content-end align-items-center position-relative">
            <div className="nav-bg-div position-absolute"></div>
            <div className="nav-link ms-1 position-relative z-index-1">
              <a href="#projects">See My Work</a>
            </div>
          </li>
          <li className="nav-item d-flex justify-content-end align-items-center position-relative">
            <div className="nav-bg-div position-absolute"></div>
            <div className="nav-link ms-1 position-relative z-index-1">
              Resume
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

// BackToTop Component 
const BackToTop = ({ backtotopRef }) => (
  <div className="back-to-top-div position-fixed bottom-0 end-0 m-3">
    <img
      className="back-to-top"
      src={backtotop}
      alt="backtotop"
      ref={backtotopRef}
    />
  </div>
);

// LandingSection Component 
const LandingSection = () => (
  <section
    id="landing-section"
    className="w-100 d-flex justify-content-center align-items-center"
  >
    <div className="landing-content container-fluid">
      <div className="title-text container-fluid d-flex flex-column align-items-center justify-content-center">
        <div
          className="social-links d-flex font-thunder-bold-lc gap-5 mb-5 fast-scroll animate__animated animate__fadeInDownBig"
          id="fastScroll"
        >
          <div className="social-tile d-flex align-items-end">
            <div className="social-tile-text fs-2">
              <a
                href="https://github.com/devbagga2675"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                GITHUB
              </a>
            </div>
            <div className="social-tile-icon">
              <img src={github} alt="" height={40} />
            </div>
          </div>
          <div className="social-tile d-flex align-items-end">
            <div className="social-tile-text fs-2">
              <a
                href="https://www.linkedin.com/in/dev-bagga-458879288/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                LINKEDIN
              </a>
            </div>
            <div className="social-tile-icon">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/color/40/linkedin.png"
                alt="linkedin"
              />
            </div>
          </div>
          <div className="social-tile d-flex align-items-end">
            <div className="social-tile-text fs-2">
              <a
                href="https://dribbble.com/devdesigns26"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                DRIBBBLE
              </a>
            </div>
            <div className="social-tile-icon">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ultraviolet/40/dribbble.png"
                alt="dribbble"
              />
            </div>
          </div>
        </div>
        <div className="title-text-heading font-thunder-black-lc text-center w-100">
          DEV BAGGA
        </div>
        <div className="title-text-sub-heading w-100 d-flex justify-content-between caveat-fourHun align-items-center row-wrap w-100">
          <div className="sub-heading-text d-flex flex-wrap animate__animated animate__fadeInLeft">
            <div className="sub-heading-div me-4 d-flex align-items-center position-relative">
              <div className="sub-heading-bg-div position-absolute"></div>
              <div className="sub-heading-text ms-4 position-relative z-index-1">
                UI/UX Designer
              </div>
            </div>
            <div className="sub-heading-div me-4 d-flex align-items-center position-relative">
              <div className="sub-heading-bg-div position-absolute"></div>
              <div className="sub-heading-text ms-4 position-relative z-index-1">
                Frontend Developer
              </div>
            </div>
          </div>
          <div className="sub-heading-graphics font-thunder-black-lc animate__animated animate__fadeInRight">
            {"</>"}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// AboutMeSection Component 
const AboutMeSection = () => {
  const skills = [
    html5,
    css3,
    javascript,
    bootstrap,
    react,
    nodeJs,
    figma,
    canva,
    firebase,
    git,
    github,
    mysql,
    java,
    cProgramming,
  ];

  return (
    <section id="aboutme" className="content-section container-fluid mx-1 p-2">
      <motion.div
        className="title-text content-heading font-thunder-black-lc text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }} 
      >
        BUILDING MODERN USER EXPERIENCES
      </motion.div>
      <div className="about-me-content d-flex justify-content-center align-items-center mt-2 flex-wrap">
        <motion.div
          className="about-me-content-text d-flex flex-column justify-content-end mx-3 mb-5 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.05 }} 
        >
          <div className="about-me-content-text-1 caveat-fourHun mt-5">
            Hello there! I'm Dev, an undergrad student. I like designing,
            developing, watching movies, and sketching.
          </div>
          <motion.div
            className="about-me-content-text-2 montserrat-regular mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.075 }} 
          >
            “Not a traditional graphic designer focused solely on visuals but I
            enjoy sketching and crafting clean, minimalist interfaces.”
          </motion.div>
          <motion.div
            className="about-me-content-text-3 montserrat-regular mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.1 }} 
          >
            “Dev is in my name, so it's no surprise I love developing just as
            much as designing.”
          </motion.div>
        </motion.div>
        <motion.img
          src={heroimage}
          alt=""
          className="about-me-content-image"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.15 }} 
        />
      </div>
      <motion.div
        className="skillset-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.2 }} 
      >
        <div className="skillset-heading text-center font-thunder-extra-bold-lc">
          SKILLSET
        </div>
        <div className="row skillset-tiles d-flex flex-wrap justify-content-center align-items-center">
          {skills.map((skill, index) => (
            <motion.img
              key={index}
              src={skill}
              alt={skill}
              className="skillset-tile my-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.025 + 0.15 }} 
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// ProjectsSection Component 
const ProjectsSection = () => (
  <section id="projects" className="content-section container-fluid mx-1 p-2">
    <div className="container-fluid my-work-section py-5">
      <div className="d-flex flex-column">
                <motion.div
          className="my-3 project-div"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.125 }} 
        >
          <div className="project-heading d-flex gap-5 project-container">
            <h3 className="font-thunder-black-lc title-text text-white project-title">
              <a
                className="footer-link"
                href="https://dribbble.com/shots/26155879"
                target="_blank"
                rel="noopener noreferrer"
              >
                Auxitech
              </a>
            </h3>
            <img src={arrow} alt="" className="project-arrow" />
          </div>
          <p className="montserrat-regular text-dark-teal">[2025] Design Project</p>
        </motion.div>
        <motion.div
          className="my-3 project-div"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.05 }} 
        >
          <div className="project-heading d-flex gap-5 project-container">
            <h3 className="font-thunder-black-lc title-text text-white project-title">
              <a
                className="footer-link"
                href="https://www.figma.com/proto/qUoEu889rebP5uSya0jz2k/Untitled?page-id=0%3A1&node-id=1001-15&viewport=1314%2C774%2C0.32&t=ACNpPr8LwecGmP3C-1&scaling=scale-down&content-scaling=fixed"
                target="_blank"
                rel="noopener noreferrer"
              >
                VOYA
              </a>
            </h3>
            <img src={arrow} alt="" className="project-arrow" />
          </div>
          <p className="montserrat-regular text-dark-teal">[2024] Design Project</p>
        </motion.div>
        <motion.div
          className="my-3 project-div"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.075 }} 
        >
          <div className="project-heading d-flex gap-5 project-container">
            <h3 className="font-thunder-black-lc title-text text-white project-title">
              <a
                className="footer-link"
                href="https://optolinq.online/#homepage"
                target="_blank"
                rel="noopener noreferrer"
              >
                optolinq.online
              </a>
            </h3>
            <img src={arrow} alt="" className="project-arrow" />
          </div>
          <p className="montserrat-regular text-dark-teal">[2024] Internship Project</p>
        </motion.div>
        <motion.div
          className="my-3 project-div"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.1 }} 
        >
          <div className="project-heading d-flex gap-5 project-container">
            <h3 className="font-thunder-black-lc title-text text-white project-title">
              PORTFOLIO
            </h3>
            <img src={arrow} alt="" className="project-arrow" />
          </div>
          <p className="montserrat-regular text-dark-teal">[2025] Personal Project</p>
        </motion.div>
        <motion.div
          className="my-3 project-div"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.125 }} 
        >
          <div className="project-heading d-flex gap-5 project-container">
            <h3 className="font-thunder-black-lc title-text text-white project-title">
              <a
                className="footer-link"
                href="https://dribbble.com/devdesigns26"
                target="_blank"
                rel="noopener noreferrer"
              >
                100 DAYS OF DESIGN
              </a>
            </h3>
            <img src={arrow} alt="" className="project-arrow" />
          </div>
          <p className="montserrat-regular text-dark-teal">Ongoing design practice</p>
        </motion.div>
      </div>
    </div>
  </section>
);

// ContactSection Component 
const ContactSection = () => (
  <section
    id="contact"
    className="content-section container-fluid mx-1 p-2"
    style={{ height: "100vh", width: "100vw" }}
  >
    <div className="contact-section-div h-100 w-100 d-flex justify-content-center align-items-center position-relative">
      <div className="contact-content d-flex flex-wrap justify-content-start m-3">
        <motion.div
          className="sayhi-image me-5 ms-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }} 
        >
          <img src={sayhi} alt="" height="400" />
        </motion.div>
        <div className="contact-text-content p-3 d-flex flex-column justify-content-start">
          <div className="contact-me-text-message-links">
            <motion.div
              className="contact-small-text montserrat-regular"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.05 }} 
            >
              email me at
            </motion.div>
            <motion.div
              className="contact-large-text montserrat-regular mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.1 }} 
            >
              devbagga2675@outlook
              <img src={arrow} alt="" height="30" className="ms-2 inline-arrow" />
            </motion.div>
            <motion.div
              className="contact-small-text montserrat-regular"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              or hit me up on
            </motion.div>
            <motion.div
              className="contact-large-text montserrat-regular mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Linkedin
              <img src={arrow} alt="" height="30" className="ms-2 inline-arrow" />
            </motion.div>
          </div>
          <div className="contact-me-socials-and-docs d-flex">
            <div className="col-one d-flex flex-column me-5">
              <motion.a
                href="https://github.com/devbagga2675"
                className="footer-link fs-5 fs-md-4 fs-lg-4 montserrat-regular mt-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.25 }} 
              >
                GITHUB
              </motion.a>
              <motion.a
                href="http://"
                className="footer-link fs-5 fs-md-4 fs-lg-4 montserrat-regular mt-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                DRIBBBLE
              </motion.a>
            </div>
            <div className="col-two d-flex flex-column">
              <motion.a
                href="#projects"
                className="footer-link fs-5 fs-md-4 fs-lg-4 montserrat-regular mt-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.4 }} 
              >
                MY WORK
              </motion.a>
              <motion.a
                href="http://"
                className="footer-link fs-5 fs-md-4 fs-lg-4 montserrat-regular mt-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.45 }} 
              >
                MY RESUME
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer Component 
const Footer = () => (
  <div className="page-end-text montserrat-regular fs-6 text-center bottom-0 mb-3 w-100">
    This website was designed in FIGMA, and developed using REACTJS and it's
    compatible libraries.
    <br />
    The icons are from icons8
  </div>
);

// Main App Component 
function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const backtotopRef = useRef();
  const topcontentRef = useRef();
  const navCrossRef = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsNavOpen(false), 3000);

    const backtotopbutton = backtotopRef.current;
    const topcontentright = topcontentRef.current;
    const navCross = navCrossRef.current;
    const fastScrollElement = document.getElementById("fastScroll");

    if (!backtotopbutton || !topcontentright || !navCross || !fastScrollElement) {
      console.error("One or more elements not found");
      return () => clearTimeout(timeoutId);
    }

    const handleBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => {
      backtotopbutton.style.transform =
        window.scrollY > 100 ? "rotate(0deg)" : "rotate(180deg)";
    };
    const handleSpeedScroll = () => {
      let scrollPosition = window.scrollY;
      fastScrollElement.style.transform = `translateY(${-scrollPosition * 0.4}px)`;
    };

    backtotopbutton.addEventListener("click", handleBackToTop);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSpeedScroll);

    return () => {
      clearTimeout(timeoutId);
      backtotopbutton.removeEventListener("click", handleBackToTop);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSpeedScroll);
    };
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="app position-relative">
      <Analytics/>
      {window.innerWidth < 768 ? (
        ""
      ) : (
        <AnimatedCursor
          color="#fff"
          innerSize={26}
          trailingSpeed={12}
          outerSize={200}
          innerScale={1}
          outerScale={6}
          outerAlpha={0.4}
          innerStyle={{
            border: "2px solid white",
            backgroundColor: "var(--cursor-color)",
            content: "</>",
          }}
          outerStyle={{ backgroundColor: "#ffffff", mixBlendMode: "exclusion" }}
        />
      )}
      <div className="bg-div position-fixed"></div>
      <Navbar
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
        topcontentRef={topcontentRef}
        navCrossRef={navCrossRef}
      />
      <BackToTop backtotopRef={backtotopRef} />
      <div className="web-page-content d-flex flex-column align-items-center position-relative z-index-0">
        <LandingSection />
        <AboutMeSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;