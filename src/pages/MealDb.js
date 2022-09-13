import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import MealCard from "../componets/MealCard";

function MealDb() {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  useEffect(() => {
    if (meals?.length === undefined) {
      return setText("no data found");
    } else return setText("");
  }, [meals?.length]);

  const handleChange = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };

  return (
    <Container className="mb-5">
      {meals?.length === 0 ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "90vh" }}
        >
          <Spinner animation="grow" variant="success" />
        </div>
      ) : (
        <>
          <div className="text-center">
            <h1>
              Search our meal:{" "}
              <span className="text-danger">{meals?.length}</span>
            </h1>
            <input type="text" className="w-75" onChange={handleChange} />
            <p className="text-danger text-center">{text}</p>
          </div>

          {/* meal card area */}
          <Row className="g-4 m-0">
            {meals?.map((meal) => <MealCard key={meal.idMeal} mealinfo = {meal} />)}
            </Row>
          {/* meal card area */}
        </>
      )}
    </Container>
  );
}

export default MealDb;
