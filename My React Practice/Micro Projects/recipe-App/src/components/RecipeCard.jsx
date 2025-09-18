import '../scss/recipestyle.scss';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
  const { id, title, image, chef, ingredients, description } = props.recipe;
  return (
    <Link to={`/recipes/details/${id}`} className="card">
      <div className="recipe-image">
        <img src={image} />
      </div>
      <div className="recipe-details">
        <h1>{title}</h1>
        <h3>Chef: {chef}</h3>
        <h4>{ingredients}</h4>
        <p>{description.slice(0,100)}...<span className='more-text'>more</span></p>
      </div>
    </Link>
  );
};

export default RecipeCard;
