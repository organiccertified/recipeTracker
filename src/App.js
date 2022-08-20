import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  console.log(recipes)


  const handleSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    for (const value of formData.keys()) {
      console.log(value);
    }
    setRecipes([...recipes, { 
      name: formData.get("name"), 
      cuisine: formData.get("cuisine"),
      photo: formData.get("photo"),
      ingredients: formData.get("ingredients"),
      preparation: formData.get("preparation") 
    }]);
    console.log("Submitted:", recipes);
  };

  const handleRemoveRecipe = (item) => {
    const index = recipes.indexOf(item);
    if (index > -1) {
      recipes.splice(index, 1);
      setRecipes([...recipes]);
    }
  };


  // handler's

  // createRecipe
  const createRecipe = (newRecipe) => 
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);

  // editRecipe
  const editRecipe = (indexToEdit, updatedRecipe) => 
    setRecipes((currentRecipes) => 
      currentRecipes.map((recipe, index) => {
        if(index === indexToEdit) {
          return updatedRecipe;
        } else {
          return recipe;
        }
      }));

  // deleteRecipe
  const deleteRecipe = (indexToDelete) => 
    setRecipes((currentRecipe) => currentRecipe.filter((recipe, index) => index !== indexToDelete));

  if (recipes.length > 0) {
    return (
      <div className="App">
        <header className="heading" >
          <h1>Delicious Food Recipes</h1>
        </header>
        <RecipeList recipes={recipes} onRemoveRecipe={handleRemoveRecipe} deleteRecipe={deleteRecipe} editRecipe={editRecipe}/>
        <RecipeCreate saveRecipe={createRecipe}/>
        {/* <RecipeCreate handleSubmit={handleSubmit}/> */}
      </div>
    );
  } else {
    return (
      <div className="App">
        <header>
          <h1>Delicious Food Recipes</h1>
        </header>
        <h2> 😔 no recipe's added yet... </h2>
        {/* <RecipeList handleSubmit={handleSubmit} /> */}
      </div>
    );
  }
}

export default App;
