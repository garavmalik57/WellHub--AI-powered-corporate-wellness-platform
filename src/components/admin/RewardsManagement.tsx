import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, 
  Star, 
  Plus,
  Edit3,
  Trash2,
  Eye,
  Package,
  DollarSign,
  TrendingUp,
  Users,
  History,
  Award,
  ShoppingCart,
  Calendar
} from 'lucide-react';

const RewardsManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rewards' | 'redemptions' | 'analytics'>('rewards');

  const rewards = [
    {
      id: 1,
      name: 'Premium Gym Membership',
      description: '1-month access to premium gym facilities with personal trainer',
      category: 'Fitness',
      cost: 500,
      pointsValue: 500,
      availability: 25,
      totalStock: 50,
      redemptions: 25,
      status: 'active',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Wellness Workshop',
      description: 'Attend exclusive nutrition and mindfulness workshop',
      category: 'Education',
      cost: 300,
      pointsValue: 300,
      availability: 15,
      totalStock: 20,
      redemptions: 5,
      status: 'active',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Fitness Tracker',
      description: 'Latest smartwatch with comprehensive health monitoring',
      category: 'Technology',
      cost: 800,
      pointsValue: 800,
      availability: 0,
      totalStock: 10,
      redemptions: 10,
      status: 'out_of_stock',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Massage Therapy Session',
      description: '60-minute relaxation massage with certified therapist',
      category: 'Wellness',
      cost: 200,
      pointsValue: 200,
      availability: 30,
      totalStock: 40,
      redemptions: 10,
      status: 'active',
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      name: 'Healthy Meal Kit',
      description: 'Week supply of nutritious, pre-planned meals',
      category: 'Nutrition',
      cost: 150,
      pointsValue: 150,
      availability: 50,
      totalStock: 100,
      redemptions: 50,
      status: 'active',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const recentRedemptions = [
    {
      id: 1,
      user: 'Sarah Johnson',
      userDepartment: 'Marketing',
      reward: 'Premium Gym Membership',
      pointsUsed: 500,
      date: '2024-01-20',
      status: 'completed',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      user: 'Mike Chen',
      userDepartment: 'Engineering',
      reward: 'Wellness Workshop',
      pointsUsed: 300,
      date: '2024-01-19',
      status: 'pending',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      user: 'Emily Davis',
      userDepartment: 'HR',
      reward: 'Massage Therapy Session',
      pointsUsed: 200,
      date: '2024-01-18',
      status: 'completed',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      user: 'Alex Rodriguez',
      userDepartment: 'Design',
      reward: 'Healthy Meal Kit',
      pointsUsed: 150,
      date: '2024-01-17',
      status: 'completed',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const analyticsData = {
    totalPointsIssued: 125000,
    totalPointsRedeemed: 87500,
    redemptionRate: 70,
    topCategories: [
      { category: 'Fitness', redemptions: 45, percentage: 35 },
      { category: 'Wellness', redemptions: 38, percentage: 30 },
      { category: 'Nutrition', redemptions: 25, percentage: 20 },
      { category: 'Technology', redemptions: 12, percentage: 10 },
      { category: 'Education', redemptions: 6, percentage: 5 }
    ],
    monthlyTrends: [
      { month: 'Jan', issued: 15000, redeemed: 12000 },
      { month: 'Feb', issued: 18000, redeemed: 14500 },
      { month: 'Mar', issued: 22000, redeemed: 16800 },
      { month: 'Apr', issued: 25000, redeemed: 19200 }
    ]
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Fitness': 'blue',
      'Wellness': 'purple',
      'Nutrition': 'green',
      'Technology': 'indigo',
      'Education': 'yellow'
    };
    return colors[category] || 'gray';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'emerald';
      case 'out_of_stock': return 'red';
      case 'draft': return 'gray';
      case 'completed': return 'emerald';
      case 'pending': return 'yellow';
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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Rewards Management</h1>
            <p className="text-gray-600">Manage rewards catalog and track redemption analytics</p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Package className="h-4 w-4" />
              <span>Bulk Import</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              <Plus className="h-4 w-4" />
              <span>Add Reward</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-white/50 rounded-xl p-1 mb-8 backdrop-blur-sm">
        {[
          { key: 'rewards' as const, label: 'Rewards Catalog', icon: Gift },
          { key: 'redemptions' as const, label: 'Redemption History', icon: History },
          { key: 'analytics' as const, label: 'Analytics', icon: TrendingUp },
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
        {activeTab === 'rewards' && (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="stat-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Total Rewards</h3>
                  <Gift className="h-5 w-5 text-blue-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800">{rewards.length}</p>
                <p className="text-xs text-blue-600">Active catalog</p>
              </div>
              
              <div className="stat-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Total Redemptions</h3>
                  <ShoppingCart className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  {rewards.reduce((sum, r) => sum + r.redemptions, 0)}
                </p>
                <p className="text-xs text-emerald-600">This month</p>
              </div>
              
              <div className="stat-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Points Redeemed</h3>
                  <Star className="h-5 w-5 text-orange-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800">87.5K</p>
                <p className="text-xs text-orange-600">Total points</p>
              </div>
              
              <div className="stat-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Out of Stock</h3>
                  <Package className="h-5 w-5 text-red-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800">
                  {rewards.filter(r => r.status === 'out_of_stock').length}
                </p>
                <p className="text-xs text-red-600">Need restocking</p>
              </div>
            </div>

            {/* Rewards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {rewards.map((reward) => (
                <div key={reward.id} className="wellness-card p-6 rounded-xl hover-lift">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${getCategoryColor(reward.category)}-100 text-${getCategoryColor(reward.category)}-700`}>
                        {reward.category}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize bg-${getStatusColor(reward.status)}-100 text-${getStatusColor(reward.status)}-700`}>
                        {reward.status.replace('_', ' ')}
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

                  {/* Image */}
                  <img 
                    src={reward.image} 
                    alt={reward.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{reward.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{reward.description}</p>

                  {/* Points and Cost */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-orange-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-semibold">{reward.pointsValue}</span>
                      <span className="text-xs text-gray-500">points</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-600">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-semibold">{reward.cost}</span>
                    </div>
                  </div>

                  {/* Stock Info */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Stock</span>
                      <span>{reward.availability}/{reward.totalStock}</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          reward.availability === 0 ? 'bg-red-500' :
                          reward.availability < reward.totalStock * 0.3 ? 'bg-yellow-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${(reward.availability / reward.totalStock) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Redemption Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{reward.redemptions} redeemed</span>
                    <span>{Math.round((reward.redemptions / reward.totalStock) * 100)}% popularity</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'redemptions' && (
          <div className="wellness-card rounded-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Recent Redemptions</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 font-semibold text-gray-800">User</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-800">Reward</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-800">Points Used</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-800">Date</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-800">Status</th>
                    <th className="text-center py-3 px-6 font-semibold text-gray-800">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentRedemptions.map((redemption) => (
                    <tr key={redemption.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <img
                            src={redemption.avatar}
                            alt={redemption.user}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-medium text-gray-800">{redemption.user}</h4>
                            <p className="text-sm text-gray-600">{redemption.userDepartment}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <p className="font-medium text-gray-800">{redemption.reward}</p>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-orange-500 fill-current" />
                          <span className="font-medium text-gray-800">{redemption.pointsUsed}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-gray-600">{redemption.date}</p>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize bg-${getStatusColor(redemption.status)}-100 text-${getStatusColor(redemption.status)}-700`}>
                          {redemption.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center space-x-2">
                          <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          {redemption.status === 'pending' && (
                            <button className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                              <Award className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="wellness-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Points Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Issued:</span>
                    <span className="font-bold text-gray-800">{analyticsData.totalPointsIssued.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Redeemed:</span>
                    <span className="font-bold text-gray-800">{analyticsData.totalPointsRedeemed.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Redemption Rate:</span>
                    <span className="font-bold text-emerald-600">{analyticsData.redemptionRate}%</span>
                  </div>
                </div>
              </div>

              <div className="wellness-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Categories</h3>
                <div className="space-y-3">
                  {analyticsData.topCategories.slice(0, 3).map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-600">{category.category}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${category.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-800">{category.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wellness-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <Package className="h-5 w-5 text-blue-500" />
                    <span>Restock Low Items</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <Users className="h-5 w-5 text-emerald-500" />
                    <span>Approve Pending</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <TrendingUp className="h-5 w-5 text-purple-500" />
                    <span>Export Analytics</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Category Performance */}
            <div className="wellness-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Category Performance</h3>
              <div className="space-y-4">
                {analyticsData.topCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-${getCategoryColor(category.category)}-100 flex items-center justify-center`}>
                        <Gift className={`h-6 w-6 text-${getCategoryColor(category.category)}-600`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{category.category}</h4>
                        <p className="text-sm text-gray-600">{category.redemptions} redemptions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-800">{category.percentage}%</p>
                      <p className="text-sm text-gray-600">of total</p>
                    </div>
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

export default RewardsManagement;