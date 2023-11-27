import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function HomeCard() {
  const cardInfo = [
    {
      title: "User",
      path: "/users",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Meals",
      path: "/meal",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "News Blogs",
      path: "/news",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Reducer practice",
      path: "/practice",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
  return (
    <>
      {cardInfo.map((info, index) => (
        <Col md="4" key={index}>
          <Card className="m-auto">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>{info.title}</Card.Title>
              <Card.Text>{info.desc}</Card.Text>
              <Link to={info.path}>
                <Button variant="primary">Click here</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default HomeCard;
