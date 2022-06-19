import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovie } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRatedMovie() {
 
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOP_RATED);
    dispatch(updateMovie(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies titles={"Top Rated Movies"}/>
    </>
  );
}

export default TopRatedMovie;
