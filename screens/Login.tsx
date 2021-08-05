import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile-rn'
import { useTypedDispatch, useTypedSelector } from '../store/hooks'
import { LoginUser } from '../store/futures/Login'


export default function Login() {
  const dispatch = useTypedDispatch()
  const { user } = useTypedSelector((state)=> state.login)
  const logUser = () => {
    dispatch(LoginUser({username: '', password: ''}))
  }
  return (
    <View style={styles.container}>
      <List style={styles.loginItems}>
        <InputItem
          placeholder="Username"
          type="text"
          value={user.username}
        >
           <Ionicons name="person-outline" style={{}} size={18} color="black" />
        </InputItem>
      </List>
      <WhiteSpace  size="md"/>
      <List style={styles.loginItems}>
        <InputItem
          placeholder="Password"
          type="password"
          value={user.password}
        >
           <Ionicons name="ios-lock-closed-outline" style={{}} size={18} color="black" />
        </InputItem>
      </List>
      <WhiteSpace  size="md"/>
      <Button type="primary" style={styles.loginItems} onClick={logUser}>
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