import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Plus,
  Calendar,
  Users,
  Target,
  Edit3,
  Trash2,
  Play,
  Pause,
  Award,
  Clock,
  TrendingUp,
  Eye
} from 'lucide-react';

const ChallengeManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'draft' | 'completed'>('active');

  const challenges = {
    active: [
      {
        id: 1,
        title: '30-Day Step Challenge',
        description: 'Walk 10,000 steps daily for 30 consecutive days',
        category: 'Fitness',
        startDate: '2024-01-01',
        endDate: '2024-01-31',
        participants: 456,
        completion: 78,
        reward: '500 XP + Fitness Tracker',
        status: 'active',
        difficulty: 'Medium'
      },
      {
        id: 2,
        title: 'Mindful March',
        description: 'Practice mindfulness meditation for 15 minutes daily',
        category: 'Wellness',
        startDate: '2024-01-01',
        endDate: '2024-01-31',
        participants: 234,
        completion: 65,
        reward: '300 XP + Wellness Workshop',
        status: 'active',
        difficulty: 'Easy'
      },
      {
        id: 3,
        title: 'Hydration Heroes',
        description: 'Drink 8 glasses of water daily for 2 weeks',
        category: 'Nutrition',
        startDate: '2024-01-15',
        endDate: '2024-01-29',
        participants: 678,
        completion: 92,
        reward: '200 XP + Smart Water Bottle',
        status: 'active',
        difficulty: 'Easy'
      }
    ],
    draft: [
      {
        id: 4,
        title: 'Team Building Adventures',
        description: 'Complete outdoor team activities every weekend',
        category: 'Adventure',
        startDate: '2024-02-01',
        endDate: '2024-02-29',
        participants: 0,
        completion: 0,
        reward: '600 XP + Adventure Gear',
        status: 'draft',
        difficulty: 'Hard'
      }
    ],
    completed: [
      {
        id: 5,
        title: 'January Jumpstart',
        description: 'Complete daily fitness goals for the entire month',
        category: 'Fitness',
        startDate: '2024-01-01',
        endDate: '2024-01-31',
        participants: 892,
        completion: 100,
        reward: '400 XP + Gym Membership',
        status: 'completed',
        difficulty: 'Medium'
      }
    ]
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'emerald';
      case 'Medium': return 'yellow';
      case 'Hard': return 'red';
      default: return 'gray';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'emerald';
      case 'draft': return 'gray';
      case 'completed': return 'blue';
      default: return 'gray';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Challenge Management</h1>
            <p className="text-gray-600">Create and manage wellness challenges for your organization</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors mt-4 md:mt-0">
            <Plus className="h-4 w-4" />
            <span>Create Challenge</span>
          </button>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
      >
        <div className="stat-card p-6 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Active Challenges</h3>
            <Trophy className="h-5 w-5 text-emerald-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800">{challenges.active.length}</p>
          <p className="text-xs text-emerald-600">Currently running</p>
        </div>
        
        <div className="stat-card p-6 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Participants</h3>
            <Users className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {challenges.active.reduce((sum, c) => sum + c.participants, 0)}
          </p>
          <p className="text-xs text-blue-600">Across all challenges</p>
        </div>
        
        <div className="stat-card p-6 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Avg Completion</h3>
            <Target className="h-5 w-5 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {Math.round(challenges.active.reduce((sum, c) => sum + c.completion, 0) / challenges.active.length)}%
          </p>
          <p className="text-xs text-purple-600">Active challenges</p>
        </div>
        
        <div className="stat-card p-6 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Completed</h3>
            <Award className="h-5 w-5 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800">{challenges.completed.length}</p>
          <p className="text-xs text-yellow-600">This month</p>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-white/50 rounded-xl p-1 mb-8 backdrop-blur-sm">
        {[
          { key: 'active' as const, label: 'Active Challenges', count: challenges.active.length },
          { key: 'draft' as const, label: 'Draft Challenges', count: challenges.draft.length },
          { key: 'completed' as const, label: 'Completed', count: challenges.completed.length },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${
              activeTab === tab.key
                ? 'bg-white shadow-md text-blue-600'
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }`}
          >
            <span className="font-medium">{tab.label}</span>
            <span className={`px-2 py-1 text-xs rounded-full ${
              activeTab === tab.key ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Challenge Cards */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {challenges[activeTab].map((challenge) => (
          <div key={challenge.id} className="wellness-card p-6 rounded-xl hover-lift">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${getCategoryColor(challenge.category)}-100 text-${getCategoryColor(challenge.category)}-700`}>
                  {challenge.category}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${getDifficultyColor(challenge.difficulty)}-100 text-${getDifficultyColor(challenge.difficulty)}-700`}>
                  {challenge.difficulty}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <Eye className="h-4 w-4 text-gray-500" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <Edit3 className="h-4 w-4 text-gray-500" />
                </button>
                <button className="p-1 hover:bg-red-50 rounded transition-colors">
                  <Trash2 className="h-4 w-4 text-gray-500 hover:text-red-500" />
                </button>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{challenge.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{challenge.description}</p>

            {/* Progress */}
            {challenge.status === 'active' && (
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{challenge.completion}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${challenge.completion}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-4 w-4" />
                <span>{challenge.participants} participants</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>
                  {challenge.status === 'draft' ? 'Starts Feb 1' : 
                   challenge.status === 'completed' ? 'Completed' : 
                   '12 days left'}
                </span>
              </div>
            </div>

            {/* Reward */}
            <div className="mb-4">
              <div className="text-gray-600 text-sm mb-1">Reward:</div>
              <div className="text-gray-800 font-medium text-sm">{challenge.reward}</div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              {challenge.status === 'draft' ? (
                <>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors">
                    <Play className="h-4 w-4" />
                    <span>Start</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                    <Edit3 className="h-4 w-4" />
                    <span>Edit</span>
                  </button>
                </>
              ) : challenge.status === 'active' ? (
                <>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                    <TrendingUp className="h-4 w-4" />
                    <span>View Analytics</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 py-2 px-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
                    <Pause className="h-4 w-4" />
                  </button>
                </>
              ) : (
                <button className="w-full flex items-center justify-center space-x-2 py-2 px-3 bg-gray-100 text-gray-600 rounded-lg">
                  <Award className="h-4 w-4" />
                  <span>View Results</span>
                </button>
              )}
            </div>

            {/* Status Badge */}
            <div className="mt-4 flex justify-center">
              <span className={`px-3 py-1 text-xs font-medium rounded-full capitalize bg-${getStatusColor(challenge.status)}-100 text-${getStatusColor(challenge.status)}-700`}>
                {challenge.status}
              </span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Empty State */}
      {challenges[activeTab].length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No {activeTab} challenges
          </h3>
          <p className="text-gray-600 mb-6">
            {activeTab === 'draft' 
              ? 'Create a new challenge to get started.' 
              : `No ${activeTab} challenges at the moment.`}
          </p>
          <button className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors mx-auto">
            <Plus className="h-5 w-5" />
            <span>Create Challenge</span>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ChallengeManagement;