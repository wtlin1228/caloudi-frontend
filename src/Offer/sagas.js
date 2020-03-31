import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import offerSlice from './slice'
import { fetchOffers, fetchOfferDetail, fetchOptions } from './apis'
import { checkStatus, getActionTypes } from 'helpers'

function* fetchOfferOptionsAsync({ payload }) {
  try {
    const { field } = payload

    let options = yield select(state => state.offer.options)
    if (options[field].length > 0) return

    let resp = yield call(fetchOptions, field)
    resp = yield call(checkStatus, resp)

    options = yield select(state => state.offer.options)
    yield put(
      offerSlice.actions.update({
        options: {
          ...options,
          [field]: resp
        }
      })
    )
  } catch ({ message }) {
    console.error(message)
  }
}

function* fetchOfferDetailAsync({ payload }) {
  try {
    let resp = yield call(fetchOfferDetail, payload)
    resp = yield call(checkStatus, resp)

    yield put(
      offerSlice.actions.update({
        detail: resp
      })
    )
  } catch ({ message }) {
    // window.alert('please login again')
    // localStorage.setItem('caloudi_access_token', '')
    // window.location.reload()
  }
}

function* fetchOffersAsync({ payload }) {
  try {
    let resp = yield call(fetchOffers, payload)
    resp = yield call(checkStatus, resp)

    const [fieldNames, ...data] = resp

    yield put(
      offerSlice.actions.update({
        fieldNames,
        data
      })
    )
  } catch ({ message }) {
    window.alert('please login again')
    localStorage.setItem('caloudi_access_token', '')
    window.location.reload()
  }
}

const actions = getActionTypes(offerSlice.sagas)

export default function* offerSaga() {
  yield takeEvery(actions.fetchOfferOptionsAsync, fetchOfferOptionsAsync)
  yield takeLatest(actions.fetchOfferDetailAsync, fetchOfferDetailAsync)
  yield takeLatest(actions.fetchOffersAsync, fetchOffersAsync)
}
