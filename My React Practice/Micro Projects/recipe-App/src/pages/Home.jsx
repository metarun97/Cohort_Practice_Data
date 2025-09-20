// import '../scss/homestyle.scss';
// import chefImage from '../Assets/images/chef.png';
// import vegthaliImage from '../Assets/images/vegthali.png';
// import biriyaniImage from '../Assets/images/biriyani.png';
// import starter from '../Assets/images/starter.jpg';
// import maincourse from '../Assets/images/maincourse.jpg';
// import dessert from '../Assets/images/dessert.jpg';
import axios from '../utils/axios';
const Home = () => {
  const getProducts = async () => {
    try {
      const response = await axios.get('/products');
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button style={{ marginTop: '10vh' }} onClick={getProducts}>
        Get products
      </button>
    </>
  );
};

export default Home;

{
  /* <div className="main">
      <section className="view1">
        <div className="image_detail-sec">
          <div className="chef-image">
            <img src={chefImage} alt="" />
          </div>
          <div className="site-details">
            <h1>Foodify</h1>
            <p>
              Welcome to Foodify we deliver the taste that customer want's (Bole to ekdam gharka
              khana)
            </p>
            <img id="biriyani" src={vegthaliImage} alt="" />
            <img id="vegthali" src={biriyaniImage} alt="" />
          </div>
        </div>
      </section>
      <section className="view2">
        <h2>🥗...Food Categories...🥗</h2>
        <div className="food-category-sec">
          <div className="cards">
            <div className="card">
              <div className="category-img">
                <img src={starter} alt="" />
              </div>
              <div className="category-detail">
                <h3>Starters</h3>
                <p>
                  “Start your culinary journey with vibrant, freshly prepared
                  starters bursting with color and flavor. Each bite awakens the
                  palate, setting the tone for an unforgettable meal filled with
                  creativity, warmth, and the joy of shared beginnings.”
                </p>
              </div>
            </div>
            <div className="card">
              <div className="category-img">
                <img src={maincourse} alt="" />
              </div>
              <div className="category-detail">
                <h3>Main Course</h3>
                <p>
                 “Dive into the heart of the feast with main courses crafted to satisfy and inspire. Balanced flavors, wholesome ingredients, and perfect seasoning come together to create a fulfilling experience that nourishes both appetite and soul completely.”
                </p>
              </div>
            </div>
            <div className="card">
              <div className="category-img">
                <img src={dessert} alt="" />
              </div>
              <div className="category-detail">
                <h3>Dessert</h3>
                <p>
                “End on a sweet note with decadent desserts designed to captivate every sense. Rich textures, delightful aromas, and indulgent flavors create a memorable finale, transforming each spoonful into a celebration of joy, comfort, and pure bliss.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> */
}
