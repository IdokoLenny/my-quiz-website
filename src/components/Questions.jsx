import React, { useState } from "react";
import { Link} from "react-router-dom";
import { QuestionsArray } from "../QuestionsArray";
import { v4 as uuidv4 } from 'uuid';

function Questions() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [yourAnswers, setYourAnswers] = useState([{id: 0, answer: ""}]);
  const [selectedOption, setSelectedOption] = useState("");

  function updateAnswer(newAnswer) {

    if (newAnswer.answer !== "") {
         const index = yourAnswers.findIndex((answers) => answers.id === newAnswer.id);
        if (index !== -1) {
            yourAnswers[index].answer = newAnswer.answer;
            setYourAnswers((prev) => {
                return [...prev];
              });
          } else {
            setYourAnswers((prev) => {
                return [...prev, newAnswer];
              });
          }
    }

    setQuestionNumber(questionNumber + 1);
    setSelectedOption("")

  }

  function updateBackAnswer(newAnswer) {
    if (newAnswer.answer !== "") {
    
        const index = yourAnswers.findIndex((answers) => answers.id === newAnswer.id);
        if (index !== -1) {
            yourAnswers[index].answer = newAnswer.answer;
            setYourAnswers((prev) => {
                return [...prev];
              });
          } else {
            setYourAnswers((prev) => {
                return [...prev, newAnswer];
              });
          }
      
    }
    setQuestionNumber(questionNumber - 1);
    setSelectedOption("")
  }

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
  };
  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 m-5 text-xs sm:text-base">
      <div className="flex-1 p-5">
        <h1 className="mb-5 mt-7">QUESTION </h1>
        <p>
          {questionNumber}. {QuestionsArray[questionNumber].question}
        </p>
      </div>
      <div className="flex-1 p-5">
        <h1 className="mb-5 sm:mt-7">OPTIONS</h1>
        <ol>
          {QuestionsArray[questionNumber].options.map((option) => {
            return (
              <div key={uuidv4()} onClick={() => handleClick(option)} className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 mb-3">
                <input
                  type="radio"
                  value={option}
                  onChange={handleOptionChange}
                  checked={selectedOption == option}
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  className="w-full py-4 ms-2 text-sm text-xs sm:font-medium text-gray-900 dark:text-gray-300"
                >
                  {option}
                </label>
              </div>
            );
          })}
        </ol>
        <div className="text-center mt-5 pt-3">
            {questionNumber > 1 && <button
            className="bg-[#FF6500] p-2 px-5 rounded-full mr-5"
            onClick={() => updateBackAnswer({id: questionNumber, answer: selectedOption})}
          >
            <Link to="/questions"> {"<"} Back</Link>
          </button>}
          <button
            className="bg-[#FF6500] p-2 px-5 rounded-full"
            onClick={() => updateAnswer({id: questionNumber, answer: selectedOption})}
          >
            <Link to={questionNumber + 1 === QuestionsArray.length ? "/result" : "/questions"} state={yourAnswers}>{questionNumber +1 === QuestionsArray.length ? "Submit" : "Next >"}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
