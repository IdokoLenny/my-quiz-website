import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { QuestionsArray } from "../QuestionsArray";
import { v4 as uuidv4 } from 'uuid';

function Questions() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [yourAnswers, setYourAnswers] = useState([{id: 0, answer: ""}]);
  const [selectedOption, setSelectedOption] = useState("");

  const [currentPageGroup, setCurrentPageGroup] = useState(1);
  const questionsPerPageGroup = 10; // Group size


  useEffect(() => {
    const currentAnswer = yourAnswers.find(
      (answer) => answer.id === questionNumber
    );
    setSelectedOption(currentAnswer ? currentAnswer.answer : "");
  }, [questionNumber, yourAnswers]);

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
    
    const newPageGroup = Math.ceil(questionNumber / questionsPerPageGroup); // Calculate the correct page group
    // setCurrentPageGroup(newPageGroup);

    questionNumber == 10 ? setCurrentPageGroup(newPageGroup + 1) : setCurrentPageGroup(newPageGroup);
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
    
    const newPageGroup = Math.ceil(questionNumber / questionsPerPageGroup); // Calculate the correct page group
    // setCurrentPageGroup(newPageGroup);

    questionNumber == 11 ? setCurrentPageGroup(newPageGroup - 1) : setCurrentPageGroup(newPageGroup);
  }

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
  }
  
  const handleClick = (option) => {
    setSelectedOption(option)
  };


  const Pagination = () => {

    const totalPages = QuestionsArray.length - 1; // Total number of questions
  const totalPageGroups = Math.ceil(totalPages / questionsPerPageGroup);

  // Current page group

  // Calculate the page numbers for the current group
  const startPage = (currentPageGroup - 1) * questionsPerPageGroup + 1;
  const endPage = Math.min(currentPageGroup * questionsPerPageGroup, totalPages);

  // Slice the array to get only the numbers for the current group
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).slice(startPage - 1,endPage);

  // Handlers for navigating between groups
  const handlePageClick = (number) => {
    setQuestionNumber(number); // Update the current question

    const newPageGroup = Math.ceil(number / questionsPerPageGroup); // Calculate the correct page group
    setCurrentPageGroup(newPageGroup);
  };

  const handleNextGroup = () => {
    if (currentPageGroup < totalPageGroups) {
      setCurrentPageGroup(currentPageGroup + 1);
    }
  };

  const handlePreviousGroup = () => {
    if (currentPageGroup > 1) {
      setCurrentPageGroup(currentPageGroup - 1);
    }
  };

  return (
    <nav className="fixed z-50 w-full bg-white flex flex-col items-center mt-[60px] top-14 dark:bg-[#0B192C] dark:text-white">
      <ul className="flex justify-center">
        {currentPageGroup > 1 && (
          <li className="border p-2 rounded-l-lg">
            <button onClick={handlePreviousGroup}>{'<'}</button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              questionNumber === number
                ? "dark:text-white dark:bg-[#FF6500] bg-[#FF6500] border p-2 text-sm sm:text-base"
                : "dark:bg-[#0B192C] dark:text-white bg-white border p-2 text-sm sm:text-base"
            }
          >
            <button onClick={() => handlePageClick(number)}>{number}</button>
          </li>
        ))}
        {currentPageGroup < totalPageGroups && (
          <li className="border p-2 rounded-r-lg">
            <button onClick={handleNextGroup} className="font-extrabold">{">"}</button>
          </li>
        )}
      </ul>
    </nav>
  );

    }


  return (
    <>

      <Pagination />

    {questionNumber !== QuestionsArray.length ?

    <div className="flex flex-col sm:flex-row gap-3 m-10 text-xs sm:text-base">
      <div className="flex-1 p-5 mt-7">
        <h1 className="mb-5 mt-10 sm:mt-7">QUESTION </h1>
        <p>
          {questionNumber}. {QuestionsArray[questionNumber].question}
        </p>
      </div>
      <div className="flex-1 p-5 sm:mt-7">
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
            {/* <Link to={questionNumber + 1 === QuestionsArray.length ? "/result" : "/questions"} state={yourAnswers}>{questionNumber +1 === QuestionsArray.length ? "Submit" : "Next >"}</Link> */}
            <Link to={"/questions"} state={yourAnswers}>{questionNumber +1 === QuestionsArray.length ? "Submit" : "Next >"}</Link>
          </button>
        </div>
      </div>
    </div> : <Navigate to="/result" state={yourAnswers} />}

    </>
  );
}

export default Questions;
