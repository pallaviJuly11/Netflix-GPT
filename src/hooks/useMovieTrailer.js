/** @format */

import { useEffect } from "react";
import { API_OPTIONS } from "../utills/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utills/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const jsonData = await data.json();

    const filterData = jsonData.results.filter(
      (vedio) => vedio.type === "Trailer"
    );
    const trailerOfMovies = filterData.length
      ? filterData[1]
      : jsonData.results[0];
    console.log(trailerOfMovies);
    dispatch(addTrailerVideo(trailerOfMovies));
    console.log(trailerVideo);
  };
  useEffect(() => {
    getTrailer();
  }, []);
};

export default useMovieTrailer;
