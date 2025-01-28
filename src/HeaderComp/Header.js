import "./Header.css";
import React  from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/Home")
  }

  const handleMenuClick = () => {
    navigate("/Menu")
  }

  const handleAboutClick = () => {
    navigate("/About")
  }

  const handleContactClick = () => {
    navigate("/Contact")
  }


  return (
    <div className="header">
      <nav className="navbar">
        <h1>MAHA'S FOOD COURT</h1>
        <ul className="listitems no-bullets">
          <li onClick={handleHomeClick}>HOME</li>
          <li onClick={handleMenuClick}>MENU</li>
          <li onClick={handleAboutClick}>ABOUT US</li>
          <li onClick={handleContactClick}>CONTACT</li>
        </ul>
      </nav>

      {/* <div className="searchbar">
        <input type="text" placeholder="Search" />
      </div> */}
    </div>
  );
};

export default Header;
