import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"><b>NIKHIL JANGID </b></span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I'm pursuing my education at Amity University Rajasthan
            <br />
            and currently in my pre-final year of B Tech CSE 😎 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Online Content Creation
            </li>
          </ul>

          <p style={{
  background: "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "1.5em",
  fontWeight: "bold",
  textAlign: "center",
  margin: "20px 0",
  transition: "all 0.3s ease",
  cursor: "pointer",
  textShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
}} 
onMouseEnter={(e) => {
  e.target.style.WebkitTextFillColor = "#ffffff";
  e.target.style.textShadow = "0 0 15px #fcb045, 0 0 25px #fd1d1d, 0 0 35px #833ab4";
}}
onMouseLeave={(e) => {
  e.target.style.WebkitTextFillColor = "transparent";
  e.target.style.textShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
}}>
  "Innovation distinguishes between a leader and a follower."
</p>

<footer
  className="blockquote-footer"
  style={{
    fontSize: "1.2em",
    fontWeight: "bold",
    color: "#555",
    transition: "all 0.3s ease",
    textAlign: "center",
    cursor: "pointer",
    textShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    letterSpacing: "0.5px"
  }}
  onMouseEnter={(e) => {
    e.target.style.color = "#ffd700"; // Golden color
    e.target.style.textShadow = "0 0 15px #ffd700, 0 0 25px #ffd700";
    e.target.style.fontSize = "1.3em"; // Increase font size
    e.target.style.transform = "scale(1.1)"; // Slightly enlarge text
  }}
  onMouseLeave={(e) => {
    e.target.style.color = "#555";
    e.target.style.textShadow = "0 0 5px rgba(0, 0, 0, 0.1)";
    e.target.style.fontSize = "1.1em"; // Reset font size
    e.target.style.transform = "scale(1)"; // Reset scale
  }}
>
  Nikhil Jangid
</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
