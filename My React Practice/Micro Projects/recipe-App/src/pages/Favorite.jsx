import '../scss/favoritestyle.scss';
import RecipeCard from './../components/RecipeCard';

const Favorite = () => {
  const favorite = JSON.parse(localStorage.getItem('fav')) || [];

  const renderFavRecipes = favorite.map((recipe) => (
    <RecipeCard key={recipe?.id} recipe={recipe} />
  ));
  return (
    <>
      <main className="main">
        <section className="recipe-sec">
          <div className="recipe-cards">
            {favorite.length > 0 ? renderFavRecipes : 'No favorite recipe found'}
          </div>
        </section>
      </main>
    </>
  );
};

export default Favorite;
