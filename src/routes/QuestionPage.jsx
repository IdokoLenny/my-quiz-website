import React from "react";
import Header from "../components/Header";
import Questions from "../components/Questions";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBarComponent/ProgressBar";
// import { useCountdown } from "../components/ProgressBarComponent/useCountdown";
// import ResultPage from "./ResultPage";

function QuestionPage() {
  return (
    <div className="dark:bg-[#0B192C] dark:text-white min-h-screen">
      <Header />
      <ProgressBar />
      <Questions />
      <Footer />
    </div>
  );
}

export default QuestionPage;
