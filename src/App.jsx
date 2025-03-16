import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Foods from "./views/Foods";
import FilteredFoods from "./views/FilteredFoods";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="max-w-full">
        <Header />
      </div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Foods />} path="/foods" />
        <Route element={<FilteredFoods />} path="/FilteredFoods/:slug" />
      </Routes>

      <div className="max-w-full">
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
