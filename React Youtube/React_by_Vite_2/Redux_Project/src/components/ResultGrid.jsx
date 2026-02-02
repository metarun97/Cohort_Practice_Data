import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, fetchVideos, fetchGifs } from '../api/mediaApi';
import {
  setLoading,
  setError,
  setResults,
} from '../redux/features/searchSlice';
import { useEffect } from 'react';
import ResultCard from './ResultCard';

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == 'photos') {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: 'photo',
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
            }));
          }
          if (activeTab == 'videos') {
            let response = await fetchVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: 'video',
              title: item.user.name || 'video',
              thumbnail: item.image,
              src: item.video_files[0].link,
            }));
          }
          if (activeTab == 'gifs') {
            let response = await fetchGifs(query);
            data = response.data.map((item) => ({
              id: item.id,
              type: 'gif',
              title: item.title || 'GIF',
              thumbnail: item.bitly_url,
              src: item.embed_url,
            }));
          }
          dispatch(setResults(data[1].src));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab],
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading</h1>;

  return (
    <div className="flex flex-wrap px-2 py-6 gap-4">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
