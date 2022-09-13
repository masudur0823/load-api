import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MealCard(props) {
  const { idMeal, strMeal, strArea, strMealThumb } = props.mealinfo;
  const navigate = useNavigate();
  const handleLink = () => {
    const path = `/meal/${idMeal}`;
    navigate(path);
  };
  return (
    <>
      <Col md="4" sm="6">
        <Card>
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>{strArea}</Card.Text>
            <Button onClick={handleLink}>Click here</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default MealCard;
