import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterSlice
  },
})