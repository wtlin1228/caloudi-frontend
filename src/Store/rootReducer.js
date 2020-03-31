import { combineReducers } from 'redux'

import { exampleReducer } from 'Example'
import { authReducer } from 'Auth'
import { offerReducer } from 'Offer'

const rootReducer = combineReducers({
  example: exampleReducer,
  auth: authReducer,
  offer: offerReducer
})

export default rootReducer
