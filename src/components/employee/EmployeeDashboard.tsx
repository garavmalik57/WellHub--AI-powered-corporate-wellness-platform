import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EmployeeNavigation from './EmployeeNavigation';
import DashboardHome from './DashboardHome';
import Profile from './Profile';
import Gamification from './Gamification';
import Leaderboard from './Leaderboard';
import Community from './Community';
import ChatBot from '../common/ChatBot';

const EmployeeDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100">
      <EmployeeNavigation />
      
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gamification" element={<Gamification />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<Navigate to="/employee" replace />} />
        </Routes>
      </main>

      <ChatBot />
    </div>
  );
};

export default EmployeeDashboard;