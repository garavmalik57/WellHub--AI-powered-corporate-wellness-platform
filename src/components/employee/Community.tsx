import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Share2, 
  Trophy,
  Calendar,
  Target,
  Zap,
  Plus,
  Clock,
  MapPin,
  UserPlus,
  ThumbsUp,
  MessageCircle,
  Award,
  Flame
} from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'challenges' | 'discussions' | 'activities'>('challenges');

  const challenges = [
    {
      id: 1,
      title: '30-Day Step Challenge',
      description: 'Walk 10,000 steps daily for 30 consecutive days',
      participants: 45,
      daysLeft: 12,
      progress: 78,
      reward: '500 XP + Fitness Tracker',
      difficulty: 'Medium',
      category: 'Fitness',
      joined: true
    },
    {
      id: 2,
      title: 'Mindful March',
      description: 'Practice mindfulness meditation for 15 minutes daily',
      participants: 28,
      daysLeft: 20,
      progress: 45,
      reward: '300 XP + Wellness Workshop',
      difficulty: 'Easy',
      category: 'Wellness',
      joined: false
    },
    {
      id: 3,
      title: 'Hydration Heroes',
      description: 'Drink 8 glasses of water daily for 2 weeks',
      participants: 67,
      daysLeft: 5,
      progress: 92,
      reward: '200 XP + Smart Water Bottle',
      difficulty: 'Easy',
      category: 'Nutrition',
      joined: true
    },
    {
      id: 4,
      title: 'Weekend Warriors',
      description: 'Complete outdoor activities every weekend this month',
      participants: 32,
      daysLeft: 8,
      progress: 60,
      reward: '400 XP + Outdoor Gear',
      difficulty: 'Hard',
      category: 'Adventure',
      joined: false
    },
  ];

  const discussions = [
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Best morning routine for energy?',
      content: 'I\'ve been struggling with low energy in the mornings. What are your go-to strategies for starting the day with more vitality?',
      category: 'Wellness Tips',
      timestamp: '2 hours ago',
      likes: 15,
      replies: 8,
      tags: ['morning', 'energy', 'routine']
    },
    {
      id: 2,
      author: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Healthy lunch ideas for busy workdays',
      content: 'Looking for quick and nutritious lunch options that I can prepare in advance. Share your favorite meal prep recipes!',
      category: 'Nutrition',
      timestamp: '4 hours ago',
      likes: 23,
      replies: 12,
      tags: ['nutrition', 'meal-prep', 'lunch']
    },
    {
      id: 3,
      author: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Desk exercises to combat sitting all day',
      content: 'Found some great stretches and exercises you can do right at your desk. Thought I\'d share them with the team!',
      category: 'Fitness Tips',
      timestamp: '6 hours ago',
      likes: 31,
      replies: 5,
      tags: ['fitness', 'desk-exercises', 'stretching']
    },
  ];

  const activities = [
    {
      id: 1,
      user: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400',
      action: 'completed their daily step goal',
      details: '12,500 steps walked today! 🚶‍♂️',
      timestamp: '15 minutes ago',
      type: 'achievement'
    },
    {
      id: 2,
      user: 'Lisa Wang',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      action: 'earned a new badge',
      details: 'Hydration Hero - 7 day streak! 💧',
      timestamp: '1 hour ago',
      type: 'badge'
    },
    {
      id: 3,
      user: 'David Wilson',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      action: 'joined the 30-Day Step Challenge',
      details: 'Ready to crush those step goals! 💪',
      timestamp: '2 hours ago',
      type: 'challenge'
    },
    {
      id: 4,
      user: 'Jennifer Lee',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      action: 'shared a wellness tip',
      details: '"Try the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye strain"',
      timestamp: '3 hours ago',
      type: 'tip'
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'emerald';
      case 'Medium': return 'yellow';
      case 'Hard': return 'red';
      default: return 'gray';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Fitness': 'blue',
      'Wellness': 'purple',
      'Nutrition': 'green',
      'Adventure': 'orange'
    };
    return colors[category] || 'gray';
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Community</h1>
        <p className="text-gray-600">Connect with colleagues and participate in wellness challenges</p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-white/50 rounded-xl p-1 mb-8 backdrop-blur-sm">
        {[
          { key: 'challenges' as const, label: 'Team Challenges', icon: Trophy },
          { key: 'discussions' as const, label: 'Discussions', icon: MessageSquare },
          { key: 'activities' as const, label: 'Activity Feed', icon: Zap },
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
        {activeTab === 'challenges' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="challenge-card p-6 rounded-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${getCategoryColor(challenge.category)}-100 text-${getCategoryColor(challenge.category)}-700`}>
                        {challenge.category}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${getDifficultyColor(challenge.difficulty)}-100 text-${getDifficultyColor(challenge.difficulty)}-700`}>
                        {challenge.difficulty}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                    <p className="text-purple-100 text-sm">{challenge.description}</p>
                  </div>
                  <Trophy className="h-6 w-6 text-yellow-300" />
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-purple-100 mb-1">
                    <span>Progress</span>
                    <span>{challenge.progress}%</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-500"
                      style={{ width: `${challenge.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2 text-purple-100">
                    <Users className="h-4 w-4" />
                    <span>{challenge.participants} participants</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-100">
                    <Calendar className="h-4 w-4" />
                    <span>{challenge.daysLeft} days left</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-purple-100 text-sm mb-1">Reward:</div>
                  <div className="text-white font-medium">{challenge.reward}</div>
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                    challenge.joined
                      ? 'bg-white/20 text-white hover:bg-white/30'
                      : 'bg-white text-purple-600 hover:bg-gray-100'
                  }`}
                >
                  {challenge.joined ? 'Participating' : 'Join Challenge'}
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'discussions' && (
          <div className="space-y-6">
            {/* Create New Discussion */}
            <div className="wellness-card p-6 rounded-xl">
              <button className="w-full flex items-center justify-center space-x-2 py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
                <Plus className="h-5 w-5" />
                <span>Start a new discussion</span>
              </button>
            </div>

            {discussions.map((discussion) => (
              <div key={discussion.id} className="wellness-card p-6 rounded-xl hover-lift">
                <div className="flex items-start space-x-4">
                  <img
                    src={discussion.avatar}
                    alt={discussion.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-800">{discussion.author}</h4>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{discussion.timestamp}</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700`}>
                        {discussion.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{discussion.title}</h3>
                    <p className="text-gray-600 mb-3">{discussion.content}</p>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      {discussion.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-6 text-gray-500">
                      <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{discussion.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{discussion.replies} replies</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-emerald-500 transition-colors">
                        <Share2 className="h-4 w-4" />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="wellness-card p-6 rounded-xl hover-lift">
                <div className="flex items-start space-x-4">
                  <img
                    src={activity.avatar}
                    alt={activity.user}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-gray-800">{activity.user}</span>
                      <span className="text-gray-600">{activity.action}</span>
                      {activity.type === 'achievement' && <Target className="h-4 w-4 text-emerald-500" />}
                      {activity.type === 'badge' && <Award className="h-4 w-4 text-yellow-500" />}
                      {activity.type === 'challenge' && <Trophy className="h-4 w-4 text-blue-500" />}
                      {activity.type === 'tip' && <MessageSquare className="h-4 w-4 text-purple-500" />}
                    </div>
                    <p className="text-gray-700 mb-2">{activity.details}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{activity.timestamp}</span>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">Like</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                          <MessageSquare className="h-4 w-4" />
                          <span className="text-sm">Comment</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Community;