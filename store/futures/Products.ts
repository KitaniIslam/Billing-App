import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductInBasket, Tax } from '../../types'

interface globalState {
  Products: Product[];
  Basket: ProductInBasket[];
  Taxes: Tax[],
  totalPriceInBasket: number;
  taxedTotalPriceInBasket: number;
  discount: number;
  tax: number;
  discountAppliedOnBasket: number;
  taxAppliedOnBasket: number;
};

const initialState: globalState = {
  Products: [],
  Basket: [],
  Taxes: [
    { label: 'AK', value: 5 },
    { label: 'AL', value: 6 },
    { label: 'AR', value: 3 },
    { label: 'AS', value: 5.7 },
  ], 
  totalPriceInBasket: 0,
  taxedTotalPriceInBasket: 0,
  discount: 3,
  tax: 6, 
  discountAppliedOnBasket: 0,
  taxAppliedOnBasket: 0,
};

const Products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ProductInBasket>) {
      state.Basket.push(action.payload)
      Products.caseReducers.calculateBasketItemsPrice(state)
    },
    calculateBasketItemsPrice(state) {
      const discount: number[] = []
      const tax: number[] = []
      const basket = state.Basket
      const totalPrice = basket.reduce((reducer, item) => reducer + (item.price * item.quantity) , 0)
      const taxedTotalPrice = basket.reduce((reducer, item) => {
        const totalPriceForProduct:number = item.price * item.quantity
        const totalPriceForProductAfterDiscount:number = totalPriceForProduct - (totalPriceForProduct * (state.discount /100))
        const taxForRegion:any = state.Taxes.filter((itemToFilter) => itemToFilter.label === item.state)
        const taxToApply:number = totalPriceForProductAfterDiscount * (taxForRegion[0].value /100)
        discount.push(totalPriceForProduct * (state.discount /100))
        tax.push(taxToApply)
        return (reducer + totalPriceForProductAfterDiscount + taxToApply)
      }, 0)

      state.discountAppliedOnBasket = discount.reduce((reducer, item) => reducer + item, 0)
      state.taxAppliedOnBasket = tax.reduce((reducer, item) => reducer + item, 0)
      state.totalPriceInBasket = totalPrice
      state.taxedTotalPriceInBasket = taxedTotalPrice
  },
    deleteProduct(state, action) {},
    calculatePrice(state) {}
  },
});

export const { addProduct, deleteProduct, calculatePrice } = Products.actions;
export default Products.reducer;

