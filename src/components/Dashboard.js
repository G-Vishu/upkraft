import React, { useState } from 'react'; 
import Header from './Header';
import ProfileCard from './ProfileCard';
import StatCard from './StatCard';
import UpcomingLessons from './UpcomingLessons';
import PerformanceGauge from './PerformanceGauge';
import FeedbackCard from './FeedbackCard';
import ReferralCard from './ReferralCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [isReferralVisible, setIsReferralVisible] = useState(false);

  const toggleReferralCard = () => {
    setIsReferralVisible(!isReferralVisible);
  };

  return (
    <main className="main-content">
      <Header />

      <button className="referral-toggle-btn" onClick={toggleReferralCard}>
        {isReferralVisible ? <FaChevronRight /> : <FaChevronLeft />}
      </button>

      {isReferralVisible && <div className="backdrop" onClick={toggleReferralCard}></div>}

      <div className="dashboard-grid">
        <div className="grid-item-profile">
          <ProfileCard />
        </div>
        
        <div className="grid-item-stats stats-grid-container">
            <StatCard title="Total Active Students" value="30" />
            <StatCard title="Total Active Students" value="30" />
            <StatCard title="Tutor CSAT Score" value="80%" />
            <StatCard title="Tutor CSAT Score" value="80%" />
            <StatCard title="Assignment Completion Rate" value="15%" />
            <StatCard title="Assignment Completion Rate" value="15%" />
        </div>

        <div className={`grid-item-referral ${isReferralVisible ? 'show' : ''}`}>
          <ReferralCard />
        </div>
        
        <div className="grid-item-lessons">
          <UpcomingLessons />
        </div>
        <div className="grid-item-performance">
          <PerformanceGauge title="Overall Course Performance" value={7.6} maxValue={10} color="var(--yellow)" />
          <PerformanceGauge title="Overall Student Performance" value={6.6} maxValue={10} color="var(--blue)" />
        </div>
        <div className="grid-item-feedback">
          <FeedbackCard pendingCount={12} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;