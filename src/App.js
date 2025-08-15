import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './styles/global.css';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
