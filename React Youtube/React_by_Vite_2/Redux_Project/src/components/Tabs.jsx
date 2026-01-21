import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/searchSlice';

const Tabs = () => {
  const tabs = ['photos', 'videos', 'gif'];

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);


  return (
    <div className="flex items-center gap-x-5 bg-slate-900 p-2">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${activeTab == elem? "bg-green-600" : "bg-green-900"} px-4 py-2 rounded text-white cursor-pointer`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTabs(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
