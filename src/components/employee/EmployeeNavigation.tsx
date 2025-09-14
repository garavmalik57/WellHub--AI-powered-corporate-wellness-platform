import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';
import { 
  Home, 
  User, 
  Trophy, 
  Users, 
  Target, 
  LogOut, 
  Menu, 
  X,
  Heart,
  Bell
} from 'lucide-react';

const EmployeeNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navigationItems = [
    { path: '/employee', icon: Home, label: 'Dashboard' },
    { path: '/employee/profile', icon: User, label: 'Profile' },
    { path: '/employee/gamification', icon: Target, label: 'Rewards' },
    { path: '/employee/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: '/employee/community', icon: Users, label: 'Community' },
  ];

  const NavLink = ({ item }: { item: typeof navigationItems[0] }) => {
    const isActive = location.pathname === item.path;
    
    return (
      <Link
        to={item.path}
        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
          isActive
            ? 'bg-emerald-100 text-emerald-700 font-medium'
            : 'text-gray-600 hover:bg-white/50 hover:text-gray-800'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <item.icon className={`h-5 w-5 ${isActive ? 'text-emerald-600' : 'text-gray-500'}`} />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-white/80 backdrop-blur-xl border-r border-white/20 z-50">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">WellnessHub</span>
          </div>

          {/* User Info */}
          <div className="mb-8 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl">
            <div className="flex items-center space-x-3">
              <img
                src={user?.avatar || 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400'}
                alt={user?.name}
                className="h-12 w-12 rounded-full object-cover border-2 border-emerald-200"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{user?.name}</h3>
                <p className="text-sm text-gray-600">{user?.department}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </nav>

          {/* Logout */}
          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-white/20 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-2 rounded-lg">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">WellnessHub</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <div className="notification-dot"></div>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          className="lg:hidden fixed inset-0 bg-white z-40 pt-16"
        >
          <div className="p-6">
            {/* User Info */}
            <div className="mb-8 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <img
                  src={user?.avatar || 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={user?.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-emerald-200"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{user?.name}</h3>
                  <p className="text-sm text-gray-600">{user?.department}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2 mb-8">
              {navigationItems.map((item) => (
                <NavLink key={item.path} item={item} />
              ))}
            </nav>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </motion.div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden mobile-nav">
        <div className="flex justify-around py-2">
          {navigationItems.slice(0, 4).map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                  isActive ? 'text-emerald-600' : 'text-gray-500'
                }`}
              >
                <item.icon className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EmployeeNavigation;