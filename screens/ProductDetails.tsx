import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List } from '@ant-design/react-native'
const Item = List.Item
const Brief = Item.Brief
export default function ProductDetails({ route }: { route: any }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{route.params.name}</Text>
        <Text>{route.params.price} $</Text>
      </View>
      <List>
        <Item>Quantity <Brief>{route.params.quantity}</Brief></Item>
        <Item>Discount <Brief>- {route.params.applayedDiscount} %</Brief></Item>
        <Item>Tax <Brief>+ {route.params.applayedTax} %</Brief></Item>
        <Item extra={route.params.processedTotalPrice+' $'}>Total Price <Brief>With Tax and Discount</Brief></Item>
      </List>
      
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#ffffff'
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ebeef0',
    color: '#ffffff'
  },
  productName: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})