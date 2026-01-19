import { useDispatch, useSelector } from 'react-redux';
import { changeText} from './redux/features/textChangeSlice';

const App2 = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.text.value);


  return (
    <div>
      <h1>{selector}</h1>
      <button
        onClick={() => dispatch(changeText("My name is Tarun."))}
        className="bg-amber-600 text-2xl rounded px-4 py-2 cursor-pointer"
      >
        Change theme
      </button>
    </div>
  );
};

export default App2;
