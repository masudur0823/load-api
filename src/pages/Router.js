import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../componets/Header";
import Home from "./Home";
import MealDb from "./MealDb";
import User from "./User";
import NotFound from "./NotFound";
import UserInfoDetails from "./UserInfoDetails";
import MealDbDetails from "./MealDbDetails";
import { QueryClientProvider, QueryClient } from "react-query";
import Quote from "./Quote";

function Router() {
  const client = new QueryClient();
  return (
    <BrowserRouter>
      <Header />
      <QueryClientProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users" element={<User />} />
        <Route path="/users/:userId" element={<UserInfoDetails />} />

        <Route path="/meal" element={<MealDb />} />
        <Route path="/meal/:mealId" element={<MealDbDetails />} />

        <Route path="/quotes" element={<Quote />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default Router;
