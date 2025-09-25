import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { recipecontext } from './../context/Recipecontext';
import { useForm } from 'react-hook-form';
import '../scss/singlerecipe.scss';
import '../scss/createstyle.scss';
import { toast } from 'react-toastify';
import { IoHeartOutline } from 'react-icons/io5';
import { IoHeartSharp } from 'react-icons/io5';

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: recipe?.id,
      title: recipe?.title,
      image: recipe?.image,
      chef: recipe?.chef,
      ingredients: recipe?.ingredients,
      description: recipe?.description,
      category: recipe?.category,
    },
  });

  const updateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setdata(copyData);
    localStorage.setItem('recipes', JSON.stringify(copyData));
    toast.success('Recipe updated successfully!');
  };

  const deleteHandler = () => {
    const filterRecipeData = data.filter((r) => params.id != r.id);
    setdata(filterRecipeData);
    localStorage.setItem('recipes', JSON.stringify(filterRecipeData));
    toast.error('Recipe deleted successfully!');
    navigate('/recipes');
  };
  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem('fav')) || []
  );

  const favoriteHandler = () => {
    let copyFav = [...favorite];
    copyFav.push(recipe);
    setfavorite(copyFav);
    toast.success("Recipe added in favorite successfully")
    navigate('/fav')
    localStorage.setItem('fav', JSON.stringify(copyFav));

  };

  const unfavoriteHandler = () => {
    const filterFav = favorite.filter((f) => f.id != recipe.id);
    setfavorite(filterFav);
    toast.error("Recipe removed from favorite successfully")
    navigate('/recipes')
    localStorage.setItem('fav', JSON.stringify(filterFav));
  };
  // console.log(favorite);
  // console.log(favorite.find((f) => f.id == recipe?.id));

  // useEffect(() => {}, [favorite]);

  return recipe ? (
    <main>
      <section>
        <div className="single-recipe-sec">
          <div className="single-recipe">
            <div className="recipe-img">
              <img src={recipe.image} alt="" />
            </div>
            <div className="icons">
              {favorite.find((f) => f.id == recipe?.id) ? (
                <IoHeartSharp className="fill" onClick={unfavoriteHandler} />
              ) : (
                <IoHeartOutline className="line" onClick={favoriteHandler} />
              )}
            </div>
            <div className="recipe-detail">
              <h1>Name: {recipe.title}</h1>
              <h2>Cat: {recipe.category}</h2>
              <h3>Chef: {recipe.chef}</h3>
              <h4>Ing: {recipe.ingredients}</h4>
              <h5>
                Desc: {recipe.description.slice(0, 200)}...
                <span className="more-text">more</span>
              </h5>
            </div>
          </div>
        </div>

        <div className="recipe-create-sec">
          <h1 className="update-head">Update/Delete Recipe</h1>
          <form className="recipe-form" onSubmit={handleSubmit(updateHandler)}>
            <input
              type="url"
              placeholder="Enter recipe url..."
              {...register('image')}
            />
            <small className="error-show">Here we show errrors</small>
            <input
              type="text"
              placeholder="Enter recipe title..."
              {...register('title')}
            />
            <small className="error-show">Here we show errrors</small>
            <input
              type="text"
              placeholder="Enter recipe chef..."
              {...register('chef')}
            />
            <small className="error-show">Here we show errrors</small>
            <textarea
              placeholder="Enter recipe description..."
              {...register('description')}
            ></textarea>
            <small className="error-show">Here we show errrors</small>
            <textarea
              placeholder="Enter recipe ingredients..."
              {...register('ingredients')}
            ></textarea>
            <small className="error-show">Here we show errrors</small>
            <select {...register('category')}>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
            <div>
              <button className="submit-btn update">Update Recipe</button>
              <button onClick={deleteHandler} className="submit-btn delete">
                Delete Recipe
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  ) : (
    'loading...'
  );
};

export default SingleRecipe;
