import React from "react";

function DeleteButton({ recipes, setRecipes, index }) {
    function HandleDelete(targetIndex){
        setRecipes(recipes.filter((_, index) => index !== targetIndex));
    }
    return (<button name="delete" onClick={()=> HandleDelete(index)}>Delete</button>)
}

export default DeleteButton;