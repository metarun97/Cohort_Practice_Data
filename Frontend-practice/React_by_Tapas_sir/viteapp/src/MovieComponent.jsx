import Movie from './components/Movie';
import { movies } from './movies';

const MovieComponent = () => {
  return (
    <div className='flex flex-col items-center gap-5 my-5'>
      <h1 className='text-4xl font-semibold'>Movies</h1>
      <ul className='flex justify-center items-center flex-wrap gap-5'>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieComponent;
