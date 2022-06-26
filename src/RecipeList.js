import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes, setRecipes }) {
  return (
  <div className="recipe-list">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody><RecipeItem recipes={recipes} setRecipes={setRecipes} /></tbody>
    </table>
  </div>
);
}


export default RecipeList;
