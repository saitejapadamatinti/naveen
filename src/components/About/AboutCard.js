import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naveen Peddi </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            <br />
            💼 I am currently a Junior UI/UX Designer at Jigya Software Solutions.
            <br />
            🎓 I hold a B.A. in Visual Arts (Animation and VFX) from Jawaharlal Nehru University
            <br />
            <br />
            Apart from designing, I love to:
          </p>
          <ul>
            <li className="about-activity">
            🎨 Create Art

            </li>
            <li className="about-activity">
            📚 Read Books
            
            </li>
            <li className="about-activity">
            🍳 Experiment with Cookin
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Naveen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
