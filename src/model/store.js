import { configureStore } from '@reduxjs/toolkit'
import foodReducer from './foodSlice.js'

export default configureStore({
  reducer: {
    foodRed: foodReducer
  }
})