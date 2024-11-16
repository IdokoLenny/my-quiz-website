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
    <header className="p-6 flex items-center justify-between shadow-lg dark:shadow-white gap-x-8 px-40">
      <h1>TEST BODY</h1>
      <div className="flex gap-x-4">
        <button onClick={() => darkModeHandler()}>
          {dark && <MdOutlineLightMode />}
          {!dark && <MdOutlineDarkMode />}
        </button>
      </div>
    </header>
  );
}

export default Header;
