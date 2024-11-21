import React from "react";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="flex flex-col sm:flex-row mt-6 p-4 text-xs sm:text-base">
      <div className="flex-1 p-6 text-center">
        <h1 className="text-base sm:text-[30px] leading-[2] font-bold">
          Welcome to
          <span className="block uppercase">my React and Tailwind CSS</span>
          <span className="block uppercase sm:text-[40px]">Quiz Website</span>{" "}
        </h1>
      </div>
      <div className="flex-1 p-5">
        <p className="mb-8">Read the following instructions carefully.</p>

        <ul role="list" className="list-disc list-outside">
          <li className="mb-1">
            Ensure that your device meets the minimum system requirements and
            has a stable internet connection.
          </li>
          <li className="mb-1">Take note of the exam duration and schedule.</li>
          <li className="mb-1">
            Find a quiet, well-lit, and comfortable environment to minimize
            distractions.
          </li>
          <li className="mb-1">
            You have 45 minutes for this test.
          </li>
          <li>
            Read each question carefully and select the most appropriate answer.
          </li>
          <li className="mb-1">
            In case of any technical difficulties, Communicate any concerns or
            difficulties to the exam invigilator or technical support team
            immediately.
          </li>
        </ul>
        <div className="flex justify-center">
       
            <button className="bg-[#FF6500] mt-5 py-2 px-6 text-white dark:text-[#0B192C] tracking-widest font-bold rounded-full">
            <Link to="/questions">Start Test  </Link>
            </button>
        
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
