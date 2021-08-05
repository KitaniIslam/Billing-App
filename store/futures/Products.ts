import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductInBasket, Tax } from '../../types'
import { Logout } from './Login'

const calculatePriceIncludingTaxDiscount = (totalPriceForProduct: number, tax: number, discount: number) => {

    const totalPriceForProductAfterDiscount:number = totalPriceForProduct - (totalPriceForProduct * (discount /100))
    const taxToApply:number = totalPriceForProductAfterDiscount * (tax /100)
    return totalPriceForProductAfterDiscount + taxToApply

}

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
      const totalPrice = (action.payload.quantity * action.payload.price)
      const applayedTax = (state.Taxes.filter((itemToFilter) => itemToFilter.label === action.payload.state))[0].value
      state.Products.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity,
        applayedTax,
        applayedDiscount: state.discount,
        totalPrice,
        processedTotalPrice: calculatePriceIncludingTaxDiscount(totalPrice, applayedTax, state.discount)
      })
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
    changeTax(state, action: PayloadAction<number>) {
      state.tax = action.payload
      Products.caseReducers.resetBasket(state)
    },
    resetBasket(state) {
      state.Basket = []
      state.totalPriceInBasket = 0
      state.taxedTotalPriceInBasket = 0
      state.discountAppliedOnBasket = 0
      state.taxAppliedOnBasket = 0
    }
  },
  extraReducers: {
    [Logout.type]: (state) => {
        state.Products = []
        state.Basket = []
        state.totalPriceInBasket = 0
        state.taxedTotalPriceInBasket = 0
        state.tax = 6
        state.discountAppliedOnBasket = 0
        state.taxAppliedOnBasket = 0
    },
  },
});

export const { addProduct, calculateBasketItemsPrice, changeTax, resetBasket } = Products.actions;
export default Products.reducer;

