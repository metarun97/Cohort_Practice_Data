import { searchGifs, searchPhotos, searchVideos } from './api/MediaApi';

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <button className='px-4 py-2 bg-green-500 text-white rounded m-5'
        onClick={async () => {
          const data = await searchPhotos('cat');
          console.log(data.results);
        }}
      >
        Get data
      </button>
      <button className='px-4 py-2 bg-green-500 text-white rounded m-5'
        onClick={async () => {
          const data = await searchVideos('cat');
          console.log(data.videos);
        }}
      >
        Get data
      </button>
      <button className='px-4 py-2 bg-green-500 text-white rounded m-5'
        onClick={async () => {
          const data = await searchGifs('cat');
          console.log(data.data);
        }}
      >
        Get data
      </button>
    </div>
  );
};

export default App;
