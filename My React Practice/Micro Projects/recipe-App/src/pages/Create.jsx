import '../scss/createstyle.scss';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { recipecontext } from '../context/Recipecontext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data, recipe]);
    toast.success('Recipe creted successfully');
    reset();
    navigate('/recipes');
  };
  return (
    <main>
      <section className="recipe-create-sec">
        <h1>Create Recipe</h1>
        <form className="recipe-form" onSubmit={handleSubmit(submitHandler)}>
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
          <select {...register('categories')}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>

          <button className="submit-btn">Save Recipe</button>
        </form>
      </section>
    </main>
  );
};

export default Create;
