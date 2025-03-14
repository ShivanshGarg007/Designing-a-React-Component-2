// src/App.jsx
import React from "react";
import ProductCard from "./components/productcard";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProductCard />
    </div>
  );
};

export default App;
