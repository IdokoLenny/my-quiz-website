import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 text-center w-full h-10">
        <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
