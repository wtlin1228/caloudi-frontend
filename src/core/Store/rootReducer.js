import { combineReducers } from 'redux'

import { exampleReducer } from 'core/Example'
import { authReducer } from 'core/Auth'
import { offerReducer } from 'core/Offer'

const rootReducer = combineReducers({
  example: exampleReducer,
  auth: authReducer,
  offer: offerReducer
})

export default rootReducer
