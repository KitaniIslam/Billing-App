import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, SearchBar } from 'antd-mobile-rn'

interface Product {
  name: string;
  quantity: number;
  unitPrice: number;
  tax: number;
  discount: number;
  totalPrice: number;
}

const Item = List.Item
const Brief = Item.Brief
const Items = [
  { id: 0, name: 'Apple', quantity: 1, totalPrice: 1000, unitPrice: 0, tax: 0, discount: 0 },
  { id: 1, name: 'Microsoft', quantity: 3, totalPrice: 3000, unitPrice: 0, tax: 0, discount: 0 },
  { id: 2, name: 'Dell', quantity: 5, totalPrice: 1000, unitPrice: 0, tax: 0, discount: 0 },
  { id: 3, name: 'IBM', quantity: 12, totalPrice: 18000, unitPrice: 0, tax: 0, discount: 0 },
  { id: 4, name: 'Apple', quantity: 1, totalPrice: 1000, unitPrice: 0, tax: 0, discount: 0 },
  { id: 5, name: 'Microsoft', quantity: 3, totalPrice: 3000, unitPrice: 0, tax: 0, discount: 0 },
  { id: 6, name: 'Dell', quantity: 5, totalPrice: 1000, unitPrice: 0, tax: 0, discount: 0 },
  { id: 7, name: 'IBM', quantity: 12, totalPrice: 18000, unitPrice: 0, tax: 0, discount: 0 },
  { id: 8, name: 'Apple', quantity: 1, totalPrice: 1000, unitPrice: 0, tax: 0, discount: 0 },
  { id: 9, name: 'Microsoft', quantity: 3, totalPrice: 3000, unitPrice: 0, tax: 0, discount: 0 },
  { id: 10, name: 'Dell', quantity: 5, totalPrice: 1000, unitPrice: 0, tax: 0, discount: 0 },
  { id: 11, name: 'IBM', quantity: 12, totalPrice: 18000, unitPrice: 0, tax: 0, discount: 0 },
]
export default function Products({ navigation }: { navigation: any }) {

  const VisitProductPage = (payload: Product) => {
    navigation.navigate('ProductDetails', payload)
  }
  const [productToFind, setProductToFind] = React.useState<any>({ value: '' })
  const findProduct = (payload: string) => {
    setProductToFind({ ...productToFind, value: payload })
  }

  const clearFindProduct = () => {
    setProductToFind({ ...productToFind, value: '' })
  }
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search by product name"
        cancelText="clear"
        value={productToFind.value}
        onChange={findProduct}
        onCancel={clearFindProduct}
        showCancelButton
      />
      <ScrollView>
        <List>
          {Items
            .filter((product) => product.name.toLowerCase().includes(productToFind.value.toLowerCase()))
            .map((product) => <Item
              arrow="horizontal"
              onClick={() => VisitProductPage(product)}
              extra={`${product.totalPrice} $`}
              key={product.id}
            >
              {product.name}
              <Brief>
                Quantity: {product.quantity}
              </Brief>
            </Item>)}
        </List>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginItems: {
    marginHorizontal: 10
  }
});