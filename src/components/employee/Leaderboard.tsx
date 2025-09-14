import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Medal, 
  Crown, 
  TrendingUp, 
  Users, 
  User,
  Calendar,
  Filter,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [viewType, setViewType] = useState<'individual' | 'team'>('individual');
  const [timeFilter, setTimeFilter] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

  const individualLeaderboard = [
    { 
      rank: 1, 
      name: 'Sarah Johnson', 
      department: 'Marketing', 
      score: 2450, 
      change: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      badges: ['🔥', '🏃‍♀️', '💧']
    },
    { 
      rank: 2, 
      name: 'You (John Doe)', 
      department: 'Engineering', 
      score: 2380, 
      change: 2,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      badges: ['🎯', '😴', '🥗'],
      isCurrentUser: true
    },
    { 
      rank: 3, 
      name: 'Mike Chen', 
      department: 'Sales', 
      score: 2340, 
      change: -1,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      badges: ['💪', '🏃‍♂️']
    },
    { 
      rank: 4, 
      name: 'Emily Davis', 
      department: 'HR', 
      score: 2290, 
      change: 3,
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      badges: ['🧘‍♀️', '🥤']
    },
    { 
      rank: 5, 
      name: 'Alex Rodriguez', 
      department: 'Design', 
      score: 2250, 
      change: -2,
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400',
      badges: ['🎯', '🏆']
    },
    { 
      rank: 6, 
      name: 'Lisa Wang', 
      department: 'Finance', 
      score: 2180, 
      change: 1,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      badges: ['💧', '😴']
    },
    { 
      rank: 7, 
      name: 'David Wilson', 
      department: 'Operations', 
      score: 2120, 
      change: -1,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      badges: ['🔥']
    },
    { 
      rank: 8, 
      name: 'Jennifer Lee', 
      department: 'Marketing', 
      score: 2050, 
      change: 4,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      badges: ['🥗', '💪']
    },
  ];

  const teamLeaderboard = [
    { 
      rank: 1, 
      name: 'Team Alpha', 
      department: 'Engineering', 
      score: 18500, 
      change: 2,
      members: 8,
      avgScore: 2312
    },
    { 
      rank: 2, 
      name: 'Marketing Mavericks', 
      department: 'Marketing', 
      score: 17800, 
      change: 1,
      members: 6,
      avgScore: 2967
    },
    { 
      rank: 3, 
      name: 'Sales Superstars', 
      department: 'Sales', 
      score: 16900, 
      change: -2,
      members: 7,
      avgScore: 2414
    },
    { 
      rank: 4, 
      name: 'Design Dynamos', 
      department: 'Design', 
      score: 15600, 
      change: 0,
      members: 5,
      avgScore: 3120
    },
    { 
      rank: 5, 
      name: 'Finance Force', 
      department: 'Finance', 
      score: 14200, 
      change: 1,
      members: 6,
      avgScore: 2367
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Trophy className="h-6 w-6 text-amber-600" />;
      default: return <span className="font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBadgeClass = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white';
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-400 text-white';
      case 3: return 'bg-gradient-to-r from-amber-500 to-amber-600 text-white';
      default: return 'bg-gray-100 text-gray-600';
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
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Leaderboard</h1>
        <p className="text-gray-600">See how you stack up against your colleagues</p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col md:flex-row gap-4 mb-8"
      >
        {/* View Type Toggle */}
        <div className="flex bg-white/50 rounded-xl p-1 backdrop-blur-sm">
          <button
            onClick={() => setViewType('individual')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              viewType === 'individual'
                ? 'bg-white shadow-md text-emerald-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <User className="h-4 w-4" />
            <span className="font-medium">Individual</span>
          </button>
          <button
            onClick={() => setViewType('team')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              viewType === 'team'
                ? 'bg-white shadow-md text-emerald-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Users className="h-4 w-4" />
            <span className="font-medium">Team</span>
          </button>
        </div>

        {/* Time Filter */}
        <div className="flex bg-white/50 rounded-xl p-1 backdrop-blur-sm">
          {(['daily', 'weekly', 'monthly'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setTimeFilter(filter)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all capitalize ${
                timeFilter === filter
                  ? 'bg-white shadow-md text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span className="font-medium">{filter}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Top 3 Podium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(viewType === 'individual' ? individualLeaderboard : teamLeaderboard).slice(0, 3).map((entry, index) => (
            <div key={entry.rank} className={`wellness-card p-6 rounded-xl text-center hover-lift ${
              index === 0 ? 'md:order-2 ring-4 ring-yellow-200 scale-105' : 
              index === 1 ? 'md:order-1' : 'md:order-3'
            }`}>
              <div className="mb-4">
                <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center rank-badge ${getRankBadgeClass(entry.rank)}`}>
                  {getRankIcon(entry.rank)}
                </div>
                {viewType === 'individual' && 'avatar' in entry && (
                  <img
                    src={entry.avatar}
                    alt={entry.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-white shadow-lg"
                  />
                )}
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{entry.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{entry.department}</p>
              <div className="flex justify-center items-center space-x-2 mb-3">
                <span className="text-2xl font-bold gradient-text">{entry.score.toLocaleString()}</span>
                <div className={`flex items-center text-xs ${
                  entry.change > 0 ? 'text-emerald-600' : 
                  entry.change < 0 ? 'text-red-500' : 'text-gray-500'
                }`}>
                  {entry.change > 0 ? <ChevronUp className="h-3 w-3" /> : 
                   entry.change < 0 ? <ChevronDown className="h-3 w-3" /> : null}
                  <span>{Math.abs(entry.change)}</span>
                </div>
              </div>
              {viewType === 'individual' && 'badges' in entry && entry.badges && (
                <div className="flex justify-center space-x-1">
                  {entry.badges.map((badge, i) => (
                    <span key={i} className="text-lg">{badge}</span>
                  ))}
                </div>
              )}
              {viewType === 'team' && 'members' in entry && (
                <div className="text-xs text-gray-500">
                  {entry.members} members • Avg: {entry.avgScore}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Full Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="wellness-card rounded-xl overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
            Full Rankings
          </h3>
        </div>
        
        <div className="divide-y divide-gray-100">
          {(viewType === 'individual' ? individualLeaderboard : teamLeaderboard).map((entry, index) => (
            <div key={entry.rank} className={`leaderboard-row p-4 hover:bg-gray-50 transition-colors ${
              'isCurrentUser' in entry && entry.isCurrentUser ? 'bg-emerald-50 border-l-4 border-emerald-500' : ''
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center rank-badge ${getRankBadgeClass(entry.rank)}`}>
                    {entry.rank <= 3 ? getRankIcon(entry.rank) : <span className="font-bold">#{entry.rank}</span>}
                  </div>
                  
                  {viewType === 'individual' && 'avatar' in entry ? (
                    <img
                      src={entry.avatar}
                      alt={entry.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 flex items-center">
                      {entry.name}
                      {'isCurrentUser' in entry && entry.isCurrentUser && (
                        <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">You</span>
                      )}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>{entry.department}</span>
                      {viewType === 'team' && 'members' in entry && (
                        <>
                          <span>•</span>
                          <span>{entry.members} members</span>
                        </>
                      )}
                    </div>
                    {viewType === 'individual' && 'badges' in entry && entry.badges && (
                      <div className="flex space-x-1 mt-1">
                        {entry.badges.map((badge, i) => (
                          <span key={i} className="text-sm">{badge}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-800">{entry.score.toLocaleString()}</span>
                    <div className={`flex items-center text-sm ${
                      entry.change > 0 ? 'text-emerald-600' : 
                      entry.change < 0 ? 'text-red-500' : 'text-gray-500'
                    }`}>
                      {entry.change > 0 ? <ChevronUp className="h-4 w-4" /> : 
                       entry.change < 0 ? <ChevronDown className="h-4 w-4" /> : null}
                      <span>{Math.abs(entry.change)}</span>
                    </div>
                  </div>
                  {viewType === 'team' && 'avgScore' in entry && (
                    <div className="text-xs text-gray-500 mt-1">
                      Avg: {entry.avgScore}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Leaderboard;