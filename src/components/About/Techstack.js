import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoLogoFigma } from "react-icons/io5";
import { DiIllustrator } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <p className="iconsText">Figma</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <p className="iconsText">CorelDraw</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <p className="iconsText">Illustrator</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <p className="iconsText">PhotoShop</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <p className="iconsText">Adobe suite</p>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <p className="iconsText">Premiere Pro</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <p className="iconsText">HTML</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <p className="iconsText">CSS</p>
        </Col>
      </Row>
      
    </>
  );
}

export default Techstack;
