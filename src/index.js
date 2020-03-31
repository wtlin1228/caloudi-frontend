import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureAppStore, { sagaMiddleware, rootSaga } from 'core/Store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'view/styles'
import { App, Login } from 'view/pages'
import { isLogin } from 'core/helpers'

const store = configureAppStore()
sagaMiddleware.run(rootSaga)

function IsLoggedIn() {
  return isLogin() ? <App /> : <Login />
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <IsLoggedIn />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
