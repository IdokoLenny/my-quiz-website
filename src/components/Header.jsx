import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0B192C] p-5 sm:px-40 flex items-center justify-between shadow-lg gap-x-8 h-16">
      <h1 className="dark:text-[#FF6500] font-bold text-base sm:text-xl">
        TEST BODY
      </h1>
      <div className="flex gap-x-4">
        <button onClick={() => darkModeHandler()}>
          {dark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
      </div>
    </header>
  );
}

export default Header;
