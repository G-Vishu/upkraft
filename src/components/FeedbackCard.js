import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Dashboard.css';

const FeedbackCard = ({ pendingCount }) => {
    const percentage = (pendingCount / 20) * 100; 

  return (
    <div className="card feedback-card">
      <h4>Feedback Pending</h4>
      <div style={{ width: '120px', margin: '1rem auto' }}>
        <CircularProgressbar
          value={percentage}
          text={`${pendingCount}`}
          styles={buildStyles({
            textColor: 'var(--text-dark)',
            pathColor: 'var(--red)',
            trailColor: '#fde0e0',
          })}
        />
      </div>
      <button className="btn btn-primary">Give Feedback</button>
    </div>
  );
};

export default FeedbackCard;