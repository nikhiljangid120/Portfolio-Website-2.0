import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from "react-icons/di";
import { SiNextdotjs, SiFirebase, SiPostgresql } from "react-icons/si";

function Techstack() {
  // State to track hover state for each icon
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to handle mouse enter
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const icons = [
    { component: <CgCPlusPlus />, color: "#3FA2F6" },   // C++ blue
    { component: <DiJavascript1 />, color: "#F7DF1E" }, // JavaScript yellow
    { component: <DiNodejs />, color: "#339933" },       // Node.js green
    { component: <DiReact />, color: "#61DAFB" },        // React blue
    { component: <DiMongodb />, color: "#47A248" },      // MongoDB green
    { component: <SiNextdotjs />, color: "#4A249D" },    // Next.js black
    { component: <DiGit />, color: "#F1502F" },          // Git orange
    { component: <SiFirebase />, color: "#FFCA28" },     // Firebase yellow
    { component: <SiPostgresql />, color: "#A7E6FF" },   // PostgreSQL blue
    { component: <DiPython />, color: "#3776AB" },       // Python blue
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((icon, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{
            ...iconContainerStyle,
            ...(hoveredIndex === index ? { ...iconHoverStyle, color: icon.color } : {}),
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div style={iconStyle}>{icon.component}</div>
        </Col>
      ))}
    </Row>
  );
}

// Inline styles for icon containers
const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2em',
  transition: 'all 0.3s ease',
  margin: '10px',
  borderRadius: '10px', // Rounded corners
  border: '2px solid transparent', // Initial border
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Initial shadow
};

const iconStyle = {
  cursor: 'pointer',
};

const iconHoverStyle = {
  transform: 'scale(1.2)',
  textShadow: '0 0 15px currentColor',
  border: '2px solid currentColor', // Matches the color of the icon on hover
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)', // Enhanced shadow on hover
};

export default Techstack;
