import React from 'react'
import { render, cleanup, Simulate } from '@testing-library/react'
import Login from '../Login'

afterEach(cleanup)

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  const fakeUser = {
    username: 'sandbox.dev@caloudi.com',
    password: 'cspdev4fun#'
  }
  const handleSubmit = jest.fn()
  const { container, getByLabelText, getByText } = render(
    <Login onSubmit={handleSubmit} />
  )

  const usernameNode = getByLabelText('Username')
  const passwordNode = getByLabelText('Password')
  const formNode = container.querySelector('form')
  const submitButtonNode = getByText('Submit')

  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password

  // Act
  Simulate.submit(formNode)

  // Assert
  // no change necessary here
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
  expect(submitButtonNode.type).toBe('submit')
})

test('snapshot', () => {
  const { container } = render(<Login />)
  expect(container.firstChild).toMatchSnapshot()
})
