import axios from "axios";

// export default axios.create({
//   baseURL: "https://api.quotable.io",
// });

// get quote api
export const getQuoteApi = () => {
  return axios.get("https://api.quotable.io/random")
};

// get mealdb api
// export const getMealApi = (props) => {
//   return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchText}`)
// }

