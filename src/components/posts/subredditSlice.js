import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const subredditSlice = createSlice({
    name: "subreddit",
    initialState: {
        posts: {}
    },
    reducers: {
        addPosts(state, action) {
            state.posts = action.payload
        }
    }
})



export const { addPosts } = subredditSlice.actions;
// export const getPostsData = (state) => state.subreddit.posts;
export default subredditSlice.reducer