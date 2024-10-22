import React, { useEffect } from 'react';
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';

const Browse = () => {  
  const getNowPlayingMoviees = async () =>  {
    const data =   await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json_data = await data.json();
    console.log(json_data.results) 
  }

  useEffect(()=>{
    getNowPlayingMoviees();
  }, [])

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse