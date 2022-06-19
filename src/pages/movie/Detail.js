import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovie } from "../../features/movieSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail() {
  // Simpan movies (state), id (params), API_KEY ke variable
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATION(id));
    dispatch(updateMovie(response.data.results));
  }

  return (
    <>
      <DetailMovie />
      <Movies title={"Recommendation Movies"} />
    </>
  );
}

export default Detail;
