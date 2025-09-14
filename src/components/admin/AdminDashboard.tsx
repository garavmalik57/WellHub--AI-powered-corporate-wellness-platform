import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminNavigation from './AdminNavigation';
import AdminHome from './AdminHome';
import UserManagement from './UserManagement';
import ChallengeManagement from './ChallengeManagement';
import Analytics from './Analytics';
import RewardsManagement from './RewardsManagement';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100">
      <AdminNavigation />
      
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/challenges" element={<ChallengeManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/rewards" element={<RewardsManagement />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;