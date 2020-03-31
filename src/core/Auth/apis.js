export function loginAPI({ userId = '', password = '' }) {
  return fetch(`/api/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      password
    })
  })
}
