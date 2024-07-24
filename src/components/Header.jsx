import React from "react";

const Header = ({ onFetchData }) => {
  return (
    <div className="head">
      <h1>Blue Whales</h1>
      <button className="btn" onClick={onFetchData}>
        Get User List
      </button>
    </div>
  );
};

export default Header;
