import * as React from 'react';
import { View, StyleSheet, LogBox, Alert, ScrollView } from 'react-native';
import DetailsModal from '../components/DetailsModal';
import { Stepper, List, InputItem, Button, Picker } from 'antd-mobile-rn';


export default function Billing() {

  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])

  const [selectedState, setState] = React.useState(["AL"])
  const changeState = () => {
    Alert.alert('Change State Error', 'State cant be change at the moment, default one : AL')
  };

  const data = [
    { label: "AK", value: 5 },
    { label: "AL", value: 6 },
    { label: "AR", value: 3 },
    { label: "AS", value: 5.7 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <ScrollView>

        <List>
          <InputItem
            clear
            type="text"
            onChange={value => { }}
            placeholder="Enter Product Label"
          >
            Product
          </InputItem>
          <InputItem
            clear
            type="number"
            onChange={value => { }}
            placeholder="Enter Price"
          >
            Price
          </InputItem>
          <List.Item
            extra={
              <Stepper
                key="0"
                min={1}
                defaultValue={1}
              />
            }
          >
            Quantity
          </List.Item>
          <Picker
            data={data}
            cols={1}
            value={selectedState}
            okText="Select"
            title="Select State"
            extra={selectedState[0]}
            dismissText="cancel"
            onChange={changeState}
          >
            <List.Item arrow="down" >
            Select State
            </List.Item>
          </Picker>
          <Button type="primary">Add To List</Button>
        </List>
        </ScrollView>
      </View>
      <DetailsModal
        originalPrice={1000}
        discount={3}
        tax={6}
        totalPrice={1080}
      />
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
  }
});