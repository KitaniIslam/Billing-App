import * as React from 'react';
import { View, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import DetailsModal from '../components/DetailsModal';
import { Stepper, List, InputItem, Button, Picker, Toast } from '@ant-design/react-native';
import { useTypedDispatch, useTypedSelector } from '../store/hooks'
import { addProduct, changeTax } from '../store/futures/Products';
import { ProductInBasket } from '../types'

export default function Billing() {
  const dispatch = useTypedDispatch()
  const { Taxes, Basket } = useTypedSelector((state) => state.products)

  const [showErrors, setErrorsStatus] = React.useState(false)
  const [productName, setProductName] = React.useState<string>('')
  const [productPrice, setProductPrice] = React.useState(0)
  const [productQuantity, setProductQuantity] = React.useState(1)
  const [selectedState, setSelectedState] = React.useState<string[]>(["AL"])

  const changeSelectedState = (payload: any) => {
    const newSelectedState = Taxes.filter((item) => item.value === Number(payload[0]))
    if (newSelectedState[0].label === selectedState[0]) return
    Alert.alert(
      "Change State?",
      "By changing state basket will be reset but product still apers in Products Tab",
      [
        // The "Yes" button
        {
          text: "Continue",
          onPress: () => {
            setSelectedState([newSelectedState[0].label])
            dispatch(changeTax(newSelectedState[0].value))
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "Cancel",
        },
      ]
    );
  };

  const changeProductName = (payload: string) => {
    setProductName(payload)
  }

  const changeProductPrice = (payload: any) => {
    setProductPrice(payload)
  }

  const changeProductQuantity = (payload: number) => {
    setProductQuantity(payload)
  }

  const addProductToBasket = () => {
    const newProduct: ProductInBasket = {
      id: new Date().getTime(),
      name: productName,
      price: Number(productPrice),
      state: selectedState[0],
      quantity: productQuantity
    }
    if (productName.length < 1 || Number(productPrice) === 0) {
      setErrorsStatus(true)
    } else {
      dispatch(addProduct(newProduct))
      Toast.success(`${productName} added successfully`)
      // reset state
      setProductName('')
      setProductPrice(0)
      setProductQuantity(1)
      setErrorsStatus(false)
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <ScrollView style={{backgroundColor: '#ffffff'}}>
          <InputItem
            clear
            type="text"
            onChange={changeProductName}
            placeholder="Enter Product Label"
            value={productName}
            style={styles.inputItems}
          >
            Product
          </InputItem>
          {showErrors && productName.length < 1 && <Text style={styles.errorMessage}>Please Enter Name</Text>}
          <InputItem
            clear
            type="number"
            onChange={changeProductPrice}
            placeholder="Enter Price"
            value={`${productPrice}`}
            style={styles.inputItems}
          >
            Price
          </InputItem>
          {showErrors && Number(productPrice) === 0 && <Text style={styles.errorMessage}>Please Set valide Price</Text>}
          <List.Item
            extra={
              <Stepper
                key="0"
                min={1}
                defaultValue={productQuantity}
                onChange={changeProductQuantity}
              />
            }
          >
            Quantity
          </List.Item>
          <Picker
            data={Taxes}
            cols={1}
            value={selectedState}
            okText="Select"
            title="Select State"
            extra={selectedState[0]}
            dismissText="cancel"
            onChange={changeSelectedState}
          >
            <List.Item arrow="down" >
              Select State
            </List.Item>
          </Picker>
          <Button type="primary" style={{ marginHorizontal: 15, marginTop: 10 }} onPress={addProductToBasket}>Add To List</Button>
          <View>
            <List renderHeader="Basket">
              {Basket.map((item) => <List.Item key={item.id} extra={item.price * item.quantity}>{item.name}<List.Item.Brief>{`Qt: ${item.quantity} State: ${item.state}`}</List.Item.Brief></List.Item>)}
            </List>
          </View>
        </ScrollView>
      </View>
      <DetailsModal />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsButton: {
  },
  inputArea: {
    display: 'flex',
    flex: 1
  },
  picker: {
    backgroundColor: '#9f98c5'
  },
  errorMessage: {
    color: '#e74c3c',
    marginLeft: 15
  },
  inputItems: {
    backgroundColor: '#ffffff',
    marginLeft: 0,
    paddingLeft: 10
  }
});