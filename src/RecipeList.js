import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, onRemoveRecipe, deleteRecipe, editRecipe}) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="less_text">Name</th>
            <th className="less_text">Cuisine</th>
            <th className="less_text">Photo</th>
            <th className="more_text">Ingredients</th>
            <th className="more_text">Preparation</th>
            <th className="less_text">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <Recipe
              recipe={recipe}
              index={index}
              key={index}
              deleteRecipe={() => deleteRecipe(index)}
              editRecipe={editRecipe}
              onRemoveRecipe={() => onRemoveRecipe(recipe)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
