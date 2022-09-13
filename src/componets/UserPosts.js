import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

function UserPostDetails(props) {
  const { title, body } = props.Userpost;
  return (
    <>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>
              <b>Title:</b> {title.slice(1,25)}...
            </Card.Title>
            <Card.Text>
              <b>Description:</b> {body.slice(1,130)}..
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

function UserPosts(props) {
  let id = props.userId;
  const [post, setPost] = useState([]);

  const newpost = post.filter(function (element) {
    return element.userId === parseInt(id);
  });

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <>
      <h1>Total post: {newpost.length}</h1>
      <Row className="g-4">
        {newpost.map((post) => (
          <UserPostDetails key={post.id} Userpost={post} />
        ))}
      </Row>
    </>
  );
}

export default UserPosts;
