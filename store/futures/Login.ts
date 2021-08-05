import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Login } from '../../types'



interface initialState  {
  user: Login
  isLoggedIn: boolean;
}

const initialState: initialState = {
  user: {
    username: 'admin',
    password: 'admin'
  },
  isLoggedIn: false
}

const LoginClient = createSlice({
  name: 'login',
  initialState,
  reducers: {
    LoginUser(state, action: PayloadAction<Login>) {
      state.isLoggedIn = true
    },
    Logout(state) {
      state.isLoggedIn = false
    },
  }
})

export const { LoginUser, Logout } = LoginClient.actions;
export default LoginClient.reducer;