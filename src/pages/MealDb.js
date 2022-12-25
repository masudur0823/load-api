import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
// import { getMealApi } from "../componets/api/axios";
import MealCard from "../componets/MealCard";


// export const getMealApi = (props) => {
//   return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchText}`)
// }


export default function MealDb() {
  const [searchText, setSearchText] = useState("");
  const [text, setText] = useState("");

  const { data, isLoading, isError, error } = useQuery("meal", () => {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
  },{
    refetchInterval:1000,
  });

  console.log('searchText',searchText)
  const meals = data?.data?.meals;
  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
  //     .then((response) => response.json())
  //     .then((data) => setMeals(data.meals));
  // }, [searchText]);

  useEffect(() => {
    if (meals?.length === undefined) setText("no data found");
    else setText("");
  }, [meals?.length]);

  const handleChange = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };


  if (isLoading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="grow" variant="success" />
      </div>
    );
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Container className="mb-5">
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
          {meals?.map((meal) => (
            <MealCard key={meal.idMeal} mealinfo={meal} />
          ))}
        </Row>
        {/* meal card area */}
      </Container>
  );
}
