import {
  Content,
  AddButton,
  FormContainer,
  InputTextWrapper,
  RadioInputWrapper,
  InputLabelContainer,
  RadioInputOptionsContainer,
} from './styled'

const answerTypes = ["text", "boolean", "number", "multiple choice"]
const isRequiredTypes = ["yes", "no"]

function renderRadioInputs({value, onChangeHandler, options, name}) {
  return options.map(option => (
    <label>
      <input
        name={name}
        type="radio"
        value={option}
        checked={value === option}
        onChange={e => onChangeHandler(e.target.value)}
      />
      {option}
    </label>
  ))
}

const Form = ({
  formType,
  formText,
  setFormText,
  setFormType,
  formIsRequired,
  submitQuestion,
  setFormIsRequired,
}) => (
  <FormContainer>
    <Content>
      <InputTextWrapper>
        <InputLabelContainer>
          What's the question?
        </InputLabelContainer>
        <input 
          type="text"
          value={formText} 
          onChange={e => setFormText(e.target.value)} 
        />
      </InputTextWrapper>
      <RadioInputWrapper>
        <InputLabelContainer>
          Is the question required?
        </InputLabelContainer>
        <RadioInputOptionsContainer>
          {renderRadioInputs({
            value: formIsRequired, 
            onChangeHandler: setFormIsRequired, 
            options: isRequiredTypes, 
            name: "isRequired",
          })}
        </RadioInputOptionsContainer>
      </RadioInputWrapper>
      <RadioInputWrapper>
        <InputLabelContainer>
          What type of answer are you expecting?
        </InputLabelContainer>
        <RadioInputOptionsContainer>
          {renderRadioInputs({
            value: formType, 
            onChangeHandler: setFormType, 
            options: answerTypes, 
            name: "formType",
          })}
        </RadioInputOptionsContainer>
      </RadioInputWrapper>
      <AddButton 
        onClick={submitQuestion} 
        disabled={formText.trim().length === 0}
      >
        ADD QUESTION
      </AddButton>
    </Content>
  </FormContainer>
)

export default Form
