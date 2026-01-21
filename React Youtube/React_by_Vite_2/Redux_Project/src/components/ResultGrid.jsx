import { useDispatch, useSelector } from 'react-redux';
import { searchPhotos, searchVideos, searchGifs } from '../api/mediaApi';
import {
  setQuery,
  setActiveTabs,
  setResults,
  setLoading,
  setError,
  clearResult,
} from '../redux/features/searchSlice';
import { useEffect } from 'react';

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      let data;
      const getData = async () => {
        if (activeTab == 'photos') {
          let res = await searchPhotos(query);
          data = res.results;
        }
        if (activeTab == 'videos') {
          let res = await searchVideos(query);
          data = res.videos;
        }
        if (activeTab == 'gif') {
          let res = await searchGifs(query);
          data = res.data;
        }
        console.log(data);
      };
      getData();
    },
    [query, activeTab],
  );

  return <div></div>;
};

export default ResultGrid;
