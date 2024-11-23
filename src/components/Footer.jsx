import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center w-full h-10 text-xs sm:text-base">
        <p className="dark:text-[#FF6500]"><a href="https://github.com/IdokoLenny" alt="MyGithubLink">IdokoLenny.</a> All rights reserved&reg; {currentYear}</p>
    </footer>
  );
}

export default Footer;
