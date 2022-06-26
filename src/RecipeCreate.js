import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  const INITIAL_FORM_DATA = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA });

  function createRecipe(event) {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData({...INITIAL_FORM_DATA});
  }

  function handleChange({target}){
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  }
  
  return ( 
    <form name="create" onSubmit={createRecipe}>
      <table>
        <tbody>
          <tr>
            <td>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder= "Name"
              required={true}
            />
          </td>
          <td>
            <input
              id="cuisine"
              type="text"
              name="cuisine"
              onChange={handleChange}
              value={formData.cuisine}
              placeholder= "Cuisine"
              required={true}
            />
          </td>
          <td>
            <input 
              id="photo" 
              name="photo" 
              type="url" 
              onChange={handleChange}
              value={formData.photo} 
              placeholder= "URL"
              required={true}
            />
          </td>
          <td>
            <textarea 
              id="ingredients" 
              name="ingredients" 
              type="text" 
              onChange={handleChange}
              value={formData.ingredients}
              placeholder= "Ingredients"
              required={true}
            />
          </td>
          <td>
            <textarea 
              id="preparation" 
              name="preparation" 
              type="text" 
              onChange={handleChange}
              value={formData.preparation} 
              placeholder= "Preparation"
              required={true}
            />
          </td>
          <td>
            <button type="submit">Create</button>
          </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
