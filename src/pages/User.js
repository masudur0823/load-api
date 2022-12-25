import React from "react";
import { Container, Row} from "react-bootstrap";
import UserInfo from "../componets/UserInfo";

function User() {
  return (
    <>
      <Container>
        <Row className="g-4 m-0">
          <UserInfo />
        </Row>
      </Container>
      {/* </>
      } */}
    </>
  );
}

export default User;
