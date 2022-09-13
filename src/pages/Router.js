import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../componets/Header";
import Home from "./Home";
import MealDb from "./MealDb";
import User from "./User";
import NotFound from "./NotFound";
import UserInfoDetails from "./UserInfoDetails";
import News from "./News";
import MealDbDetails from "./MealDbDetails";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users" element={<User />} />
        <Route path="/users/:userId" element={<UserInfoDetails />} />

        <Route path="/meal" element={<MealDb />} />
        <Route path="/meal/:mealId" element={<MealDbDetails />} />

        <Route path="/news" element={<News />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
