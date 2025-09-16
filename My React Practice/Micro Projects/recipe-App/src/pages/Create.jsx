import '../scss/createstyle.scss';
import { useForm } from 'react-hook-form';

const Create = () => {
  const { register, handleSubmit, reset } = useForm();
  return (
    <main>
      <section className="recipe-create-sec">
        <h1>Create Recipe</h1>
        <form className="recipe-form">
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
