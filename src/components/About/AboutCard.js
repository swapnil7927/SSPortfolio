import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Swapnil Sahu </span>
            from <span className="purple"> Satna, India.</span>
            <br />
            I have done my B.Tech from NIT KURUKSHETRA in Production And Industrial Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Relish Each Phase of Your Life with Goal in Eyes !"{" "}
          </p>
          <footer className="blockquote-footer">Swapnil(SS)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
