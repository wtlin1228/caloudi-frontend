/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit'
import { isLogin } from 'core/helpers'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: isLogin(),
    userProfile: {
      userId: '',
      userName: ''
    }
  },
  // reducers support `immer` so you can mutate the state in slice.
  reducers: {
    update: (state, action) => ({
      ...state,
      ...action.payload
    })
  }
})

authSlice.sagas = {
  loginAsync: createAction('auth/loginAsync')
}

export default authSlice
