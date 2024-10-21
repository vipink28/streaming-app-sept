import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apirequests } from "../../helper/apirequests";
import axios from '../../helper/axios';
const initialState = {
    nowPlaying: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchNowPlayingMovies = createAsyncThunk(
    "movie/fetchNowPlayingMovies",
    async () => {
        const response = await axios.get(apirequests.getCollection("movie", "now_playing"));
        return response.data;
    }
)


export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNowPlayingMovies.pending, (state) => {
                state.nowPlaying.status = "loading";
            })
            .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
                state.nowPlaying.status = "success";
                state.nowPlaying.data = action.payload;
            })
            .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
                state.nowPlaying.status = "failed";
                state.nowPlaying.error = action.error;
            })
    }
})


export const selectNowPlayingMovies = (state) => state.movie.nowPlaying;

export default movieSlice.reducer;