// import { useMutation, useQuery } from "@apollo/client";
// import { CREATE_USER } from "./mutations/pizza";
// import { GET_ALL_USERS, GET_USER } from "./query/pizza";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header/header";
import Catalog from "./components/catalog/catalog";
import Product from "./components/product/product";

import "./app.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="products" element={<Catalog />} />
          <Route path="products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
