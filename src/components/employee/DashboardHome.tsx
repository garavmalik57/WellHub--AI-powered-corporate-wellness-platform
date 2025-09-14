import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Footprints, 
  Flame, 
  Moon, 
  Droplet, 
  Heart,
  TrendingUp,
  Target,
  Award,
  MessageSquare,
  Smile,
  Meh,
  Frown,
  Angry,
  Laugh
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DashboardHome: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>('');

  // Mock data
  const weeklyData = [
    { day: 'Mon', steps: 8500, calories: 320 },
    { day: 'Tue', steps: 12000, calories: 450 },
    { day: 'Wed', steps: 6500, calories: 280 },
    { day: 'Thu', steps: 15000, calories: 520 },
    { day: 'Fri', steps: 11000, calories: 380 },
    { day: 'Sat', steps: 9500, calories: 350 },
    { day: 'Sun', steps: 7800, calories: 300 },
  ];

  const wellnessData = [
    { name: 'Great', value: 85, color: '#10B981' },
    { name: 'Good', value: 15, color: '#F59E0B' },
  ];

  const activities = [
    { icon: Footprints, label: 'Steps Today', value: '12,847', target: '15,000', percentage: 85, color: 'emerald' },
    { icon: Flame, label: 'Calories Burned', value: '450', target: '500', percentage: 90, color: 'orange' },
    { icon: Moon, label: 'Sleep Hours', value: '7.5h', target: '8h', percentage: 94, color: 'indigo' },
    { icon: Droplet, label: 'Water Intake', value: '6 glasses', target: '8 glasses', percentage: 75, color: 'blue' },
  ];

  const moods = [
    { emoji: '😄', label: 'Great', value: 'great' },
    { emoji: '😊', label: 'Good', value: 'good' },
    { emoji: '😐', label: 'Okay', value: 'okay' },
    { emoji: '😞', label: 'Bad', value: 'bad' },
    { emoji: '😡', label: 'Terrible', value: 'terrible' },
  ];

  const aiSuggestions = [
    "Take 500 more steps today to reach your goal! 🚶‍♂️",
    "Great sleep pattern! Keep it up for better recovery 😴",
    "Consider drinking 2 more glasses of water today 💧",
    "You're on fire this week! 15% above your target 🔥"
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, John! 👋</h1>
        <p className="text-gray-600">Here's your wellness overview for today</p>
      </motion.div>

      {/* Daily Activities Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"
      >
        {activities.map((activity, index) => (
          <div key={index} className="wellness-card p-6 rounded-xl hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${activity.color}-100`}>
                <activity.icon className={`h-6 w-6 text-${activity.color}-600`} />
              </div>
              <span className="text-sm font-medium text-gray-500">{activity.percentage}%</span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{activity.label}</h3>
            <p className="text-2xl font-bold text-gray-800 mb-2">{activity.value}</p>
            <p className="text-xs text-gray-500">Target: {activity.target}</p>
            
            {/* Progress Bar */}
            <div className="mt-3 bg-gray-200 rounded-full h-2">
              <div
                className={`bg-${activity.color}-500 h-2 rounded-full transition-all duration-500`}
                style={{ width: `${activity.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Wellness Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="xl:col-span-1"
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Heart className="h-5 w-5 text-red-500 mr-2" />
              Wellness Score
            </h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <svg className="w-32 h-32 progress-ring">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#10b981"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="351.86"
                    strokeDashoffset="52.78"
                    className="progress-ring-fill"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800">85</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Your wellness score is</p>
              <div className="achievement-badge inline-block">Excellent</div>
            </div>
          </div>
        </motion.div>

        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="xl:col-span-2"
        >
          <div className="wellness-card p-6 rounded-xl h-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
              Weekly Progress
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Line 
                    type="monotone" 
                    dataKey="steps" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="calories" 
                    stroke="#f59e0b" 
                    strokeWidth={3}
                    dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#f59e0b', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mood Check-in & AI Feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Mood Check-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Smile className="h-5 w-5 text-yellow-500 mr-2" />
              Daily Mood Check-in
            </h3>
            <p className="text-gray-600 mb-4">How are you feeling today?</p>
            <div className="flex justify-around mb-6">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  className={`mood-emoji p-3 rounded-xl transition-all ${
                    selectedMood === mood.value
                      ? 'bg-emerald-100 shadow-lg scale-110'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="text-3xl mb-1">{mood.emoji}</div>
                  <div className="text-xs font-medium text-gray-600">{mood.label}</div>
                </button>
              ))}
            </div>
            {selectedMood && (
              <div className="text-center">
                <p className="text-sm text-emerald-600 font-medium">
                  Thanks for sharing! We'll use this to personalize your experience.
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* AI Feedback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 text-purple-500 mr-2" />
              AI Wellness Coach
            </h3>
            <div className="space-y-3">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="bg-purple-100 p-1 rounded-full">
                    <Target className="h-4 w-4 text-purple-600" />
                  </div>
                  <p className="text-sm text-gray-700 flex-1">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardHome;