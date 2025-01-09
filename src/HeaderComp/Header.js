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
        <h1>Maha's Food Court</h1>
        <ul className="listitems no-bullets">
          <li onClick={handleHomeClick}>Home | </li>
          <li onClick={handleMenuClick}>Menus | </li>
          <li onClick={handleAboutClick}>About Us |</li>
          <li onClick={handleContactClick}>Contact |</li>
        </ul>
      </nav>

      {/* <div className="searchbar">
        <input type="text" placeholder="Search" />
      </div> */}
    </div>
  );
};

export default Header;
