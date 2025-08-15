import React from 'react';
import '../styles/Dashboard.css';

const lessonsData = [
    { date: '21 July', time: '2:00 - 3:00 PM', course: 'Introduction to Piano', student: 'Eurica Robel & Arnold Hayes' },
    { date: '22 July', time: '4:00 - 5:00 PM', course: 'Finger Warmups', student: 'Eurica Robel & Arnold Hayes' },
    { date: '23 July', time: '3:00 - 4:00 PM', course: 'Simple Chords', student: 'Eurica Robel & Arnold Hayes' },
    { date: '24 July', time: '5:00 - 6:00 PM', course: 'Rhythm Basics', student: 'Eurica Robel & Arnold Hayes' },
    { date: '25 July', time: '2:00 - 3:00 PM', course: 'Simple Melodies', student: 'Eurica Robel & Arnold Hayes' },
];

const UpcomingLessons = () => {
  return (
    <div className="card lessons-card">
      <div className="card-header">
        <h4>Upcoming Lessons</h4>
        <a href="#view-all">View All</a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Course</th>
            <th>Student Name</th>
          </tr>
        </thead>
        <tbody>
          {lessonsData.map((lesson, index) => (
            <tr key={index}>
              <td>{lesson.date}</td>
              <td>{lesson.time}</td>
              <td>{lesson.course}</td>
              <td>{lesson.student}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingLessons;