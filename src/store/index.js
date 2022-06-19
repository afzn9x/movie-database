//import konfigurasi store
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movieSlice";

//buat store
const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
});

export default store;