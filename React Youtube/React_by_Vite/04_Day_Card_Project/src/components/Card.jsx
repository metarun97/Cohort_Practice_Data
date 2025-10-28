import { CiBookmark } from 'react-icons/ci';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-I">
        <div className="top">
          <img src={props.logo} />
          <p>
            Save
            <CiBookmark className="book" />
          </p>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.postedTime}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="center-I">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <div className="bottom">
          <div className="bottom-I">
            <h3>{props.hourlyPay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
