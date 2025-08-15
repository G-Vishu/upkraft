import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Dashboard.css';

const PerformanceGauge = ({ title, value, maxValue, color }) => {
  const percentage = (value / maxValue) * 100;
  return (
    <div className="card gauge-card">
      <p>{title}</p>
      <div style={{ width: '100px', margin: '1rem auto' }}>
        <CircularProgressbar
          value={percentage}
          text={`${value}/${maxValue}`}
          styles={buildStyles({
            textColor: 'var(--text-dark)',
            pathColor: color,
            trailColor: '#d6d6d6',
          })}
        />
      </div>
    </div>
  );
};

export default PerformanceGauge;