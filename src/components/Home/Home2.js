import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Design and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              👨‍🎨 I'm Naveen,
              <i>
                <b className="purple">
                  {" "}
                  a passionate UI/UX designer with 2.2 years of experience{" "}
                </b>
              </i>
              <br />
              <br />
              🎨 Skills: &nbsp;
              <i>
                <b className="purple"> Figma, CorelDraw, Illustrator</b> and
                <b className="purple"> Adobe XD</b>
              </i>
              <br />
              <br />
              💡 Interests: &nbsp;
              <i>
                <b className="purple"> Crafting user-centric digital experiences and striking visual identities</b> 
              </i>
              <br />
              <br />
              🌱 Learning: &nbsp;
              <i>
                <b className="purple"> Exploring the latest in design tools and trends.
                </b> 
              </i>
              <br />
              <br />
              📈  Strengths: &nbsp;
              <i>
                <b className="purple"> Wireframing, Prototyping, Visual Design, User Research
                </b> 
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/peddi-naveen-89479a230"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.behance.net/peddinaveen1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
               <FaBehance />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
