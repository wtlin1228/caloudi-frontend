import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// utils

// assets

// actions
import { authAsyncActions } from 'Auth'

// components
import { LoginForm } from 'components'

// self-defined-components

const Login = ({ isLogin, loginAsync }) => {
  useEffect(() => {
    if (isLogin) {
      window.location.reload()
    }
  }, [isLogin])

  function handleSubmit({ username, password }) {
    loginAsync({
      userId: username,
      password
    })
  }

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
}

Login.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  loginAsync: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  isLogin: auth.isLogin
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginAsync: authAsyncActions.loginAsync
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Login)
