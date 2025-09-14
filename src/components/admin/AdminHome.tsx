import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Trophy, 
  Activity,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Target,
  Award,
  Zap
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const AdminHome: React.FC = () => {
  // Mock data
  const overviewStats = [
    { label: 'Total Employees', value: '1,247', change: '+5.2%', color: 'blue', icon: Users },
    { label: 'Active Participants', value: '982', change: '+12.3%', color: 'emerald', icon: TrendingUp },
    { label: 'Ongoing Challenges', value: '8', change: '+2', color: 'purple', icon: Trophy },
    { label: 'Avg Wellness Score', value: '78.5', change: '+3.2%', color: 'orange', icon: Activity },
  ];

  const departmentData = [
    { department: 'Engineering', participants: 145, avgScore: 82 },
    { department: 'Marketing', participants: 98, avgScore: 79 },
    { department: 'Sales', participants: 112, avgScore: 76 },
    { department: 'HR', participants: 45, avgScore: 85 },
    { department: 'Finance', participants: 67, avgScore: 74 },
    { department: 'Operations', participants: 89, avgScore: 77 },
  ];

  const weeklyActivity = [
    { day: 'Mon', steps: 145000, participants: 892 },
    { day: 'Tue', steps: 178000, participants: 934 },
    { day: 'Wed', steps: 123000, participants: 856 },
    { day: 'Thu', steps: 189000, participants: 987 },
    { day: 'Fri', steps: 156000, participants: 912 },
    { day: 'Sat', steps: 98000, participants: 678 },
    { day: 'Sun', steps: 87000, participants: 601 },
  ];

  const challengeProgress = [
    { name: '30-Day Step Challenge', completion: 78, participants: 456 },
    { name: 'Mindful March', completion: 65, participants: 234 },
    { name: 'Hydration Heroes', completion: 92, participants: 678 },
    { name: 'Weekend Warriors', completion: 43, participants: 189 },
  ];

  const recentAlerts = [
    { id: 1, type: 'warning', message: 'Low participation in Sales department', time: '2 hours ago' },
    { id: 2, type: 'success', message: 'New weekly step record achieved!', time: '4 hours ago' },
    { id: 3, type: 'info', message: 'Monthly wellness report ready', time: '1 day ago' },
    { id: 4, type: 'warning', message: '15 inactive users this week', time: '2 days ago' },
  ];

  const topPerformers = [
    { name: 'Sarah Johnson', department: 'Marketing', score: 2450 },
    { name: 'Mike Chen', department: 'Engineering', score: 2380 },
    { name: 'Emily Davis', department: 'HR', score: 2340 },
    { name: 'Alex Rodriguez', department: 'Design', score: 2290 },
    { name: 'Lisa Wang', department: 'Finance', score: 2250 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Company-wide wellness overview and management</p>
      </motion.div>

      {/* Overview Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"
      >
        {overviewStats.map((stat, index) => (
          <div key={index} className="wellness-card p-6 rounded-xl hover-lift">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                stat.change.includes('+') ? 'text-emerald-600 bg-emerald-100' : 'text-red-600 bg-red-100'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Weekly Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="xl:col-span-2"
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
              Weekly Activity Overview
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyActivity}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Bar dataKey="steps" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Recent Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="xl:col-span-1"
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
              Recent Alerts
            </h3>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`p-1 rounded-full ${
                    alert.type === 'warning' ? 'bg-orange-100' :
                    alert.type === 'success' ? 'bg-emerald-100' : 'bg-blue-100'
                  }`}>
                    {alert.type === 'warning' && <AlertTriangle className="h-3 w-3 text-orange-600" />}
                    {alert.type === 'success' && <CheckCircle className="h-3 w-3 text-emerald-600" />}
                    {alert.type === 'info' && <Activity className="h-3 w-3 text-blue-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
        {/* Department Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Users className="h-5 w-5 text-emerald-500 mr-2" />
              Department Performance
            </h3>
            <div className="space-y-4">
              {departmentData.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div>
                    <h4 className="font-medium text-gray-800">{dept.department}</h4>
                    <p className="text-sm text-gray-600">{dept.participants} participants</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-800">{dept.avgScore}</p>
                    <p className="text-xs text-gray-500">Avg Score</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Challenge Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="wellness-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Trophy className="h-5 w-5 text-purple-500 mr-2" />
              Active Challenges
            </h3>
            <div className="space-y-4">
              {challengeProgress.map((challenge, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-800 text-sm">{challenge.name}</h4>
                    <span className="text-sm text-gray-600">{challenge.completion}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${challenge.completion}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500">{challenge.participants} participants</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top Performers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8"
      >
        <div className="wellness-card p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Award className="h-5 w-5 text-yellow-500 mr-2" />
            Top Performers This Week
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  index === 0 ? 'bg-yellow-100 text-yellow-600' :
                  index === 1 ? 'bg-gray-100 text-gray-600' :
                  index === 2 ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  <span className="font-bold">#{index + 1}</span>
                </div>
                <h4 className="font-medium text-gray-800 text-sm mb-1">{performer.name}</h4>
                <p className="text-xs text-gray-600 mb-1">{performer.department}</p>
                <p className="text-sm font-bold gradient-text">{performer.score}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminHome;