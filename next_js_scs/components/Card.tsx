type cardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: cardProps) => {
  return (
    <div className="w-fit bg-gray-900 text-white rounded-md p-5 mb-2">
      <h1 className="text-center font-semibold text-2xl">{title}</h1>
      <p className="text-md font-thin text-center">{description}</p>
    </div>
  );
};

export default Card;
