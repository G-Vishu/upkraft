import React from 'react';
import '../styles/Dashboard.css';
import referralImage from '../assets/referral-person.png'; 

const ReferralCard = () => {
  return (
    <div className="card referral-card">
      <img src={referralImage} alt="Refer a friend" className="referral-image" />
      
      <div className="referral-content">
        <h4>Refer and Earn</h4>
        <p>Invite friends and earn exclusive rewards for every successful referral.</p>
        <button className="btn btn-refer">Refer Now →</button>
      </div>
    </div>
  );
};

export default ReferralCard;