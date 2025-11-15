import React, { useState } from 'react';
import { 
  Trophy, 
  Star, 
  Award, 
  TrendingUp, 
  Gift, 
  Target,
  Home,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Crown,
  Zap,
  Medal
} from 'lucide-react';

function App() {
   const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Mock user data
  const userData = {
    name: "Rohan Patil",
    points: 2850,
    maxPoints: 5000,
    level: 12,
    badges: [
      { 
        id: 1, 
        name: "Early Adopter", 
        icon: Star, 
        color: "bg-yellow-500",
        description: "Joined in the first month",
        earned: true
      },
      { 
        id: 2, 
        name: "High Achiever", 
        icon: Trophy, 
        color: "bg-purple-500",
        description: "Reached 2000 points",
        earned: true
      },
      { 
        id: 3, 
        name: "Consistent", 
        icon: Zap, 
        color: "bg-blue-500",
        description: "7 day streak",
        earned: true
      },
      { 
        id: 4, 
        name: "Team Player", 
        icon: Award, 
        color: "bg-green-500",
        description: "Helped 10 team members",
        earned: false
      },
      { 
        id: 5, 
        name: "Legend", 
        icon: Crown, 
        color: "bg-orange-500",
        description: "Reach level 20",
        earned: false
      },
      { 
        id: 6, 
        name: "Master", 
        icon: Medal, 
        color: "bg-red-500",
        description: "Complete all challenges",
        earned: false
      }
    ],
    recentActivity: [
      { id: 1, action: "Completed daily challenge", points: "+50", time: "2 hours ago" },
      { id: 2, action: "Referred a friend", points: "+200", time: "1 day ago" },
      { id: 3, action: "Profile completion", points: "+100", time: "3 days ago" }
    ]
  };

  const progressPercentage = (userData.points / userData.maxPoints) * 100;

  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Trophy, label: "Rewards", active: false },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: Gift, label: "Redeem", active: false },
    { icon: Settings, label: "Settings", active: false }
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-gradient-to-b from-indigo-600 to-indigo-800 text-white p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <Trophy className="text-indigo-600" size={24} />
          </div>
          <h1 className="text-2xl font-bold">Qura Rewards</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                item.active 
                  ? 'bg-white bg-opacity-20 font-semibold' 
                  : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition mt-auto">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-indigo-600 to-indigo-800 text-white p-6 transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Trophy className="text-indigo-600" size={24} />
            </div>
            <h1 className="text-xl font-bold">Qura Rewards</h1>
          </div>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                item.active 
                  ? 'bg-white bg-opacity-20 font-semibold' 
                  : 'hover:bg-white hover:bg-opacity-10'
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition mt-8">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden text-gray-600 hover:text-gray-900"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={24} />
              </button>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Welcome back, {userData.name}!</h2>
                <p className="text-sm text-gray-600 hidden sm:block">Track your progress and redeem amazing rewards</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 sm:px-4 py-2 rounded-lg">
              <Star size={18} className="hidden sm:block" />
              <span className="font-bold text-sm sm:text-base">Level {userData.level}</span>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Points Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white mb-6 lg:mb-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-indigo-200 text-sm mb-2">Total Points</p>
                <h3 className="text-4xl sm:text-5xl font-bold">{userData.points.toLocaleString()}</h3>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <TrendingUp size={20} />
                <span className="text-sm font-semibold">+250 this week</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-indigo-200">Progress to next level</span>
                <span className="font-semibold">{userData.points} / {userData.maxPoints}</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-3 sm:h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 h-full rounded-full transition-all duration-500 shadow-lg"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-indigo-200 text-xs sm:text-sm mt-2">
                {userData.maxPoints - userData.points} points until Level {userData.level + 1}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Badges Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Award className="text-indigo-600" size={24} />
                  Your Badges
                </h3>
                <span className="text-sm text-gray-600">
                  {userData.badges.filter(b => b.earned).length} / {userData.badges.length}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {userData.badges.map(badge => (
                  <div 
                    key={badge.id}
                    className={`bg-white rounded-xl p-4 sm:p-6 shadow-md border-2 transition-all hover:scale-105 ${
                      badge.earned 
                        ? 'border-transparent hover:shadow-xl' 
                        : 'border-gray-200 opacity-50'
                    }`}
                  >
                    <div className={`${badge.color} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto ${
                      !badge.earned && 'grayscale'
                    }`}>
                      <badge.icon className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-gray-800 text-center text-sm sm:text-base mb-1 sm:mb-2">
                      {badge.name}
                    </h4>
                    <p className="text-xs text-gray-600 text-center">
                      {badge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
                <Target className="text-indigo-600" size={24} />
                Recent Activity
              </h3>

              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 space-y-4">
                {userData.recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Gift className="text-indigo-600" size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 mb-1 truncate">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <span className="text-green-600 font-bold text-sm flex-shrink-0">
                      {activity.points}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={18} />
                    <span className="text-xs opacity-90">Streak</span>
                  </div>
                  <p className="text-2xl font-bold">7 days</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy size={18} />
                    <span className="text-xs opacity-90">Rank</span>
                  </div>
                  <p className="text-2xl font-bold">#24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
