import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Jigya Software Solution"
              description="The NCL project offers online exams, detailed reports, and support forteachers, principals, admins, and a question bank for efficient educationalmanagement."
              ghLink=""
              demoLink="https://ncl.northsouth.org/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Stylodesk"
              description="The user interface screens for the highly configurable and user-friendly CRMsolution, StyloDesk CRM, were created to enhance daily business operations."
              ghLink=""
              demoLink="https://stylodesk.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Pristo Shop"
              description="The NCL project offers online exams, detailed reports, and support forteachers, principals, admins, and a question bank for efficient educationalmanagement."
              ghLink=""
              demoLink=""
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
