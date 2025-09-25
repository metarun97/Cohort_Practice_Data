import Video from './Video';

const Homeherotext = () => {
  return (
    <div className="font-[font1] text-white text-center pt-5">
      <div className="text-[9.5vw] flex items-center justify-center leading-[9vw] uppercase">
        L'étincelle
      </div>
      <div className="text-[9.5vw] flex items-start justify-center leading-[9vw] uppercase">
        qui
        <div className="h-[7vw] w-[14vw] rounded-full mt-3 overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] flex items-center justify-center leading-[9vw] uppercase">
        la créativité
      </div>
    </div>
  );
};

export default Homeherotext;
