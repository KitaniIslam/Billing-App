import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductInBasket, Tax } from '../../types'

interface globalState {
  Products: Product[];
  Basket: ProductInBasket[];
  Taxes: Tax[]
};

const initialState: globalState = {
  Products: [],
  Basket: [],
  Taxes: [
    { label: 'AK', value: 5 },
    { label: 'AL', value: 6 },
    { label: 'AR', value: 3 },
    { label: 'AS', value: 5.7 },
  ]
};

const Products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ProductInBasket>) {
      state.Basket.push(action.payload)
    },
    deleteProduct(state, action) {},
    calculatePrice(state) {}
  },
});

export const { addProduct, deleteProduct, calculatePrice } = Products.actions;
export default Products.reducer;

