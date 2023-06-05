import {configureStore} from '@reduxjs/toolkit'
import messageReducer from './callapi'


export const store = configureStore({
    reducer: {
        message: messageReducer
    }
  });