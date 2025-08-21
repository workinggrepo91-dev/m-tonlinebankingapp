import React from 'react';
import bankLogo from '../images/logo.png'; // Path to your M&T Bank logo PNG

function DashboardHeader({ onLogout, onInitiateAction }) { // Added onInitiateAction prop
  return (
    <header className="bg-mtbGreen text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left: M&T Bank Logo & Text */}
        <div className="flex items-center">
          <span className="font-extrabold text-xl text-white-900">M&T <span className="font-normal text-white">Bank</span></span>
        </div>

        {/* Right: Messages and Logout */}
        <div className="flex items-center space-x-6 text-sm">
          {/* Messages button now triggers Face ID */}
          <button onClick={() => onInitiateAction(() => console.log('Simulating Messages access'))} className="hover:underline text-mtbGreen-text">
            Messages (21)
          </button>
          {/* Logout directly calls onLogout, no Face ID */}
          <button onClick={onLogout} className="hover:underline text-mtbGreen-text">Log Out</button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;