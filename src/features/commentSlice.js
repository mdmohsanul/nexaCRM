import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postComment = createAsyncThunk(
  "comment/postComment",
  async (data) => {
    const { id, ...rest } = data;
    console.log(id);
    console.log(rest);
    const response = await axios.post(
      `https://nexa-crm-backend.vercel.app/api/comments/${id}`,
      rest
    );
    console.log(response.data);
    return response.data;
  }
);
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (id) => {
    const response = await axios.get(
      `https://nexa-crm-backend.vercel.app/api/comments/${id}`
    );
    console.log(response.data);
    return response.data;
  }
);
const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(postComment.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    }),
      builders
        .addCase(fetchComments.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
          state.status = "success";
          state.comments = action.payload;
        })
        .addCase(fetchComments.rejected, (state, action) => {
          state.error = action.error.message;
        });
  },
});

export default commentSlice.reducer;
