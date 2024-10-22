import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";


const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
      const json_data = await data.json();
  
      let trailer = json_data.results.filter((video) => video.type === 'Trailer' || video.name === 'Official Trailer')
      if (!trailer) {
        trailer = json_data.results.filter((video) => video.type === 'Trailer')
      }
      dispatch(addTrailerVideo(trailer[0]))
    }
  
    useEffect(() => {
      getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
}

export default useTrailerVideo;