import React from 'react'
import styled from 'styled-components'
import { Input } from './Inputs'
import Form from './Form'

const StyledLabel = styled.label`
  margin-right: 10px;
`

function Login({ onSubmit }) {
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault()
          const { username, password } = e.target.elements
          onSubmit({
            username: username.value,
            password: password.value
          })
        }}
      >
        <StyledLabel htmlFor="username-input">Username</StyledLabel>
        <Input
          id="username-input"
          placeholder="Username..."
          name="username"
          style={{ flex: 1, marginBottom: 20 }}
        />
        <StyledLabel id="password-input">Password</StyledLabel>
        <Input
          placeholder="Password..."
          type="password"
          name="password"
          aria-labelledby="password-input"
        />
      </Form>
    </div>
  )
}

export default Login
