import Catagories from '../sections/Catagories';
import FeatureProducts from '../sections/FeatureProducts';
import Hero from '../sections/Hero';
import NewsLetter from '../sections/NewsLetter';
import PromoBanner from '../sections/PromoBanner';

const Home = () => {
  return (
    <>
      <Hero />
      <Catagories />
      <hr className="text-slate-500 font-bold mt-6" />
      <FeatureProducts />
      <hr className="text-slate-500 font-bold mt-6" />
      <PromoBanner />
      <hr className="text-slate-500 font-bold mt-6" />
      <NewsLetter />
    </>
  );
};

export default Home;
