import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  // console.log(movies)
  if(!movies) return;
  return (
  <div className="bg-black">
    <div className="-mt-60 pl-12 relative z-10">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
      <MovieList title={"Trending"} movies={movies?.trendingMovies}/>
      <MovieList title={"Popular"} movies={movies?.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
    </div>
  </div>
  );
};

export default SecondaryContainer;
