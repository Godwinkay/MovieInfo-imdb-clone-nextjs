import React from 'react';
import Link from "next/link";
import { FaRegThumbsUp } from "react-icons/fa";

const API_KEY = process.env.API_KEY;

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  console.log(results)

  return (
    <div className="grid justify-center gap-6 my-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto px-8">
      {results.map((result) => (
        <div
          key={result.id}
          className="group max-w-[300px] p-2 border-[2px] border-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer"
        >
          <Link href={`/movie/${result.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path
              }`}
              className="rounded-t-lg h-[200px] group-hover:opacity-75 transition-opacity duration-300 w-full"
            />
          
          <div className="my-4 space-y-3">
            <h2 className="text-center font-bold truncate text-lg">
              {result.original_title || result.name}
            </h2>
            <p className="line-clamp-2">{result.overview}</p>
            <div className="text-sm flex">
              <p>Release: {result.release_date || result.first_air_date} </p>
              <p className="flex items-center gap-1">
                <FaRegThumbsUp className="ml-4" /> {result.vote_count}
              </p>
            </div>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}