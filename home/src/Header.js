import React from "react";
import "./index.scss";

const Header = ({ message }) => {
  return (
    <div className="p-4 bg-yellow-400 flex justify-center">
      Welcome to {message}
    </div>
  );
};

export default Header;
