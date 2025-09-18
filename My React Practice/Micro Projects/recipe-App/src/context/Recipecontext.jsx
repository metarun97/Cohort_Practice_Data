import { createContext, useState } from 'react';
export const recipecontext = createContext(null);

const Recipecontext = (props) => {
  const [data, setdata] = useState([
    {
      id: 1,
      title: 'Classic Margherita Pizza',
      ingredients: 'Tomato sauce,pizza dough,mozzarella cheese,basil leaves,olive oil,Salt,pepper',
      description:
        'Indulge in the timeless charm of a Classic Margherita Pizza – where simplicity meets perfection. Featuring a thin, golden crust baked to crisp perfection, it’s topped with rich tomato sauce, creamy mozzarella, and freshly picked basil leaves for a burst of authentic Italian flavor. This pizza celebrates the art of minimalism, allowing each ingredient to shine and create a harmonious taste experience. Perfect for casual dining, family gatherings, or a cozy night in, the Classic Margherita embodies comfort, tradition, and irresistible aroma in every bite. Savor the authentic essence of Italy with this classic pizza masterpiece.',
      image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
      chef: 'Pankaj Chamoli',
      mealType: 'Dinner',
    },
  ]);
  console.log(data);
  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default Recipecontext;
