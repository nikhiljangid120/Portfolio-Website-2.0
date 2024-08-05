import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [brandStyle, setBrandStyle] = useState({
    fontSize: '2rem',                     // Increase font size
    fontWeight: '700',                    // Make it bold
    fontFamily: 'Arizonia, cursive',      // Set font family to Arizonia
    background: 'linear-gradient(90deg, #ff7e5f, #feb47b)', // Apply gradient
    WebkitBackgroundClip: 'text',         // Use gradient as text color
    color: 'transparent',                 // Make text color transparent
    backgroundSize: '200% 100%',          // Adjust gradient size
    textShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)', // Add shadow effect
    transition: 'all 0.4s ease-in-out',   // Smooth transition
  });

  const handleMouseEnter = () => {
    setBrandStyle({
      ...brandStyle,
      transform: 'scale(1.1) rotate(-2deg)', // Slight zoom and rotation on hover
      color: '#fff', // Change text color
      textShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)', // Stronger shadow on hover
    });
  };

  const handleMouseLeave = () => {
    setBrandStyle({
      ...brandStyle,
      transform: 'scale(1) rotate(0deg)', // Revert zoom and rotation
      color: 'transparent', // Revert text color
      textShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)', // Original shadow
    });
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Arizonia&display=swap');

          @keyframes text-gradient {
            0% {
              background-position: 0%;
            }
            100% {
              background-position: 100%;
            }
          }
        `}
      </style>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand
            href="/"
            className="d-flex"
            style={brandStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Nikhil Jangid
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  href="/Services"
                  target="_parent"
                  rel="noreferrer"
                >
                  <ImBlog style={{ marginBottom: "2px" }} /> Services
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
