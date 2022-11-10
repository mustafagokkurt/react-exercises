import { combineReducers } from '@reduxjs/toolkit'
import subredditx from '../features/subreddit/SubredditSliceAsync'
// import subreddit from 'features/subreddit/SubredditSlice'

const rootReducer = combineReducers({ subreddit3: subredditx })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer