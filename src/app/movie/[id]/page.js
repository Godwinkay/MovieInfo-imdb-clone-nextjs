import React from 'react'

export default async function Movie({params}) {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    const movie = await res.json()

  return (
    <div className='flex flex-col items-center lg:items-start space-y-8 lg:flex-row lg:justify-center lg:gap-8 my-16 mx-16'>
      <div className='lg:w-1/2'>
        <img
         src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
         alt={movie.title}
         className='w-[800px] md:h-[400px] lg:w-[600px] rounded-2xl border-4 border-gray-400 shadow-xl' />
      </div>
      <div className='space-y-4 lg:w-1/2'>
        <h2 className='text-2xl font-bold text-center'>{movie.original_title || movie.original_name}</h2>
        <p>{movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date || movie.first_air_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}/10</p>
        <p><strong>Origin:</strong> {movie.origin_country}</p>
      </div>
    </div>
  )
}
