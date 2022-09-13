import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UserPosts from "../componets/UserPosts";

function UserInfoDetails() {
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${params.userId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [params.userId]);

  return (
    <>
      <Container className="my-5">
        <h1 className="text-center">UserInfoDetails id:{params.userId}</h1>
        <Card style={{ width: "25rem" }} className="m-auto">
          <Card.Body>
            <Card.Title>Name: {user.name}</Card.Title>
            <Card.Title>User Name: {user.username}</Card.Title>
            <Card.Title>Email: {user.email}</Card.Title>
            <Card.Title>Address: </Card.Title>
            <Card.Text>
              {user.address?.street}, {user.address?.suite} ,{" "}
              {user.address?.city}, {user.address?.zipcode},
            </Card.Text>
            <Card.Title>Phone: {user.phone}</Card.Title>
            <Card.Title>
              Website: {" "}
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noreferrer"
              >
                www.{user.website}
              </a>
            </Card.Title>
          </Card.Body>
        </Card>

        <UserPosts userId={params.userId} />
      </Container>
    </>
  );
}

export default UserInfoDetails;
