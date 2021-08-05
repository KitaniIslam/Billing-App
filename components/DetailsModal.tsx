import * as React from 'react'
import { Button, List, Modal } from 'antd-mobile-rn'
import { View, Text, StyleSheet } from 'react-native'
import { useTypedSelector } from '../store/hooks'

export default function DetailsModal() {
  const [displayDetails, setModalStatus] = React.useState(false)
  const { totalPriceInBasket, taxedTotalPriceInBasket, tax, discount, discountAppliedOnBasket, taxAppliedOnBasket } = useTypedSelector((state) => state.products)
  const showModal = () => {
    setModalStatus(true)
  }
  const onClose = () => {
    setModalStatus(false)
  }
  return (
    <View>
      <List.Item arrow="up" onClick={showModal} style={{backgroundColor: '#3498db'}}>
          <Text style={styles.title}>Total Price: $ {taxedTotalPriceInBasket}</Text>
        <List.Item.Brief>
          <Text style={styles.brief}>Click for more details</Text>
        </List.Item.Brief>
      </List.Item>
      <Modal
        popup
        visible={displayDetails}
        onClose={onClose}
        animationType="slide-up"
      >
        <List>
          <List.Item key={0}>{`Total Price Without Tax: $ ${totalPriceInBasket}`}</List.Item>
          <List.Item key={1}>{`Discount ${discount}% : $ ${discountAppliedOnBasket.toFixed(2)}`}</List.Item>
          <List.Item key={2}>{`Tax ${tax}% : $ ${taxAppliedOnBasket.toFixed(2)}`}</List.Item>
          <List.Item key={3}>{`Total Price: $ ${taxedTotalPriceInBasket.toFixed(2)}`}</List.Item>
          <List.Item>
            <Button type="primary" onClick={onClose}>Close</Button>
          </List.Item>
        </List>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18
  },
  brief: {
    color: '#ffffff',
  }
})