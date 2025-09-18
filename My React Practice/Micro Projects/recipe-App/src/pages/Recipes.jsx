import { useContext } from 'react';
import { recipecontext } from '../context/Recipecontext';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const { data, setdata } = useContext(recipecontext);

  const renderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <>
      <main className="main">
        <section className="recipe-sec">
          <div className="recipe-cards">
            {data.length > 0 ? renderRecipes : 'No recipe found'}
          </div>
        </section>
      </main>
    </>
  );
};

export default Recipes;
