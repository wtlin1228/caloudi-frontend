import styled from 'styled-components'

const Input = styled.input`
  background: white;
  height: 50px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 30px -5px rgba(79, 79, 79, 0.3);
  border-bottom: 5px;
  width: 100%;
  min-width: 150px;
  display: block;
  padding-left: 10px;
  ::placeholder {
    opacity: 0.5;
  }
`

const TextArea = styled.textarea`
  background: white;
  border: none;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 8px 30px -5px rgba(79, 79, 79, 0.3);
  border-bottom: 5px;
  width: 100%;
  min-width: 150px;
  display: block;
  margin: 0 auto 10px auto;
  padding-top: 10px;
  padding-left: 10px;
  ::placeholder {
    opacity: 0.5;
  }
`

const Button = styled.button`
  font-size: 13px;
  font-family: 'Raleway; sans-serif';
  background: ${props => props.theme.colors.green};
  padding: 10px 20px;
  display: block;
  margin-left: auto;
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 8px 30px -5px rgba(79, 79, 79, 0.3);
  cursor: pointer;
  transition: 0.5s;
  :hover {
    box-shadow: 0px 8px 5px -5px rgba(79, 79, 79, 0.3);
  }
`

export { Input, TextArea, Button }
