import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();  
    const getUpcomingMovies = async () =>  {
      const data =   await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
      const json_data = await data.json();
      // console.log(json_data.results);
      dispatch(addUpcomingMovies(json_data.results));
    }
    useEffect(()=>{
      getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;

