import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";

function UserPostDetails(props) {
  const { title, body } = props.Userpost;
  return (
    <>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>
              <b>Title:</b> {title.slice(1, 25)}...
            </Card.Title>
            <Card.Text>
              <b>Description:</b> {body.slice(1, 130)}..
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

function UserPosts(props) {
  const { data, isLoading, isError, error } = useQuery("UsersPost", () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`);
  });

  let id = props.userId;
  const post = data?.data;
  const newpost = post?.filter(function (element) {
    return element.userId === parseInt(id);
  });

  if (isLoading) {
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Spinner animation="grow" variant="success" />
    </div>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h1>Total post: {newpost?.length}</h1>
      <Row className="g-4">
        {newpost?.map((post) => (
          <UserPostDetails key={post.id} Userpost={post} />
        ))}
      </Row>
    </>
  );
}

export default UserPosts;
