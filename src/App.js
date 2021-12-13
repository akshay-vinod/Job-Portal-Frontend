import React from "react";
import "./App.css";
//component imports
import Navbar from "./components/Navbar/Navbar";
import RecipeReviewCard from "./components/Card/JobCard";
function App() {
  return (
    <div>
      <Navbar />
      <div>
        <RecipeReviewCard />
      </div>
    </div>
  );
}

export default App;
