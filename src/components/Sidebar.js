import React from 'react';
import {
  FaHome, FaUserGraduate, FaBook, FaCalendarAlt, FaClipboardList,
  FaMusic, FaLaptop, FaFileInvoiceDollar, FaGift, FaSignOutAlt
} from 'react-icons/fa';
import './../styles/Dashboard.css'; 

const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome />, name: 'Home' },
    { icon: <FaUserGraduate />, name: 'My Students' },
    { icon: <FaBook />, name: 'My Courses' },
    { icon: <FaCalendarAlt />, name: 'Calendar' },
    { icon: <FaClipboardList />, name: 'Assignment' },
    { icon: <FaMusic />, name: 'Music Library' },
    { icon: <FaLaptop />, name: 'Practice Studio' },
    { icon: <FaFileInvoiceDollar />, name: 'Payment Summary' },
    { icon: <FaGift />, name: 'Refer & Earn' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">UPKRAFT</div>
      <ul className="nav-menu">
        {menuItems.map((item, index) => (
          <li key={index} className={item.name === 'Home' ? 'active' : ''}>
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <div className="logout">
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;