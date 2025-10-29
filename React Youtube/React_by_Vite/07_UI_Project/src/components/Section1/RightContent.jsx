import RightCard from './RightCard';

const RightContent = (props) => {
  return (
    <div id="right" className="w-2/3 h-full flex rounded-4xl p-7 gap-10 flex-nowrap overflow-x-auto  ">
      {props.users.map(function (elem,idx) {
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.image} tag={elem.tag}/>;
      })}
    </div>
  );
};

export default RightContent;
