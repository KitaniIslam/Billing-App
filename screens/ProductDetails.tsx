import * as React from 'react'
import { View, Text } from 'react-native'

export default function ProductDetails({ route }: { route: any }) {

  return (
    <View>
      <Text>{
      route.params.name + ' ' +
      route.params.quantity + ' '+
      route.params.unitPrice + ' '
      + ' ' + route.params.totalPrice + ' '
      + route.params.tax + ' ' +
      route.params.discount
      }</Text>
      
    </View>
  )
}