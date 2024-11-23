import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { QuestionsArray } from "../QuestionsArray";
import Pagination from "./Pagination";
import QuestionAnswer from "./QuestionAnswer";

function Questions() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [yourAnswers, setYourAnswers] = useState([{ id: 0, answer: "" }]);
  const [selectedOption, setSelectedOption] = useState("");

  const [currentPageGroup, setCurrentPageGroup] = useState(1);
  const questionsPerPageGroup = 10; // Group size

  useEffect(() => {
    const currentAnswer = yourAnswers.find(
      (answer) => answer.id === questionNumber
    );
    setSelectedOption(currentAnswer ? currentAnswer.answer : "");
  }, [questionNumber, yourAnswers]);

  return (
    <>
      <Pagination
        setQuestionNumber={setQuestionNumber}
        questionNumber={questionNumber}
        questionsPerPageGroup={questionsPerPageGroup}
        currentPageGroup={currentPageGroup}
        setCurrentPageGroup={setCurrentPageGroup}
      />
      {questionNumber !== QuestionsArray.length ? (
        <QuestionAnswer
          setYourAnswers={setYourAnswers}
          setCurrentPageGroup={setCurrentPageGroup}
          questionsPerPageGroup={questionsPerPageGroup}
          setQuestionNumber={setQuestionNumber}
          questionNumber={questionNumber}
          selectedOption={selectedOption}
          yourAnswers={yourAnswers}
          setSelectedOption={setSelectedOption}
        />
      ) : (
        <Navigate to="/result" state={yourAnswers} />
      )}
    </>
  );
}

export default Questions;
