import { call, put, takeLatest } from 'redux-saga/effects'
import authSlice from './slice'
import { loginAPI } from './apis'
import { checkStatus, getActionTypes } from 'core/helpers'

function* loginAsync({ payload }) {
  try {
    let resp = yield call(loginAPI, payload)
    resp = yield call(checkStatus, resp)

    const {
      userProfile: { userId = '', userName = '' } = {},
      accessToken = ''
    } = resp

    localStorage.setItem('caloudi_access_token', accessToken)

    yield put(
      authSlice.actions.update({
        isLogin: true,
        userProfile: {
          userId,
          userName
        }
      })
    )
  } catch ({ message }) {
    console.error(message)
  }
}

const actions = getActionTypes(authSlice.sagas)

export default function* authSaga() {
  yield takeLatest(actions.loginAsync, loginAsync)
}
