import CardContent from './CardContent';

const RightCard = (props) => {
  return (
    <div className="w-90 h-full shrink-0 relative rounded-4xl overflow-hidden">
      <img
        className="w-full h-full object-cover absolute "
        src={props.img}
        alt=""
      />
      <CardContent tag={props.tag} id={props.id} color={props.color}
      />
    </div>
  );
};

export default RightCard;
