import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <p className="iconsText">Wireframing </p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <p className="iconsText">Prototyping</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <p className="iconsText">Visual Design</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <p className="iconsText">Interaction Design</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <p className="iconsText">User Research</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <p className="iconsText">Design Thinking</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="iconsText">Brand Consistency</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="iconsText">Team Collaboration</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p className="iconsText">User-Centered Design</p>
      </Col>

    </Row>
  );
}

export default Toolstack;
