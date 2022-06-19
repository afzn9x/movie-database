import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

//buat slice
const movieSlice = createSlice({
    name: "Movie Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            //membuat login addMovie
            state.movies.push(action.payload);
        },
        updateMovie(state, action) {
            //melakukan update movies
            state.movies = action.payload;
        },
    }
});


//generate reducer
const moviesReducer = movieSlice.reducer;
const { addMovie, updateMovie } = movieSlice.actions;

export default moviesReducer;
export {
    addMovie, updateMovie
};