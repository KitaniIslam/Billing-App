/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Product: undefined;
};

export type BottomTabParamList = {
  Billing: undefined;
  Products: undefined;
  Settings: undefined;
};

export type BillingParamList = {
  Billing: undefined;
};

export type ProductsParamList = {
  Products: undefined;
  ProductDetails: undefined;
};

export type SettingsParamList = {
  Settings: undefined;
};

export type LoginStackParamList = {
  Login: undefined
};


export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  applayedTax: number;
  applayedDiscount: number;
  totalPrice: number;
  processedTotalPrice: number;
};

export type ProductInBasket = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  state: string;
};

export type Tax = {
  label: string;
  value: number;
}

export type Login = {
  username: string;
  password: string;
}