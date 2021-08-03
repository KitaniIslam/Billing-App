import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile-rn'


export default function Login() {
  return (
    <View style={styles.container}>
      <List style={styles.loginItems}>
        <InputItem
          placeholder="Username"
          type="text"
        >
           <Ionicons name="person-outline" style={{}} size={18} color="black" />
        </InputItem>
      </List>
      <WhiteSpace  size="md"/>
      <List style={styles.loginItems}>
        <InputItem
          placeholder="Password"
          type="password"
        >
           <Ionicons name="ios-lock-closed-outline" style={{}} size={18} color="black" />
        </InputItem>
      </List>
      <WhiteSpace  size="md"/>
      <Button type="primary" style={styles.loginItems}>
        Login
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginItems: {
    marginHorizontal: 10
  }
});