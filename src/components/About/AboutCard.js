import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there, I am <span className="purple"> Karmanya Singh </span>
            from <span className="purple"> Gurugram, India.</span>
            <br />
            Currently a student at Shoolini University, Solan,
            <br />
            I'm pursuing B.Tech CSE (ML & AI) - 2021-2025. 
            <br />
            <br />
            Apart from coding, some other interests that I have
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
            <li className="about-activity">
              <ImPointRight /> Wrestling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            My Motto, "Even if it works, there's always room for improvement"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
