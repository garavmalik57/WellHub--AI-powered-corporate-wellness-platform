import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Star, 
  Flame, 
  Target,
  Gift,
  ShoppingBag,
  Zap,
  Award,
  Clock,
  TrendingUp,
  Crown,
  Medal
} from 'lucide-react';

const Gamification: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'badges' | 'rewards' | 'streaks'>('badges');

  const badges = [
    { 
      id: 1, 
      name: 'Step Master', 
      description: 'Walk 10,000+ steps daily for a week',
      icon: Target,
      earned: true,
      earnedDate: '2024-01-15',
      color: 'emerald',
      rarity: 'Common'
    },
    { 
      id: 2, 
      name: 'Early Bird', 
      description: 'Complete morning workouts 5 days in a row',
      icon: Clock,
      earned: true,
      earnedDate: '2024-01-12',
      color: 'orange',
      rarity: 'Common'
    },
    { 
      id: 3, 
      name: 'Hydration Hero', 
      description: 'Meet daily water goals for 30 days',
      icon: Target,
      earned: true,
      earnedDate: '2024-01-10',
      color: 'blue',
      rarity: 'Rare'
    },
    { 
      id: 4, 
      name: 'Sleep Champion', 
      description: 'Get 8+ hours of sleep for 2 weeks',
      icon: Medal,
      earned: false,
      progress: 85,
      color: 'indigo',
      rarity: 'Epic'
    },
    { 
      id: 5, 
      name: 'Wellness Warrior', 
      description: 'Maintain 90+ wellness score for a month',
      icon: Crown,
      earned: false,
      progress: 45,
      color: 'purple',
      rarity: 'Legendary'
    },
    { 
      id: 6, 
      name: 'Team Player', 
      description: 'Participate in 10 team challenges',
      icon: Trophy,
      earned: false,
      progress: 60,
      color: 'yellow',
      rarity: 'Rare'
    },
  ];

  const rewards = [
    {
      id: 1,
      name: 'Premium Gym Membership',
      description: '1-month access to premium gym facilities',
      cost: 500,
      category: 'Fitness',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    },
    {
      id: 2,
      name: 'Wellness Workshop',
      description: 'Attend exclusive nutrition and mindfulness workshop',
      cost: 300,
      category: 'Education',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    },
    {
      id: 3,
      name: 'Fitness Tracker',
      description: 'Latest smartwatch with health monitoring',
      cost: 800,
      category: 'Tech',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    },
    {
      id: 4,
      name: 'Massage Therapy',
      description: '60-minute relaxation massage session',
      cost: 200,
      category: 'Wellness',
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    },
    {
      id: 5,
      name: 'Healthy Meal Kit',
      description: 'Week supply of nutritious, pre-planned meals',
      cost: 150,
      category: 'Nutrition',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: false
    },
    {
      id: 6,
      name: 'Yoga Classes',
      description: '10-session yoga class package',
      cost: 250,
      category: 'Fitness',
      image: 'https://images.pexels.com/photos/3822165/pexels-photo-3822165.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true
    },
  ];

  const streaks = [
    { name: 'Daily Steps', current: 15, best: 28, icon: Target, color: 'emerald' },
    { name: 'Workout', current: 5, best: 12, icon: Flame, color: 'orange' },
    { name: 'Sleep Goal', current: 8, best: 21, icon: Clock, color: 'indigo' },
    { name: 'Hydration', current: 12, best: 35, icon: Target, color: 'blue' },
  ];

  const currentXP = 2450;
  const nextLevelXP = 3000;
  const currentLevel = 12;

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'gray';
      case 'Rare': return 'blue';
      case 'Epic': return 'purple';
      case 'Legendary': return 'yellow';
      default: return 'gray';
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Rewards & Achievements</h1>
        <p className="text-gray-600">Track your progress and redeem exciting rewards</p>
      </motion.div>

      {/* XP and Level */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="wellness-card p-6 rounded-xl mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Level {currentLevel}</h2>
              <p className="text-gray-600">{currentXP} / {nextLevelXP} XP</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">XP to next level</p>
            <p className="text-2xl font-bold gradient-text">{nextLevelXP - currentXP}</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="bg-gray-200 rounded-full h-4">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${(currentXP / nextLevelXP) * 100}%` }}
          ></div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-white/50 rounded-xl p-1 mb-8 backdrop-blur-sm">
        {[
          { key: 'badges' as const, label: 'Badges & Achievements', icon: Award },
          { key: 'rewards' as const, label: 'Rewards Store', icon: Gift },
          { key: 'streaks' as const, label: 'Streaks & XP', icon: Flame },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${
              activeTab === tab.key
                ? 'bg-white shadow-md text-emerald-600'
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'badges' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge) => (
              <div key={badge.id} className={`wellness-card p-6 rounded-xl hover-lift ${badge.earned ? 'ring-2 ring-emerald-200' : 'opacity-75'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${badge.color}-100`}>
                    <badge.icon className={`h-6 w-6 text-${badge.color}-600`} />
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium bg-${getRarityColor(badge.rarity)}-100 text-${getRarityColor(badge.rarity)}-700`}>
                    {badge.rarity}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2">{badge.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{badge.description}</p>
                
                {badge.earned ? (
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <Trophy className="h-4 w-4" />
                    <span className="text-sm font-medium">Earned {badge.earnedDate}</span>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{badge.progress}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-${badge.color}-500 h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${badge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'rewards' && (
          <div>
            {/* Points Balance */}
            <div className="wellness-card p-6 rounded-xl mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-3 rounded-full">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">1,250 Points</h2>
                    <p className="text-gray-600">Available to spend</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Earned this month</p>
                  <p className="text-xl font-bold text-emerald-600">+450 pts</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward) => (
                <div key={reward.id} className={`reward-item p-6 rounded-xl ${!reward.available ? 'opacity-50' : ''}`}>
                  <img 
                    src={reward.image} 
                    alt={reward.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                        {reward.category}
                      </span>
                      <div className="flex items-center space-x-1 text-orange-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-semibold">{reward.cost}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{reward.name}</h3>
                    <p className="text-gray-600 text-sm">{reward.description}</p>
                  </div>
                  <button
                    disabled={!reward.available}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                      reward.available
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white hover-lift'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {reward.available ? 'Redeem Now' : 'Out of Stock'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'streaks' && (
          <div>
            {/* Streaks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {streaks.map((streak, index) => (
                <div key={index} className="wellness-card p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg bg-${streak.color}-100`}>
                        <streak.icon className={`h-6 w-6 text-${streak.color}-600`} />
                      </div>
                      <h3 className="font-semibold text-gray-800">{streak.name}</h3>
                    </div>
                    <Flame className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Streak:</span>
                      <span className="font-bold text-gray-800">{streak.current} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Best Streak:</span>
                      <span className="font-bold text-emerald-600">{streak.best} days</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-${streak.color}-500 h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${Math.min((streak.current / streak.best) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* XP Breakdown */}
            <div className="wellness-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                How to Earn XP
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { activity: 'Complete daily step goal', xp: '50 XP' },
                  { activity: 'Log workout session', xp: '30 XP' },
                  { activity: 'Meet sleep target', xp: '20 XP' },
                  { activity: 'Complete hydration goal', xp: '15 XP' },
                  { activity: 'Join team challenge', xp: '100 XP' },
                  { activity: 'Complete wellness survey', xp: '25 XP' },
                  { activity: 'Share wellness tip', xp: '40 XP' },
                  { activity: 'Attend wellness workshop', xp: '150 XP' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                    <span className="text-gray-700">{item.activity}</span>
                    <span className="font-semibold text-yellow-600">{item.xp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Gamification;