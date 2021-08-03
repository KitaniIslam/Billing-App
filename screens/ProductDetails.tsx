import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List } from 'antd-mobile-rn'
const Item = List.Item
const Brief = Item.Brief
export default function ProductDetails({ route }: { route: any }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{route.params.name}</Text>
        <Text>{route.params.unitPrice} $</Text>
      </View>
      <List>
        <Item>Quantity <Brief>{route.params.quantity}</Brief></Item>
        <Item>Discount <Brief>- {route.params.discount} %</Brief></Item>
        <Item>Tax <Brief>+ {route.params.tax} %</Brief></Item>
        <Item extra={route.params.totalPrice+' $'}>Total Price <Brief>With Tax</Brief></Item>
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