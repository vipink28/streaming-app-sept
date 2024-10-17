import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlaying: {
        status: "idle",
        data: null,
        error: null
    }
}


export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default movieSlice.reducer;