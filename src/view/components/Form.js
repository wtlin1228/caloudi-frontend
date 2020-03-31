import React from 'react'
import styled from 'styled-components'
import { Button } from './Inputs'

const labelSpace = 100
const gridGap = 16

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 200px;
  max-width: 400px;
  margin-top: 200px;
  margin-left: -(${labelSpace + gridGap}) px;

  @media only screen and (max-width: 819px) {
    margin-left: 0;
    width: 90%;
  }
`

const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: ${labelSpace}px 1fr;
  grid-gap: 0;
  font-size: 18px;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Form({ children, ...props }) {
  return (
    <Wrapper>
      <StyledForm {...props}>
        <FieldContainer>{children}</FieldContainer>
        <Button type="submit">Submit</Button>
      </StyledForm>
    </Wrapper>
  )
}

export default Form
