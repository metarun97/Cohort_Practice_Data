import { useContext } from 'react';
import '../scss/recipestyle.scss';
import { recipecontext } from '../context/Recipecontext';

const Recipes = () => {
  const { data, setdata } = useContext(recipecontext);

  const renderRecipes = data.map((recipe) => (
    <div className="card" key={recipe.id}>
      <dev className="recipe-image">
        <img src={recipe.image} alt="" />
      </dev>
      <div className="recipe-details">
        <h1>Recipe Name :{recipe.title}</h1>
        <h3>Chef Name: {recipe.chef}</h3>
        <h4>Ingredients: {recipe.ingredients}</h4>
        <p>Decsciption: {recipe.description}</p>
      </div>
    </div>
  ));
  return (
    <main>
      <section className="recipe-sec">
        <div className="recipe-cards">{renderRecipes}</div>
      </section>
    </main>
  );
};

export default Recipes;
