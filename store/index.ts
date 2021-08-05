import { configureStore } from '@reduxjs/toolkit'

import ProductReducer from './futures/Products'
import LoginReducer from './futures/Login'

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    login: LoginReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;