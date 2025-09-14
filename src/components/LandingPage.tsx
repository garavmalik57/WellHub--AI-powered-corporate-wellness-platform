import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { Heart, Activity, Users, Target, Shield, Sparkles, Mail, Lock, User } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [userType, setUserType] = useState<'employee' | 'admin' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication - in a real app, this would validate against a backend
    const mockUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: userType === 'admin' ? 'Admin User' : 'John Doe',
      email: email,
      role: userType!,
      department: userType === 'employee' ? 'Engineering' : undefined,
      team: userType === 'employee' ? 'Team Alpha' : undefined,
      avatar: `https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400`,
      joinDate: '2023-01-15',
    };

    setUser(mockUser);
    navigate(userType === 'admin' ? '/admin' : '/employee');
  };

  const features = [
    {
      icon: Activity,
      title: 'Activity Tracking',
      description: 'Monitor steps, calories, sleep, and hydration levels'
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set personal wellness goals and track progress'
    },
    {
      icon: Users,
      title: 'Team Challenges',
      description: 'Participate in fun challenges with colleagues'
    },
    {
      icon: Sparkles,
      title: 'AI Insights',
      description: 'Get personalized wellness recommendations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-3 rounded-full">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
                WellnessHub
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your workplace wellness with AI-powered insights, gamified challenges, and comprehensive health tracking
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {features.map((feature, index) => (
                <div key={index} className="wellness-card p-6 rounded-xl hover-lift">
                  <feature.icon className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="max-w-md mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="wellness-card rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Choose your role to continue</p>
          </div>

          {!userType ? (
            <div className="space-y-4">
              <button
                onClick={() => setUserType('employee')}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
              >
                <User className="h-5 w-5" />
                <span>Employee Login</span>
              </button>
              
              <button
                onClick={() => setUserType('admin')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover-lift"
              >
                <Shield className="h-5 w-5" />
                <span>Admin Login</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="text-center mb-6">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  userType === 'admin' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {userType === 'admin' ? <Shield className="h-4 w-4 mr-2" /> : <User className="h-4 w-4 mr-2" />}
                  Logging in as {userType === 'admin' ? 'Administrator' : 'Employee'}
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover-lift ${
                    userType === 'admin'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                      : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white'
                  }`}
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => setUserType(null)}
                  className="w-full text-gray-600 hover:text-gray-800 py-2 transition-colors"
                >
                  Back to role selection
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;