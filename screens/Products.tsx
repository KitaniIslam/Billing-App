import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, SearchBar } from 'antd-mobile-rn'
import { useTypedSelector } from '../store/hooks'
import { Product } from '../types'

const Item = List.Item
const Brief = Item.Brief

export default function Products({ navigation }: { navigation: any }) {

  const { Products, Taxes } = useTypedSelector((state) => state.products)

  const VisitProductPage = (payload: Product) => {
    navigation.navigate('ProductDetails', payload)
  }
  const [productToFind, setProductToFind] = React.useState<any>({ value: '' })
  const findProduct = (payload: string) => {
    setProductToFind({ ...productToFind, value: payload })
  }

  const findTaxSymbole = (payload: number):string => (Taxes.filter((itemToFilter) => itemToFilter.value === payload))[0].label

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
          {Products
            .filter((item) => item.name.toLowerCase().includes(productToFind.value.toLowerCase()))
            .map((item) => <Item
              arrow="horizontal"
              onClick={() => VisitProductPage(item)}
              extra={`${item.processedTotalPrice} $`}
              key={item.id}
            >
              {item.name}
              <Brief>
                Qt: {item.quantity} State: {findTaxSymbole(item.applayedTax)}
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