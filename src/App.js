import { useState } from "react";
import "./App.css";

const questions = [
  {
    id: 3457,
    question: "what language is React based on ?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "what are the building blocks of React apps ?",
    answer: "Components",
  },
  {
    id: 8832,
    question:
      "what is the name of the syntax we used to describe a UI in React ?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child component?",
    answer: "Props",
  },
  {
    id: 5678,
    question: "How to give components memory",
    answer: "unknown",
  },
  {
    id: 9103,
    question:
      "what do we call an input element that is completely synchronized with state",
    answer: "Controlled element",
  },
];

function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

export default App;

function FlashCards() {
  const [selected, setSelected] = useState(null); // FIRST DEFINE THE STATE VARIABLE

  function handleClick(id) {
    setSelected(id !== selected ? id : null); //THIRD UPDATE IT OR CREATE A FUNCNTION FOR IT
  } //THE CONDITION HERE IS , IF THE QUESTION ID IS DIFF FROM THE ALREADY SELECTED ID THEN SET THE ID THEN SET THE ID BUT IF NOT SET IT BACK TO NULL

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)} // SECOND,USE THE SATE VARIABLE HERE AND CREATE A FUNCTION FOR IT
          className={question.id === selected ? "selected" : ""}
        >
          <p>
            {question.id === selected ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
