
const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="w-90 h-90 bg-white rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={props.elem.download_url}
            alt=""
          />
        </div>
        <h1 className="text-white font-bold text-lg text-center">
          {props.elem.author}
        </h1>
      </a>
    </div>
  );
};

export default Card;
