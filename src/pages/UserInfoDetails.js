import axios from "axios";
import React from "react";
import { Card, Container, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import UserPosts from "../componets/UserPosts";

function UserInfoDetails() {
  const params = useParams();

  const { data, isLoading, isError, error} = useQuery("userDetails", () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
  });
  const user = data?.data;

  if (isLoading) {
    <div
    className="d-flex align-items-center justify-content-center"
    style={{ height: "100vh" }}
  >
    <Spinner animation="grow" variant="success" />
  </div>
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <Container className="my-5">
        <h1 className="text-center">UserInfoDetails id:{params.userId}</h1>
        <Card style={{ width: "25rem" }} className="m-auto">
          <Card.Body>
            <Card.Title>Name: {user?.name}</Card.Title>
            <Card.Title>User Name: {user?.username}</Card.Title>
            <Card.Title>Email: {user?.email}</Card.Title>
            <Card.Title>Address: </Card.Title>
            <Card.Text>
              {user?.address?.street}, {user?.address?.suite} ,{" "}
              {user?.address?.city}, {user?.address?.zipcode},
            </Card.Text>
            <Card.Title>Phone: {user?.phone}</Card.Title>
            <Card.Title>
              Website: {" "}
              <a
                href={`http://${user?.website}`}
                target="_blank"
                rel="noreferrer"
              >
                www.{user?.website}
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
