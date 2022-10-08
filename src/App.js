import './App.css';
import { useState } from 'react'

import List from './components/questionsList'
import Form from './components/form'

function App() {
  const [questions, setQuestions] = useState([])
  // Form State
  const [formText, setFormText] = useState('')
  const [formType, setFormType] = useState('text')
  const [formIsRequired, setFormIsRequired] = useState("yes")

  function deleteQuestion(index) {
    let newQuestions = [...questions]
    newQuestions.splice(index, 1)
    setQuestions(newQuestions)
  }

  function clearForm() {
    setFormText('')
    setFormType('text')
    setFormIsRequired("yes")
  }

  function submitQuestion() {
    let question = {
      type: formType,
      isRequired: formIsRequired,
      text: formText.trim()
    }

    let newQuestions = [...questions, question]
    setQuestions(newQuestions)
    clearForm()
  }

  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
 
    return result;
  };

  function onDragEnd(result) {
    if (!result.destination) return

    const newQuestions = reorder(
      questions,
      result.source.index,
      result.destination.index
    );

    setQuestions(newQuestions)
  }

  return (
    <div className="App">
      <Form 
        formText={formText}
        formType={formType}
        setFormText={setFormText}
        setFormType={setFormType}
        submitQuestion={submitQuestion}
        formIsRequired={formIsRequired}
        setFormIsRequired={setFormIsRequired}
      />
      <List 
        questions={questions} 
        onDragEnd={onDragEnd}
        deleteQuestion={deleteQuestion}
      />
    </div>
  );
}

export default App;
