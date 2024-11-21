import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { QuestionsArray } from "../QuestionsArray";

const ResultPage = () => {
  const location = useLocation();
  const yourAnswers = location.state || [];

  function getScore() {
    let score = 0;
    for (let i=1; i < yourAnswers.length; i++){
      for (let j=1; j < QuestionsArray.length; j++){
        if (yourAnswers[i].id == QuestionsArray[j].id){
          if (yourAnswers[i].answer == QuestionsArray[j].answer){
            score = score + 1;
          }
        }
      }
    }
    return score;
  }

  return (
    <div className="dark:bg-[#0B192C] dark:text-white min-h-screen text-xs sm:text-base">
      {console.log(yourAnswers)}  
      <Header />
      <div className="h-screen flex items-center justify-center">
        <div className="w-[50%] sm:w-[30%]  h-[50%] bg-red-400 flex items-center justify-center text-center">
          <div>
            <h1 className="mb-5">TIME UP!</h1>
            <h2>Your test score is: </h2>
            <h1>
              {getScore()} <span>out of </span> {QuestionsArray.length - 1}
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResultPage;
