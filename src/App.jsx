import { useState } from "react";
import "./App.css";
import { Home } from "./Home";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
