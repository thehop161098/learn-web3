/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import demoReducer from 'component/Demo/demoSlice'
import web3Reducer from 'component/Web3/web3Slice'

const appReducer = combineReducers({
  demoReducer,
  web3Reducer
})

const rootReducer = (state: any, action: any) => appReducer(state, action)

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
