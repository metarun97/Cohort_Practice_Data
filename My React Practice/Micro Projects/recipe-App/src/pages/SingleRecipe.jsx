import { useContext } from 'react';
import '../scss/singlerecipe.scss';
import { useParams } from 'react-router-dom';
import { recipecontext } from './../context/Recipecontext';

const SingleRecipe = () => {
  const { data } = useContext(recipecontext);
  const params = useParams();
  // console.log(data, params.id);
  const recipe = data.find((recipe) => params.id == recipe.id);
  console.log(recipe);
  return recipe ? (
    <main>
      <section className="single-recipe-sec">SingleRecipe</section>
    </main>
  ) : (
    'loading...'
  );
};

export default SingleRecipe;
