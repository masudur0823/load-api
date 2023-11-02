import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import MealCard from "../componets/MealCard";

export default function MealDb() {
  const [searchText, setSearchText] = useState("");

  const { data, isLoading, isError, error, refetch } = useQuery(
    ["meal", searchText],
    () => {
      return axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
      );
    }
  );
  const meals = data?.data?.meals;


  const handleChange = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
    refetch();
  };

  // if (isLoading) {
  //   return (
  //     <div
  //       className="d-flex align-items-center justify-content-center"
  //       style={{ height: "100vh" }}
  //     >
  //       <Spinner animation="grow" variant="success" />
  //     </div>
  //   );
  // }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Container className="mb-5">
      <div className="text-center">
        <h1>
          Search our meal: <span className="text-danger">{meals?.length}</span>
        </h1>
        <input type="text" className="w-75" onChange={handleChange} />
      </div>

      {!isLoading ? (
        <>
          {/* meal card area */}
          <Row className="g-4 m-0">
            {meals !== null ? (
              <>
                {meals?.map((meal) => (
                  <MealCard key={meal.idMeal} mealinfo={meal} />
                ))}
              </>
            ) : (
              <p>No data found</p>
            )}
          </Row>
          {/* meal card area */}
        </>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="grow" variant="success" />
        </div>
      )}
    </Container>
  );
}
