import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MealDbDetailsInfo(props) {
  const mealinfo = props.mealinfo;
  const { idMeal, strMeal, strMealThumb } = mealinfo;

  const styled = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    border: "2px solid grey",
    padding: "5px",
    marginTop: "20px",
  };

  const strIngredients = Object.entries(mealinfo)
    .filter(([key, value]) => key.includes("strIngredient") && value !== "")
    .map(([key, value]) => ({ [key]: value }));

  const strMeasures = Object.entries(mealinfo)
    .filter(([key, value]) => key.includes("strMeasure") && value !== " ")
    .map(([key, value]) => ({ [key]: value }));

  let mergedArray = [];

  for (let i = 0; i < strIngredients.length; i++) {
    mergedArray.push({ ...strIngredients[i], ...strMeasures[i] });
  }

  return (
    <>
      <img src={strMealThumb} alt="" style={styled} />
      <p>
        <b>{idMeal}</b>
      </p>
      <p>
        <b>{strMeal}</b>
      </p>

      <div className="d-flex">
        <div>
          <h2>Ingredients:</h2>
          <ol>
            {mergedArray?.map((item, i) => (
              <li key={i}>{item[`strIngredient${i + 1}`]} - {item[`strMeasure${i + 1}`]}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

function MealDbDetails() {
  const param = useParams();
  const [mealInfo, setMealInfo] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param?.mealId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMealInfo(data.meals));
  }, [param.mealId]);

  return (
    <>
      <Container>
        {mealInfo.map((meal) => (
          <MealDbDetailsInfo mealinfo={meal} />
        ))}
      </Container>
    </>
  );
}

export default MealDbDetails;
