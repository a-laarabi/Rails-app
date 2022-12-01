import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASEURL = "api/v1/messages";

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async () => {
    const response = await axios.get(BASEURL);
    return response.data;
  }
);




const messageSlice = createSlice({
  name: "message",
  initialState: [],
  reducers: {
    addMessages(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [fetchMessages.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.push(action.payload);
      console.log(state);
    },
  },
});

export const { addMessages } = messageSlice.actions;

export default messageSlice.reducer;
