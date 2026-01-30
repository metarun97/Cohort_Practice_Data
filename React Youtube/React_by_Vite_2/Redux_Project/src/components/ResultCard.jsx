const ResultCard = ({ item }) => {
  return (
    <div className="w-[18vw] h-60 rounded bg-white relative">
      <div className="w-full h-full">
        {item.type === 'photo' ? <img className="w-full h-full object-cover object-center" src={item?.src} alt="" /> : ''}
        {item.type === 'video' ? (
          <video className="w-full h-full object-cover object-center" muted autoPlay loop src={item?.src}></video>
        ) : ''}
        {item.type === 'gif' ? <img className="w-full h-full object-cover object-center" src={item?.src}  alt={item?.title} />  : ''}
      </div>
      <h1 className="absolute bottom-0 p-4  text-white">{item.title}</h1>
    </div>
  );
};

export default ResultCard;
