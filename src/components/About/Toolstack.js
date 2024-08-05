import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiSlack, SiVercel, SiMacos } from "react-icons/si";

function Toolstack() {
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

  const tools = [
    { component: <SiMacos />, color: "#FC4100" },           // macOS black
    { component: <SiVisualstudiocode />, color: "#007ACC" }, // VSCode blue
    { component: <SiPostman />, color: "#FF6C37" },         // Postman orange
    { component: <SiSlack />, color: "#4A154B" },           // Slack purple
    { component: <SiVercel />, color: "#000000" },          // Vercel black
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{
            ...iconContainerStyle,
            ...(hoveredIndex === index ? { ...iconHoverStyle, color: tool.color } : {}),
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div style={iconStyle}>{tool.component}</div>
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

export default Toolstack;
