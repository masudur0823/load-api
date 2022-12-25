import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MealDbDetailsInfo(props) {
  const mealinfo = props.mealinfo;
  const { idMeal, strMeal, strMealThumb } = mealinfo;
  const [item, setItem] = useState("");
  console.log(item)

  const styled = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    border: "2px solid grey",
    padding: "5px",
    marginTop: "20px",
  };

  useEffect(() => {
    for (let i = 1; i <= 20; i++) {
      return setItem(i);
    }
  }, []);


  return (
    <>
      <img src={strMealThumb} alt="" style={styled} />
      <p>
        <b>{idMeal}</b>
      </p>
      <p>
        <b>{strMeal}</b>
      </p>
      <h2>Ingredients:</h2>
      <ol>
           {mealinfo.strIngredient1 === ("" && null) ? '' : <li>{mealinfo.strIngredient1}</li>}
           {mealinfo.strIngredient2 === ("" && null) ? '' : <li>{mealinfo.strIngredient2}</li>}
           {mealinfo.strIngredient3 === ("" && null) ? '' : <li>{mealinfo.strIngredient3}</li>}
           {mealinfo.strIngredient4 === ("" && null) ? '' : <li>{mealinfo.strIngredient4}</li>}
           {mealinfo.strIngredient5 === ("" && null) ? '' : <li>{mealinfo.strIngredient5}</li>}
           {mealinfo.strIngredient6 === ("" && null) ? '' : <li>{mealinfo.strIngredient6}</li>}
           {mealinfo.strIngredient7 === ("" && null) ? '' : <li>{mealinfo.strIngredient7}</li>}
           {mealinfo.strIngredient8 === ("" && null) ? '' : <li>{mealinfo.strIngredient8}</li>}
           {mealinfo.strIngredient9 === ("" && null) ? '' : <li>{mealinfo.strIngredient9}</li>}
           {mealinfo.strIngredient10 === ("" && null) ? '' : <li>{mealinfo.strIngredient10}</li>}
           {mealinfo.strIngredient11 === ("" && null) ? '' : <li>{mealinfo.strIngredient11}</li>}
           {mealinfo.strIngredient12 === ("" && null) ? '' : <li>{mealinfo.strIngredient12}</li>}
           {mealinfo.strIngredient13 === ("" && null) ? '' : <li>{mealinfo.strIngredient13}</li>}
           {mealinfo.strIngredient14 === ("" && null) ? '' : <li>{mealinfo.strIngredient14}</li>}
           {mealinfo.strIngredient15 === ("" && null) ? '' : <li>{mealinfo.strIngredient15}</li>}
           {mealinfo.strIngredient16 === ("" && null) ? '' : <li>{mealinfo.strIngredient16}</li>}
           {mealinfo.strIngredient17 === ("" && null) ? '' : <li>{mealinfo.strIngredient17}</li>}
           {mealinfo.strIngredient18 === ("" && null) ? '' : <li>{mealinfo.strIngredient18}</li>}
           {mealinfo.strIngredient19 === ("" && null) ? '' : <li>{mealinfo.strIngredient19}</li>}
           {mealinfo.strIngredient20 === ("" && null) ? '' : <li>{mealinfo.strIngredient20}</li>}
      </ol>
    </>
  );
}

function MealDbDetails() {
  const param = useParams();
  const [mealInfo, setMealInfo] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.mealId}`;
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
