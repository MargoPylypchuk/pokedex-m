import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPokemon from "../pages/AboutPokemon";
import Home from "../pages/Home";

export default function AppRouter() {
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about/:id" element={<AboutPokemon/>} />
      </Routes>
    );
  }
  