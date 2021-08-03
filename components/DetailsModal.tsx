import * as React from 'react'
import { Button, List, Modal } from 'antd-mobile-rn'
import { View } from 'react-native'

export default function DetailsModal({ originalPrice, discount, tax, totalPrice }: { originalPrice: number, discount: number, tax: number, totalPrice: number }) {
  const [displayDetails, setModalStatus] = React.useState(false)
  const showModal = () => {
    setModalStatus(true)
  }
  const onClose = () => {
    setModalStatus(false)
  }
  return (
    <View>
      <List.Item arrow="up" onClick={showModal}>
        Total Price: $ 1,028.20
        <List.Item.Brief>
          Click for more details
        </List.Item.Brief>
      </List.Item>
      <Modal
        popup
        visible={displayDetails}
        onClose={onClose}
        animationType="slide-up"
      >
        <List>
          <List.Item key={0}>{`Total Price Without Tax: $ ${originalPrice}`}</List.Item>
          <List.Item key={1}>{`Discount 3% : $ ${discount}`}</List.Item>
          <List.Item key={2}>{`Tax 6% : $ ${tax}`}</List.Item>
          <List.Item key={3}>{`Total Price: $ ${totalPrice}`}</List.Item>
          <List.Item>
            <Button type="primary" onClick={onClose}>Close</Button>
          </List.Item>
        </List>
      </Modal>
    </View>
  )
}