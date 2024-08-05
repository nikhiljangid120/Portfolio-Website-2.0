import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { FaCode, FaServer, FaMobile, FaLaptopCode } from 'react-icons/fa';
import Particle from '../Particle';

const ServiceCard = ({ icon, title, description }) => (
  <Card className="service-card mb-4 border-0 bg-transparent">
    <Card.Body className="text-white bg-dark p-4 rounded-3 h-100 d-flex flex-column transition-all duration-300 hover:shadow-lg hover:scale-105 hover:translate-y-[-5px]">
      <div className="text-center mb-4 transition-transform duration-300 hover:scale-125">
        {icon}
      </div>
      <Card.Title className="text-center fw-bold mb-3 transition-colors duration-300 hover:text-primary">{title}</Card.Title>
      <Card.Text className="text-muted flex-grow-1">{description}</Card.Text>
    </Card.Body>
  </Card>
);

const ClientSatisfaction = ({ percentage }) => (
  <div className="client-satisfaction mb-4 text-center text-white">
    <h3 className="fw-bold mb-3 transition-transform duration-300 hover:scale-110">Client Satisfaction</h3>
    <div className="position-relative">
      <ProgressBar 
        now={percentage} 
        className="bg-dark"
        style={{ height: '30px' }}
      />
      <div 
        className="position-absolute top-0 left-0 h-100 bg-success transition-all duration-1000" 
        style={{ width: `${percentage}%`, animation: 'growProgressBar 3s ease-out forwards' }}
      ></div>
      <span className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
        {percentage}%
      </span>
    </div>
    <p className="text-muted mt-3 transition-all duration-300 hover:text-white">{percentage}% Satisfied Clients</p>
  </div>
);

const TechBadge = ({ tech }) => (
  <span className="badge bg-secondary text-light m-2 p-2 fs-6 transition-all duration-300 hover:bg-primary hover:scale-110 hover:text-white shadow-sm rounded-pill cursor-pointer">
    {tech}
  </span>
);

const Services = () => {
  const services = [
    {
      icon: <FaCode size={40} className="text-primary transition-all duration-300 group-hover:text-white" />,
      title: "Web Development",
      description: "Creating responsive and dynamic websites using modern frameworks like React and Next.js."
    },
    {
      icon: <FaServer size={40} className="text-success transition-all duration-300 group-hover:text-white" />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and MongoDB."
    },
    {
      icon: <FaMobile size={40} className="text-warning transition-all duration-300 group-hover:text-white" />,
      title: "Mobile App Development",
      description: "Developing cross-platform mobile applications using React Native."
    },
    {
      icon: <FaLaptopCode size={40} className="text-danger transition-all duration-300 group-hover:text-white" />,
      title: "Full Stack Development",
      description: "End-to-end application development, from frontend to backend and everything in between."
    }
  ];

  const technologies = ['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS'];

  return (
    <section className="services-section py-5 position-relative overflow-hidden">
      <Particle />
      <Container className="position-relative">
        <h2 className="text-center mb-5 fw-bold display-4 text-white transition-transform duration-300 hover:scale-110">My Services</h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index}>
              <ServiceCard {...service} />
            </Col>
          ))}
        </Row>
        <Row className="mt-5 align-items-center text-white">
          <Col md={6}>
            <ClientSatisfaction percentage={95} />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold mb-4 transition-colors duration-300 hover:text-primary">Why Choose Me?</h3>
            <ul className="list-unstyled lead">
              {[
                'Expertise in modern web technologies',
                'Strong problem-solving skills',
                'Excellent communication and collaboration',
                'Commitment to delivering high-quality code',
                'Continuous learning and staying up-to-date with industry trends'
              ].map((item, index) => (
                <li key={index} className="mb-3 d-flex align-items-center transition-all duration-300 hover:translate-x-2 hover:text-primary">
                  <span className="me-2 text-success transition-transform duration-300 hover:scale-125">✓</span> {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h3 className="text-center mb-4 fw-bold text-white transition-transform duration-300 hover:scale-110">Technologies I Work With</h3>
            <div className="d-flex flex-wrap justify-content-center">
              {technologies.map((tech, index) => (
                <TechBadge key={index} tech={tech} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        @keyframes growProgressBar {
          0% { width: 0%; }
          100% { width: 95%; }
        }
        .services-section {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        }
        .service-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .client-satisfaction .progress-bar {
          transition: width 1.5s ease-in-out;
        }
        .tech-container {
          transition: all 0.3s ease-in-out;
        }
        .tech-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .tech-tooltip {
          position: absolute;
          z-index: 10;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease-in-out;
        }
        .tech-tooltip:hover {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .badge {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;