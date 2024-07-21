import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import iNotebook from "../../Assets/Projects/iNotebook.png";
import FireChat from "../../Assets/Projects/FireChat-App.png";
import Spotify from "../../Assets/Projects/Spotify-Clone.png";
import TextUtils from "../../Assets/Projects/Text-Utils.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FireChat}
              isBlog={false}
              title="FireChat-App(MERN)"
              description="Full-fledged social media app, encompassing real-time messaging, individual Chat. Real-time messaging using Socket.io for instantaneous communication."
              ghLink="https://github.com/swapnil7927/FireChat-App-MERN"
              demoLink="https://firechat-app-mern.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iNotebook}
              isBlog={false}
              title="iNoteBook(MERN)"
              description=" A user can signUp to create an account so he can store his notes. Further, notes can be retrieved by logging in
with the credentials used at the time of signUp.An extra level security is added by storing encrypted passwords on backend rather than plain text.
"
              ghLink="https://github.com/swapnil7927/iNoteBook-MERN"
              demoLink="https://inotebook-mern-client.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="Spotify-Clone"
              description=" Designed Front-end Spotify clone app for listening music and songs. Ensured a seamless user experience by replicating the intuitive design and responsiveness of the original Spotify
interface, showcasing a balance of creativity and technical expertise."
              ghLink="https://github.com/swapnil7927/Spotify"
              demoLink="https://swapnil7927.github.io/Spotify/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextUtils}
              isBlog={false}
              title="Drag And Drop"
              description="A versatile React app for character and word counting, case conversion, and seamless toggling between lowercase and uppercase. This web app enables text analysis, manipulation, case conversion, and houses accurate word/character counting. It offers versatile functionality with a sleek dark mode."
              ghLink="https://github.com/swapnil7927/TextUtils-React"
              demoLink="https://swapnil7927.github.io/TextUtils-React/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
