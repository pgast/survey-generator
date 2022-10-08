import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 50%;
  font-size: 17px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 500px;
`

export const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  /* Selecting the nested text input */
  input[type="text"] {
    border: 1px solid gray;
    width: 80%;
    font-size: 17px;
    padding: 12px;
    max-width: auto;
    color: grey;
    border-radius: 4px;
    margin-top: 2px;
    text-overflow: ellipsis;
  }

  input[type="text"]:focus {
    margin-top: 0;
    color: black;
    border: 2px solid black;
    outline: none;
  }
`

export const InputLabelContainer = styled.div`
  font-weight: bold;
  border-bottom: 2px solid black;
  padding-bottom: 4px;
  margin-bottom: 12px;
`

export const RadioInputWrapper = styled(InputTextWrapper)``

export const RadioInputOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  font-size: 15px;

  label {
    margin: 5px 0;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
  }

`

export const AddButton = styled.button`
  width: 200px;
  height: 50px;
  font-weight: bold;
  color: ${({ disabled }) => disabled ? 'gray' : 'white'};
  background: ${({ disabled }) => disabled ? '#d3d3d3' : 'black'};
  border: ${({ disabled }) => disabled ? 'none' : 'black'};
  border-radius: 4px;
  align-self: center;
`