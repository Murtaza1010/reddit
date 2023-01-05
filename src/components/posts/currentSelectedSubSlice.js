import { createSlice } from "@reduxjs/toolkit";


const currentSelectedSubSlice = createSlice({
    name: 'currentSelectedSub',
    initialState: {
        subreddit: "home"
    },
    reducers: {
        updateState(state, action) {
            state.subreddit = action.payload
        }
    }
})
export const { updateState } = currentSelectedSubSlice.actions;
export default currentSelectedSubSlice.reducer;