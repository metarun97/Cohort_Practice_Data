import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, fetchVideos, fetchGifs } from '../api/mediaApi';
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from '../redux/features/searchSlice';
import { useEffect } from 'react';

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, results, activeTab, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      let data;
      const getData = async () => {
        if (activeTab == 'photos') {
          let response = await fetchPhotos(query);
          data = response.results;
        }
        if (activeTab == 'videos') {
          data = await fetchVideos(query);
        }
        if (activeTab == 'gifs') {
          data = await fetchGifs(query);
        }
        // console.log(data);
      };
      getData();
    },
    [query, activeTab],
  );

  return <div>ResultGrid</div>;
};

export default ResultGrid;
