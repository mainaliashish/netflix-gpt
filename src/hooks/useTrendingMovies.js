import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/movieSlice';

const useTrendingMovies = () => {
    const dispatch = useDispatch();  
    const getTrendingMovies = async () =>  {
      const data =   await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS);
      const json_data = await data.json();
      // console.log(json_data.results);
      dispatch(addTrendingMovies(json_data.results));
    }
    useEffect(()=>{
      getTrendingMovies();
    }, [])
}

export default useTrendingMovies;

