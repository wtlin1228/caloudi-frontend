export function fetchOffers(payload) {
  return fetch(`/api/offers/Query`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('caloudi_access_token')}`
    },
    body: JSON.stringify(payload)
  })
}

export function fetchOfferDetail({ country, offerId }) {
  return fetch(`/api/offers/${country}/${offerId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('caloudi_access_token')}`
    }
  })
}

export function fetchOptions(field) {
  return fetch(`/api/offers/dimension/${field}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('caloudi_access_token')}`
    }
  })
}
