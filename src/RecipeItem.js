import React from 'react';
import DeleteButton from './DeleteRecipe';

function RecipeItem({ recipes, setRecipes }){
    const list = recipes.map((recipe, index) => {
        return (
        <tr key={index}>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt="food"/></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><DeleteButton recipes={recipes} setRecipes={setRecipes} index={index}/></td>
            </tr>
            );
        });
        return list;
    };

export default RecipeItem;