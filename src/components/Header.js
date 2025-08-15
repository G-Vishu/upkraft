import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import '../styles/Dashboard.css';
import tutorImage from '../assets/sherry.png'; 

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder="Search here" />
      </div>
      <div className="user-info">
        <FaBell className="notification-icon" />
        <div className="user-profile">
          <img src={tutorImage} alt="Sherry Wolf" />
          <div>
            <p>Sherry Wolf</p>
            <span>Tutor</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;