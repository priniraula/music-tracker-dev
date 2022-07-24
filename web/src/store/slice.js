import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songInfo: {
    title: "",
    artist: "",
    album: "",
    coverArt: "",
    genre: "",
    releaseDate: "",
    time: "",
    trackExplicit: "",
    discCount: "",
    discNum: "",
    albumTrackCount: "",
    trackNum: "",
  },
  isLoading: true,
  youtubeLink: "",
  saved: false,
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSongInfo: (state, action) => {
      state.songInfo = action.payload;
    },
    setYoutubeLink: (state, action) => {
      state.youtubeLink = action.payload;
    },
    toggleSave: (state) => {
      state.saved = !state.saved;
    },
  },
});

export const { setSongInfo, setYoutubeLink, toggleSave } = songSlice.actions;
export default songSlice.reducer;
