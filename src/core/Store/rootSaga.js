import { all } from 'redux-saga/effects'

import { exampleSaga } from 'core/Example'
import { authSaga } from 'core/Auth'
import { offerSaga } from 'core/Offer'

export default function* rootSaga() {
  yield all([exampleSaga(), authSaga(), offerSaga()])
}
