import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function HomeCardInfo(props) {
  const { id, title, desc } = props.info;
  const [value, setValue] = useState('')

  useEffect(() => {
    if (id === 1) {
      return setValue("/users");
    } else if (id === 2) {
      return setValue("/meal");
    } else {
      return setValue("/news");
    }
  }, [id]);

  return (
    <>
      <Col md="4">
        <Card className="m-auto">
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Link to={value}>
              <Button variant="primary">Click here</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

function HomeCard() {
  const cardInfo = [
    {
      id: 1,
      title: "User",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      title: "Meals",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      title: "News Blogs",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
  return (
    <>
      {cardInfo.map((info) => (
        <HomeCardInfo key={info.id} info={info} />
      ))}
    </>
  );
}

export default HomeCard;
