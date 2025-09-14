import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Activity,
  Download,
  Calendar,
  Filter,
  Eye,
  Target,
  Award
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter'>('month');

  // Mock data
  const overviewMetrics = [
    { 
      label: 'Total Participation', 
      value: '78.5%', 
      change: '+5.2%', 
      trend: 'up',
      icon: Users,
      color: 'emerald'
    },
    { 
      label: 'Avg Wellness Score', 
      value: '82.3', 
      change: '+2.1%', 
      trend: 'up',
      icon: Target,
      color: 'blue'
    },
    { 
      label: 'Challenge Completion', 
      value: '65.8%', 
      change: '-1.3%', 
      trend: 'down',
      icon: Award,
      color: 'purple'
    },
    { 
      label: 'Daily Active Users', 
      value: '1,023', 
      change: '+8.7%', 
      trend: 'up',
      icon: Activity,
      color: 'orange'
    },
  ];

  const departmentData = [
    { department: 'Engineering', participation: 85, avgScore: 84, employees: 145 },
    { department: 'Marketing', participation: 78, avgScore: 79, employees: 98 },
    { department: 'Sales', participation: 72, avgScore: 76, employees: 112 },
    { department: 'HR', participation: 92, avgScore: 88, employees: 45 },
    { department: 'Finance', participation: 68, avgScore: 74, employees: 67 },
    { department: 'Design', participation: 89, avgScore: 86, employees: 32 },
  ];

  const weeklyEngagement = [
    { week: 'Week 1', activeUsers: 856, challenges: 3, avgScore: 78 },
    { week: 'Week 2', activeUsers: 923, challenges: 4, avgScore: 80 },
    { week: 'Week 3', activeUsers: 1045, challenges: 5, avgScore: 82 },
    { week: 'Week 4', activeUsers: 987, challenges: 4, avgScore: 84 },
  ];

  const wellnessCategories = [
    { name: 'Physical Activity', value: 35, color: '#10B981' },
    { name: 'Nutrition', value: 25, color: '#3B82F6' },
    { name: 'Sleep', value: 20, color: '#8B5CF6' },
    { name: 'Mental Health', value: 20, color: '#F59E0B' },
  ];

  const challengePerformance = [
    { name: '30-Day Step Challenge', participants: 456, completion: 78, engagement: 85 },
    { name: 'Mindful March', participants: 234, completion: 65, engagement: 72 },
    { name: 'Hydration Heroes', participants: 678, completion: 92, engagement: 88 },
    { name: 'Sleep Champion', participants: 189, completion: 45, engagement: 61 },
  ];

  const topPerformers = [
    { name: 'Sarah Johnson', department: 'Marketing', score: 2450, improvement: '+15%' },
    { name: 'Mike Chen', department: 'Engineering', score: 2380, improvement: '+12%' },
    { name: 'Emily Davis', department: 'HR', score: 2340, improvement: '+8%' },
    { name: 'Alex Rodriguez', department: 'Design', score: 2290, improvement: '+6%' },
    { name: 'Lisa Wang', department: 'Finance', score: 2250, improvement: '+10%' },
  ];

  const inactiveUsers = [
    { name: 'David Wilson', department: 'Operations', lastActive: '7 days ago', score: 45 },
    { name: 'Jennifer Lee', department: 'Sales', lastActive: '5 days ago', score: 52 },
    { name: 'Robert Kim', department: 'Finance', lastActive: '10 days ago', score: 38 },
    { name: 'Maria Garcia', department: 'Marketing', lastActive: '3 days ago', score: 61 },
  ];

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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Analytics & Reports</h1>
            <p className="text-gray-600">Detailed insights into workplace wellness engagement</p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Overview Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"
      >
        {overviewMetrics.map((metric, index) => (
          <div key={index} className="wellness-card p-6 rounded-xl hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${metric.color}-100`}>
                <metric.icon className={`h-6 w-6 text-${metric.color}-600`} />
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                metric.trend === 'up' ? 'text-emerald-600 bg-emerald-100' : 'text-red-600 bg-red-100'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
        {/* Department Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 text-blue-500 mr-2" />
              Department Performance
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="department" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Bar dataKey="participation" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Weekly Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 text-emerald-500 mr-2" />
              Weekly Engagement Trends
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyEngagement}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="week" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Area 
                    type="monotone" 
                    dataKey="activeUsers" 
                    stroke="#10b981" 
                    fill="#10b981" 
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
        {/* Wellness Categories Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Wellness Focus Areas</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={wellnessCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {wellnessCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {wellnessCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{category.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{category.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Top Performers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Award className="h-5 w-5 text-yellow-500 mr-2" />
              Top Performers
            </h3>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-yellow-100 text-yellow-600' :
                      index === 1 ? 'bg-gray-100 text-gray-600' :
                      index === 2 ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
                    }`}>
                      <span className="font-bold text-sm">#{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">{performer.name}</h4>
                      <p className="text-xs text-gray-600">{performer.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-800">{performer.score}</p>
                    <p className="text-xs text-emerald-600">{performer.improvement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Inactive Users */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Eye className="h-5 w-5 text-red-500 mr-2" />
              Needs Attention
            </h3>
            <div className="space-y-4">
              {inactiveUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">{user.name}</h4>
                    <p className="text-xs text-gray-600">{user.department}</p>
                    <p className="text-xs text-red-500">Last active: {user.lastActive}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${
                      user.score < 50 ? 'text-red-600' : 'text-yellow-600'
                    }`}>
                      {user.score}
                    </p>
                    <p className="text-xs text-gray-500">Score</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Challenge Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="wellness-card p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Challenge Performance Analysis</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Challenge</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Participants</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Completion Rate</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Engagement</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {challengePerformance.map((challenge, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <h4 className="font-medium text-gray-800">{challenge.name}</h4>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{challenge.participants}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              challenge.completion >= 80 ? 'bg-emerald-500' :
                              challenge.completion >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${challenge.completion}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-800">{challenge.completion}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        challenge.engagement >= 80 ? 'bg-emerald-100 text-emerald-700' :
                        challenge.engagement >= 60 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {challenge.engagement}%
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;