import { configureStore } from '@reduxjs/toolkit'
import subredditSlice from '../components/posts/subredditSlice';
import currentSelectedSubSlice from '../components/posts/currentSelectedSubSlice';



export const store = configureStore({
    reducer: {
        subredditReducer: subredditSlice,
        currentSelectedReducer: currentSelectedSubSlice,
       
    }
})