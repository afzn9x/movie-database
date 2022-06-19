import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovie } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlayingMovie() {

  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);
    dispatch(updateMovie(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies titles={"Now Playing Movies"}/>
    </>
  );
}

export default NowPlayingMovie;
