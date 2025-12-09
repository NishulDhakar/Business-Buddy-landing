import React from 'react';
import {
  Home, Box, Users, FileText, Tag, BarChart2,
  Search, Bell, MessageSquare, Plus, MoreHorizontal,
  ArrowUpRight, ArrowDownRight, Filter, Download, Settings,
  ChevronDown
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Mock Data
const revenueData = [
  { name: 'Jan', value: 30 }, { name: 'Feb', value: 40 }, { name: 'Mar', value: 35 },
  { name: 'Apr', value: 50 }, { name: 'May', value: 45 }, { name: 'Jun', value: 60 },
  { name: 'Jul', value: 55 }, { name: 'Aug', value: 70 }, { name: 'Sep', value: 65 },
  { name: 'Oct', value: 80 }, { name: 'Nov', value: 75 }, { name: 'Dec', value: 90 },
];

const ordersData = [
  { name: 'Jan', value: 40 }, { name: 'Feb', value: 30 }, { name: 'Mar', value: 50 },
  { name: 'Apr', value: 45 }, { name: 'May', value: 60 }, { name: 'Jun', value: 55 },
  { name: 'Jul', value: 70 }, { name: 'Aug', value: 65 }, { name: 'Sep', value: 80 },
  { name: 'Oct', value: 75 }, { name: 'Nov', value: 90 }, { name: 'Dec', value: 85 },
];

const products = [
  { id: 1, name: 'Macbook Pro M4 13inch', category: 'Electronic Item', price: '$3,534', sold: '246 Unit', views: '5,416', total: '$1,643,642.95', status: 'Available', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&q=80' },
  { id: 2, name: 'iPhone 15 Pro Max 2021', category: 'Electronic Item', price: '$1,534', sold: '5146 unit', views: '3,526', total: '$1,643,642.95', status: 'Out of stock', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=100&q=80' },
  { id: 3, name: 'Hoodie Uniqlo 124KDA', category: 'Clothing Item', price: '$534', sold: '43 unit', views: '12,436', total: '$1,643,642.95', status: 'Available', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=100&q=80' },
  { id: 4, name: 'New Balance 234SF', category: 'Shoes Item', price: '$216', sold: '21 unit', views: '43,134', total: '$1,643,642.95', status: 'Out of stock', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80' },
];

export const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row h-[800px] md:h-[900px] relative z-10">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col p-4">
        <div className="flex items-center gap-2 px-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-full "></div>
          <span className="font-bold text-lg">Business Buddy</span>
        </div>

        <div className="space-y-1">
          <NavItem icon={<Home size={18} />} label="Dashboard" active />
          <NavItem icon={<BarChart2 size={18} />} label="Analytics" />
          <NavItem icon={<Users size={18} />} label="Users" />
          <NavItem icon={<Box size={18} />} label="Projects" />
          <NavItem icon={<FileText size={18} />} label="Tasks" />
          <NavItem icon={<Tag size={18} />} label="Billing" />
          <NavItem icon={<BarChart2 size={18} />} label="Reports" />
          <NavItem icon={<Settings size={18} />} label="Integrations" badge="New" />
          <NavItem icon={<Settings size={18} />} label="Settings" />
        </div>



        <div className="mt-auto">
          <div className="bg-gradient-to-r from-[#534FEB] to-[#B6B4FF] p-4 rounded-2xl text-white relative overflow-hidden">
            <div className="relative z-10">
              
              <h4 className="font-semibold mb-1">Business Buddy</h4>
              <p className="text-xs opacity-90 mb-2">Trial Mode Active</p>
              <div className="text-xs font-medium bg-white/20 inline-block px-2 py-1 rounded">6 Days Remaining</div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -right-2 -top-2 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-white/10 rounded-full"></div>
          </div>

          <div className="flex items-center gap-3 mt-4 px-2">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="User" className="w-8 h-8 rounded-full object-cover" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Nishul</p>
              <p className="text-xs text-gray-500 truncate">Sales Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#FAFAFA] overflow-y-auto scrollbar-hide p-4 md:p-8">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">👋 Welcome back, Nishul</h2>
            <p className="text-sm text-gray-500">Here's what's happening with your business today</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search something here..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              {/* <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded">⌘K</div> */}
            </div>
            <button className="p-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50"><Bell size={20} /></button>
            <button className="p-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50"><MessageSquare size={20} /></button>
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-800">
              <Plus size={16} />
              <span className="hidden sm:inline">Create request</span>
            </button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Platform Revenue"
            value="$6,240.28"
            change="+8%"
            isPositive={true}
            icon={<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><div className="w-5 h-5 bg-blue-100 rounded-full"></div></div>}
            chartColor="#4F46E5"
            data={revenueData}
          />
          <StatCard
            title="Operating Costs"
            value="$3,275.18"
            change="-2%"
            isPositive={false}
            icon={<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><div className="w-5 h-5 bg-purple-100 rounded-full"></div></div>}
            chartColor="#9333EA"
            data={revenueData} // Reusing for visual
          />
          <StatCard
            title="Active Users"
            value="16,240"
            change="+5%"
            isPositive={true}
            icon={<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><div className="w-5 h-5 bg-pink-100 rounded-full"></div></div>}
            chartColor="#EC4899"
            data={revenueData} // Reusing for visual
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Line Chart */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Platform Growth Overview</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-semibold text-gray-900">$63,423.13</span>
                  <span className="text-sm text-blue-600 font-medium">+$22,711 (12.3%)</span>
                </div>
              </div>
              <button className="flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                All Products <ChevronDown size={12} />
              </button>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9CA3AF' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9CA3AF' }} tickFormatter={(value) => `$${value}k`} />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Monthly Activity Summary</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-semibold text-gray-900">174,463</span>
                  <span className="text-sm text-blue-600 font-medium">+12,325 (10.2%)</span>
                </div>
              </div>
              <button className="flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                All Products <ChevronDown size={12} />
              </button>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ordersData} barSize={8}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9CA3AF' }} />
                  <Tooltip cursor={{ fill: '#F9FAFB' }} />
                  <Bar dataKey="value" fill="#6366F1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Items</h3>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Filter size={14} /> Filter
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Download size={14} /> Import/Export
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800">
                <Plus size={14} /> New product
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 font-medium">Product Name</th>
                  <th className="px-6 py-3 font-medium">Price per unit</th>
                  <th className="px-6 py-3 font-medium">Unit sold</th>
                  <th className="px-6 py-3 font-medium">Views</th>
                  <th className="px-6 py-3 font-medium">Total price</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="bg-white border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={product.img} alt="" className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                        <div>
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-xs text-gray-500">{product.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">{product.price}</td>
                    <td className="px-6 py-4 text-gray-500">{product.sold}</td>
                    <td className="px-6 py-4 text-gray-500">{product.views}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{product.total}</td>
                    <td className="px- py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${product.status === 'Available'
                        ? 'bg-green-50 text-green-600 border border-green-100'
                        : 'bg-red-50 text-red-600 border border-red-100'
                        }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>Page 2 of 16</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, '...', 16].map((page, i) => (
                <button key={i} className={`w-8 h-8 flex items-center justify-center rounded-lg border ${page === 2 ? 'bg-gray-50 border-gray-200 text-gray-900 font-medium' : 'border-transparent hover:bg-gray-50'}`}>
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false, badge }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string }) => (
  <div className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-colors ${active ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
    {badge && <span className="text-[10px] font-bold bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">{badge}</span>}
  </div>
);

const StatCard = ({ title, value, change, isPositive, icon, chartColor, data }: any) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
    <div className="flex justify-between items-start mb-4">
      {icon}
      <div className="h-10 w-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Area type="monotone" dataKey="value" stroke={chartColor} strokeWidth={2} fill="none" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-bold text-gray-900">{value}</span>
      <span className={`flex items-center text-xs font-medium px-1.5 py-0.5 rounded-full ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
        {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        {change}
      </span>
    </div>
  </div>
);
