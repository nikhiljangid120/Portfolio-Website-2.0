import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Student",
          "Full-Stack Engineer",
          "Web Development Enthusiast",
          "Open Source Contributor",
          "JavaScript Aficionado",
          "Tech Blogger",
          "UI/UX Designer",
          "Cloud Computing Expert",
          "Machine Learning Enthusiast",
          "Mobile App Developer",
          "Cybersecurity Learner",
          "Blockchain Explorer",
          "Agile Methodologist",
          "API Integration Specialist",
          "Continuous Learner"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
