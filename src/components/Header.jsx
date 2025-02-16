import React from "react";

const Header = ({ name, image }) => {
  return (
    <header className="header">
      <div className="profile-container">
        <img src={image} alt="Profile" className="profile-image" />
        <h1 className="profile-name">{name}</h1>
      </div>
    </header>
  );
};

export default Header;