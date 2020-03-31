export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`)
    error.status = response.statusText
    error.response = response
    throw error
  }
}

export function getActionTypes(actions) {
  return Object.entries(actions).reduce(
    (_actions, [action, dispatch]) => ({
      ..._actions,
      [action]: dispatch.toString()
    }),
    {}
  )
}

export function isLogin() {
  return !!localStorage.getItem('caloudi_access_token')
}
