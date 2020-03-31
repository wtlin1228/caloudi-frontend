import slice from './slice'

export const offerReducer = slice.reducer
export const offerActions = slice.actions
export const offerAsyncActions = slice.sagas
export { default as offerSaga } from './sagas'
