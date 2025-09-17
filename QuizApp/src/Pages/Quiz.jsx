// import React, { useState } from 'react'
// import { quizDataArray } from './quizData'

// const Quiz = () => {
//     const [index,setIndex]=useState(0)
//     const [quizData,setQuizData]=useState(quizDataArray[index])
//     const correctAnswer=(e)=>{
// console.log(e)
// if(e.target===quizDataArray.correctAnswer)
// {
//     console.log("you get 1")
// }
//     console.log("you get 0")

//     }
//   return (
//     <div>
//       <h1>Quiz</h1>
//       <h3>{`Qno. ${index+1} ${quizData.question}`}</h3>
//       <li onClick={correctAnswer}>{quizData.options[0]}</li>
//       <li onClick={correctAnswer}>{quizData.options[1]}</li>
//       <li onClick={correctAnswer}>{quizData.options[2]}</li>
//       <li onClick={correctAnswer}>{quizData.options[3]}</li>

//       <button>Next</button>
//     </div>
//   )
// }

// export default Quiz

import React, { useState } from "react";
import { quizDataArray } from "./quizData";

const Quiz = () => {
  const [index, setIndex] = useState(0);           // which question
  const [selected, setSelected] = useState(null);  // user’s selected option
  const [score, setScore] = useState(0);           // total correct answers
  const [showResult, setShowResult] = useState(false); // end state

  const quizData = quizDataArray[index];

  // Handle option click
  const handleAnswer = (option) => {
    setSelected(option);
    if (option === quizData.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  // Handle next button
  const handleNext = () => {
    if (index + 1 < quizDataArray.length) {
      setIndex(index + 1);
      setSelected(null); // reset selection for next question
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Quiz App</h1>

      {showResult ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} / {quizDataArray.length}
          </p>
        </div>
      ) : (
        <div>
          <h3>
            Q{index + 1}. {quizData.question}
          </h3>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {quizData.options.map((option, i) => {
              // styling for selected answer
              let bg = "";
              if (selected) {
                if (option === quizData.correctAnswer) bg = "lightgreen";
                else if (option === selected) bg = "salmon";
              }

              return (
                <li
                  key={i}
                  onClick={() => !selected && handleAnswer(option)}
                  style={{
                    margin: "8px 0",
                    padding: "10px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    cursor: selected ? "not-allowed" : "pointer",
                    backgroundColor: bg,
                  }}
                >
                  {option}
                </li>
              );
            })}
          </ul>

          <button
            onClick={handleNext}
            disabled={!selected}
            style={{
              marginTop: "15px",
              padding: "8px 15px",
              cursor: selected ? "pointer" : "not-allowed",
            }}
          >
            {index + 1 === quizDataArray.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
