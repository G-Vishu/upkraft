import React from 'react';
import { FaUserFriends, FaBookOpen, FaGift } from 'react-icons/fa';
import '../styles/Dashboard.css';
import tutorImage from '../assets/sherry.png'; 

const ProfileCard = () => {
  return (
    <div className="card profile-card">
      <div className="profile-info-container">
        <div className="profile-image-wrapper">
          <img src={tutorImage} alt="Sherry Wolf" className="profile-pic" />
        </div>
        <div className="profile-details">
          <h3>Sherry Wolf</h3>
          <p>Piano Tutor</p>
        </div>
      </div>
      <div className="profile-stats-vertical">
        <div className="stat-item">
          <FaUserFriends className="stat-icon" />
          <span>Students <strong>30</strong></span>
        </div>
        <div className="stat-item">
          <FaBookOpen className="stat-icon" />
          <span>Course <strong>6</strong></span>
        </div>
        <div className="stat-item">
          <FaGift className="stat-icon" />
          <span>Reward <strong>3</strong></span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;