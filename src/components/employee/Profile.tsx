import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Building, 
  Users, 
  Target, 
  Calendar,
  Edit3,
  Save,
  Camera,
  Award
} from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

const Profile: React.FC = () => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    department: user?.department || '',
    team: user?.team || '',
    dailyStepsGoal: '10000',
    weeklyWorkoutGoal: '5',
    sleepGoal: '8',
    waterGoal: '8',
  });

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would save to backend
  };

  const achievements = [
    { title: '30-Day Streak', description: 'Completed daily goals for 30 consecutive days', date: '2024-01-15', color: 'emerald' },
    { title: 'Step Master', description: 'Walked 100,000+ steps this month', date: '2024-01-10', color: 'blue' },
    { title: 'Early Bird', description: 'Consistently woke up before 7 AM', date: '2024-01-05', color: 'orange' },
    { title: 'Hydration Hero', description: 'Met daily water goals for 2 weeks', date: '2023-12-28', color: 'cyan' },
  ];

  const wellnessHistory = [
    { month: 'January 2024', stepsAvg: 12500, sleepAvg: 7.5, wellnessScore: 85 },
    { month: 'December 2023', stepsAvg: 11800, sleepAvg: 7.2, wellnessScore: 82 },
    { month: 'November 2023', stepsAvg: 10900, sleepAvg: 6.8, wellnessScore: 78 },
    { month: 'October 2023', stepsAvg: 9800, sleepAvg: 6.5, wellnessScore: 75 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Profile Settings</h1>
        <p className="text-gray-600">Manage your personal information and wellness goals</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="wellness-card p-6 rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
              >
                {isEditing ? <Save className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
                <span>{isEditing ? 'Save' : 'Edit'}</span>
              </button>
            </div>

            {/* Avatar */}
            <div className="flex items-center mb-8">
              <div className="relative">
                <img
                  src={user?.avatar || 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={user?.name}
                  className="h-20 w-20 rounded-full object-cover border-4 border-emerald-200"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-emerald-500 hover:bg-emerald-600 p-2 rounded-full text-white shadow-lg transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-gray-800">{user?.name}</h3>
                <p className="text-gray-600">{user?.email}</p>
                <div className="flex items-center mt-2">
                  <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500">Joined {user?.joinDate}</span>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border rounded-lg ${
                    isEditing 
                      ? 'border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                      : 'border-gray-200 bg-gray-50'
                  } transition-colors`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border rounded-lg ${
                    isEditing 
                      ? 'border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                      : 'border-gray-200 bg-gray-50'
                  } transition-colors`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="h-4 w-4 inline mr-2" />
                  Department
                </label>
                <input
                  type="text"
                  value={profileData.department}
                  onChange={(e) => setProfileData({...profileData, department: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border rounded-lg ${
                    isEditing 
                      ? 'border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                      : 'border-gray-200 bg-gray-50'
                  } transition-colors`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="h-4 w-4 inline mr-2" />
                  Team
                </label>
                <input
                  type="text"
                  value={profileData.team}
                  onChange={(e) => setProfileData({...profileData, team: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border rounded-lg ${
                    isEditing 
                      ? 'border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                      : 'border-gray-200 bg-gray-50'
                  } transition-colors`}
                />
              </div>
            </div>

            {/* Wellness Goals */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2 text-emerald-600" />
                Wellness Goals
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Daily Steps Goal</label>
                  <input
                    type="number"
                    value={profileData.dailyStepsGoal}
                    onChange={(e) => setProfileData({...profileData, dailyStepsGoal: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                        : 'border-gray-200 bg-gray-50'
                    } transition-colors`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Weekly Workouts</label>
                  <input
                    type="number"
                    value={profileData.weeklyWorkoutGoal}
                    onChange={(e) => setProfileData({...profileData, weeklyWorkoutGoal: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                        : 'border-gray-200 bg-gray-50'
                    } transition-colors`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sleep Goal (hours)</label>
                  <input
                    type="number"
                    value={profileData.sleepGoal}
                    onChange={(e) => setProfileData({...profileData, sleepGoal: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                        : 'border-gray-200 bg-gray-50'
                    } transition-colors`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Daily Water (glasses)</label>
                  <input
                    type="number"
                    value={profileData.waterGoal}
                    onChange={(e) => setProfileData({...profileData, waterGoal: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500' 
                        : 'border-gray-200 bg-gray-50'
                    } transition-colors`}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="wellness-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-yellow-500" />
                Recent Achievements
              </h3>
              <div className="space-y-4">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`bg-${achievement.color}-100 p-2 rounded-lg`}>
                      <Award className={`h-4 w-4 text-${achievement.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 text-sm">{achievement.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Wellness History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="wellness-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Wellness History</h3>
              <div className="space-y-4">
                {wellnessHistory.map((month, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <h4 className="font-medium text-gray-800 text-sm">{month.month}</h4>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Avg Steps:</span>
                        <span className="font-medium">{month.stepsAvg.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Avg Sleep:</span>
                        <span className="font-medium">{month.sleepAvg}h</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Wellness Score:</span>
                        <span className="font-medium text-emerald-600">{month.wellnessScore}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;