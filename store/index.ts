import { configureStore } from '@reduxjs/toolkit'

import ProductReducer from './futures/Products'

export const store = configureStore({
  reducer: {
    products: ProductReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;