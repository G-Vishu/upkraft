import React from 'react';
import '../styles/Dashboard.css';

const StatCard = ({ title, value }) => {
  return (
    <div className="card stat-card">
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
};

export default StatCard;