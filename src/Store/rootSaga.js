import { all } from 'redux-saga/effects'

import { exampleSaga } from 'Example'
import { authSaga } from 'Auth'
import { offerSaga } from 'Offer'

export default function* rootSaga() {
  yield all([exampleSaga(), authSaga(), offerSaga()])
}
