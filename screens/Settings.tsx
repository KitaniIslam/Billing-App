import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { List, Button } from 'antd-mobile-rn';

export default function Settings() {
  const Item = List.Item;
  return (
    <View style={styles.container}>
      <Item
          arrow="horizontal"
          thumb={<Ionicons name="person-outline" style={{marginRight: 10 }} size={18} color="black" />}
          onClick={() => {}}
          disabled
        >
        My Profile
      </Item>
      <Item
          arrow="horizontal"
          thumb={<Ionicons name="ios-eye-outline" style={{marginRight: 10 }} size={18} color="black" />}
          onClick={() => {}}
          disabled
        >
        Appearance
      </Item>
      <Item
          arrow="horizontal"
          thumb={<Ionicons name="ios-lock-closed-outline" style={{marginRight: 10 }} size={18} color="black" />}
          onClick={() => {}}
          disabled
        >
        Privacy & Security
      </Item>
      <Item
          arrow="horizontal"
          thumb={<Ionicons name="ios-headset-outline" style={{marginRight: 10 }} size={18} color="black" />}
          onClick={() => {}}
          disabled
        >
        Help & Support
      </Item>
      <Item
          arrow="horizontal"
          thumb={<Ionicons name="ios-help-outline" style={{marginRight: 10 }} size={18} color="black" />}
          onClick={() => {}}
          disabled
        >
        About
      </Item>
      <Item>
        <Button type="warning">
          Logout
        </Button>
      </Item>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});