import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { List, Button } from '@ant-design/react-native';
import { useTypedDispatch } from '../store/hooks'
import { Logout } from '../store/futures/Login'

export default function Settings() {

  const Item = List.Item;

  const dispatch = useTypedDispatch()
  const LogoutUser = () => {
      dispatch(Logout())
  }
  return (
    <View style={styles.container}>
      <List>

      <Item
          arrow="horizontal"
          thumb={<Ionicons name="person-outline" style={{marginRight: 10 }} size={18} color="black" />}
          onPress={() => {}}
          disabled
        >
        My Profile
      </Item>
      <Item
          arrow="horizontal"
          thumb={<Ionicons name="ios-eye-outline" style={{marginRight: 10 }} size={18} color="black" />}
          onPress={() => {}}
          disabled
        >
        Appearance
      </Item>
      <Item
          arrow="horizontal"
          thumb={<Ionicons name="ios-lock-closed-outline" style={{marginRight: 10 }} size={18} color="black" />}
          onPress={() => {}}
          disabled
        >
        Privacy & Security
      </Item>
      <Item
          arrow="horizontal"
          thumb={<Ionicons name="ios-headset-outline" style={{marginRight: 10 }} size={18} color="black" />}
          onPress={() => {}}
          disabled
        >
        Help & Support
      </Item>
      <Item
          arrow="horizontal"
          thumb={<Ionicons name="ios-help-outline" style={{marginRight: 10 }} size={18} color="black" />}
          onPress={() => {}}
          disabled
        >
        About
      </Item>
      <Item>
        <Button type="warning" onPress={LogoutUser}>
          Logout
        </Button>
      </Item>
      </List>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});