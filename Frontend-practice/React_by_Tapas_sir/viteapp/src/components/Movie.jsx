import React from 'react';

const Movie = ({movie}) => {
  return (
    <li className="max-w-xs w-full p-2.5 border border-slate-300 rounded-md shadow hover:scale-102 transition flex flex-col items-center" key={movie.id}>
      <img src={movie.banner} alt={movie.title} />
      <h1 className="text-2xl font-semibold">{movie.title}</h1>
      <p className='text-center'>
        Movie {movie.title} is directed by {movie.director} in{' '}
        {movie.releaseYear}
      </p>
      <span className="text-blue-500 font-bold">Rating:{movie.rating}</span>
    </li>
  );
};

export default Movie;
