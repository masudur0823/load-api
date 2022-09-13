import React from "react";
import { Container, Row } from "react-bootstrap";
import HomeCard from "../componets/HomeCard";

function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "90vh" }}
    >
      <Container>
        <Row className="g-4 m-0">
          <HomeCard />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
