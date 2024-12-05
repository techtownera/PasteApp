import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './Redux/PasteSlice.js'


export const store = configureStore({
  reducer: {
    paste: sliceReducer
  },
})