import mainVideo from '../../../public/Videos/mainvideo.mp4';

const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
        src={mainVideo}
      ></video>
    </div>
  );
};

export default Video;
