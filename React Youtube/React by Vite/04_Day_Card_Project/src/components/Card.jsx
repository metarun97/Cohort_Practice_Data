import { CiBookmark } from 'react-icons/ci';

const Card = () => {
  return (
    <div className="card">
      <div className="card-I">
        <div className="top">
          <img
            src="https://seekvectors.com/storage/images/Amazon-Logo-35.svg"
            alt=""
          />
          <p>
            Save
            <CiBookmark className="book" />
          </p>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="center-I">
            <h4>Part-Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <div className="bottom">
          <div className="bottom-I">
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
