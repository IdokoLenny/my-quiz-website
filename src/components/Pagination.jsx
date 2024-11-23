import React from "react";
import { QuestionsArray } from "../QuestionsArray";

const Pagination = ({
  setQuestionNumber,
  questionNumber,
  questionsPerPageGroup,
  currentPageGroup,
  setCurrentPageGroup,
}) => {
  const totalPages = QuestionsArray.length - 1; // Total number of questions
  const totalPageGroups = Math.ceil(totalPages / questionsPerPageGroup);

  // Calculate the page numbers for the current group
  const startPage = (currentPageGroup - 1) * questionsPerPageGroup + 1;
  const endPage = Math.min(
    currentPageGroup * questionsPerPageGroup,
    totalPages
  );

  // Slice the array to get only the numbers for the current group
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    startPage - 1,
    endPage
  );

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
            <button onClick={handlePreviousGroup}>{"<"}</button>
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
            <button onClick={handleNextGroup} className="font-extrabold">
              {">"}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
