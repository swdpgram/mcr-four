import { useState } from "react";
import "./App.css";
import { Home } from "./Home";
import { IndividualPost } from "./IndividualPost";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:postId" element={<IndividualPost />} /> 
      </Routes>
    </>
  );
}

export default App;
