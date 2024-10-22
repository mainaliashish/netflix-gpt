import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();  
    const getNowPlayingMoviees = async () =>  {
      const data =   await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json_data = await data.json();
      // console.log(json_data.results);
      dispatch(addTopRatedMovies(json_data.results));
    }
    useEffect(()=>{
      getNowPlayingMoviees();
    }, [])
}

export default useTopRatedMovies;

