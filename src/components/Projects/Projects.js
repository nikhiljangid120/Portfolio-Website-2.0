import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import connect4 from "../../Assets/Projects/connect4.png";
import quiz from "../../Assets/Projects/quiz.png";
import store from "../../Assets/Projects/store.png";
import todo from "../../Assets/Projects/todo.png";
import rock from "../../Assets/Projects/rock.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently 👇 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="E-Commerce Website"
              description="Developed an E-Commerce website using React.js, Material-UI, and Firebase. Features include product listings, user authentication, shopping cart, and payment gateway integration. This project demonstrates my skills in building a dynamic, responsive, and functional web application."
              ghLink="https://github.com/nikhiljangid120/e-commerce/tree/main/Task%202"
              demoLink="https://nikhiljangid120.github.io/e-commerce/Task%202/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connect4}
              isBlog={false}
              title="Connect 4 Game"
              description="Created a Connect 4 game using HTML, CSS, and JavaScript. The game includes features like player vs. player mode, sound effects, and an intuitive UI. This project showcases my ability to build interactive web-based games and incorporate real-time features."
              ghLink="https://github.com/nikhiljangid120/connect-4_game"
              demoLink="https://nikhiljangid120.github.io/connect-4_game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz Application"
              description="Built a Quiz Application using HTML, CSS, and JavaScript under my internship at InternPe. The application includes multiple quiz categories, scoring, and timer features. This project highlights my skills in front-end development and creating engaging web experiences."
              ghLink="https://github.com/nikhiljangid120/Quiz-Application"
              demoLink="https://nikhiljangid120.github.io/Quiz-Application/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rock}
              isBlog={false}
              title="Rock Paper Scissors"
              description="Developed an interactive Rock Paper Scissors game using HTML, CSS, and JavaScript. The game features dynamic animations, scoring system, and responsive design, making it accessible on various devices. This project demonstrates my ability to create fun and interactive user experiences."
              ghLink="https://github.com/nikhiljangid120/Rock-Paper-Scissors"
              demoLink="https://nikhil-jangid-rpg-game.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo Application"
              description="Developed a Todo Application using HTML, CSS, and JavaScript. The application allows users to add, edit, and delete tasks with a simple and clean interface. It also supports filtering tasks by status (completed, pending), showcasing my ability to create practical web applications."
              ghLink="https://github.com/nikhiljangid120/CBTCIP/tree/main/Todo%20Website%20by%20Nikhil%20Jangid"
              demoLink="https://nikhiljangid120.github.io/CBTCIP/Todo%20Website%20by%20Nikhil%20Jangid/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="Created a Personal Portfolio website using HTML, CSS, and JavaScript to showcase my skills, projects, and experiences. The site features smooth navigation, responsive design, and a contact form. This project demonstrates my ability to build professional and visually appealing personal branding websites."
              ghLink="https://github.com/nikhiljangid120/CBTCIP/tree/main/Personal%20Portfolio"
              demoLink="https://nikhiljangid120.github.io/CBTCIP/Personal%20Portfolio/index.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
