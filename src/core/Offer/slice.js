/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit'

const offer = createSlice({
  name: 'offer',
  initialState: {
    options: {
      category: [],
      billing: [],
      unitType: [],
      isAddOn: [],
      hasAddOns: [],
      country: []
    },
    fieldNames: [],
    data: [],
    detail: {}
  },
  // reducers support `immer` so you can mutate the state in slice.
  reducers: {
    update: (state, action) => ({
      ...state,
      ...action.payload
    })
  }
})

offer.sagas = {
  fetchOfferOptionsAsync: createAction('offer/fetchOfferOptionsAsync'),
  fetchOffersAsync: createAction('offer/fetchOffersAsync'),
  fetchOfferDetailAsync: createAction('offer/fetchOfferDetailAsync')
}

export default offer
