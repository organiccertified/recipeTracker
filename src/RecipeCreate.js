import React, { useState } from "react";

function RecipeCreate({handleSubmit, saveRecipe}) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    recipeName: "",
    cuisineStyle: "",
    photoRecipe: "",
    howToPrepare: "",
    ingredientsRecipe: "",
  };

  const [recipeData, setRecipeData] = useState({...initialFormState});

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSetRecipeDataChange = ({ target: {name, value} }) => {
    setRecipeData({...recipeData, [name]: value});
  };

  const onSubmitHandler = (event) => { 
    event.preventDefault();
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
    saveRecipe({ name, cuisine, photo, ingredients, preparation });
  }

  const nameChangeHandler = (event) => setName(event.target.value);
  const cuisineChangeHandler = (event) => setCuisine(event.target.value);
  const photoChangeHandler = (event) => setPhoto(event.target.value);
  const ingredientsChangeHandler = (event) => setIngredients(event.target.value);
  const preparationChangeHandler = (event) => setPreparation(event.target.value);

  return (
    // <form name="create" onSubmit={handleSubmit}>
    <form name="create" onSubmit={onSubmitHandler}>
      <table>
        <tbody>
          <tr>
            <td className="less_text">
              <input 
                name="name" 
                placeholder="Name"
                type="text"
                required={true}
                onChange={nameChangeHandler}
                value={name}
                ></input>
            </td>
            <td className="less_text">
              <input 
                name="cuisine" 
                placeholder="Cuisine"
                type="text"
                size="9"
                required={true}
                onChange={cuisineChangeHandler}
                value={cuisine}
                ></input>
            </td>
            <td className="less_text">
              <input 
                // placeholder="Photo"
                name="photo"
                type="url"
                placeholder="URL"
                size="9"
                required={true}
                value={photo}
                onChange={photoChangeHandler}
                ></input>
            </td>
            <td className="more_text">
              <textarea 
                name="ingredients" 
                placeholder="Ingredients"
                type="text"
                required={true}
                value={ingredients}
                onChange={ingredientsChangeHandler}
                ></textarea>
            </td>
            <td className="more_text">
              <textarea 
                name="preparation" 
                placeholder="Preparation"
                type="text"
                required={true}
                size="9"
                onChange={preparationChangeHandler}
                value={preparation}
                ></textarea>
            </td>
            <td className="less_text">
              <button 
                type="submit"
                >Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
