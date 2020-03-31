import slice from './slice'

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authAsyncActions = slice.sagas
export { default as authSaga } from './sagas'
