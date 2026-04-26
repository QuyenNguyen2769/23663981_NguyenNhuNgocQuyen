import React from 'react';
import { Search, Plus, MoreVertical, Bell, MessageSquare, ChevronDown } from 'lucide-react';

export default function Lab05() {
  const users = [
    { id: 1, name: "Liam Anderson", email: "liam@example.com", role: "Admin", date: "Oct 24, 2023", status: "Active", img: "Avatar.png" },
    { id: 2, name: "Emma Gonzalez", email: "emma@example.com", role: "User", date: "Oct 23, 2023", status: "Active", img: "Avatar (1).png" },
    { id: 3, name: "Noah Patel", email: "noah@example.com", role: "Chef", date: "Oct 22, 2023", status: "Inactive", img: "Avatar (2).png" },
    { id: 4, name: "Olivia Kim", email: "olivia@example.com", role: "User", date: "Oct 21, 2023", status: "Active", img: "Avatar (3).png" },
    { id: 5, name: "William Smith", email: "william@example.com", role: "User", date: "Oct 20, 2023", status: "Active", img: "Avatar (4).png" },
    { id: 6, name: "Ava Johnson", email: "ava@example.com", role: "User", date: "Oct 19, 2023", status: "Inactive", img: "Avatar (5).png" },
  ];

  return (
    <div className="flex w-full h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Dark Sidebar */}
      <aside className="w-64 bg-dark text-gray-400 flex flex-col h-full shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">C</div>
          <span className="text-xl font-bold text-white tracking-wide">Chefify</span>
        </div>
        
        <div className="px-4 py-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 px-2">Menu</p>
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors">
              <img src="/img/Lab_05/Squares four 1.png" alt="icon" className="w-5 h-5 opacity-70" onError={(e) => e.target.style.display='none'} />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 text-white transition-colors">
              <img src="/img/Lab_05/Groups.png" alt="icon" className="w-5 h-5" onError={(e) => e.target.style.display='none'} />
              Users
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors">
              <img src="/img/Lab_05/File text 1.png" alt="icon" className="w-5 h-5 opacity-70" onError={(e) => e.target.style.display='none'} />
              Recipes
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors">
              <img src="/img/Lab_05/Folder.png" alt="icon" className="w-5 h-5 opacity-70" onError={(e) => e.target.style.display='none'} />
              Categories
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors">
              <img src="/img/Lab_05/Pie chart.png" alt="icon" className="w-5 h-5 opacity-70" onError={(e) => e.target.style.display='none'} />
              Analytics
            </a>
          </nav>
        </div>

        <div className="mt-auto p-6">
          <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 cursor-pointer transition-colors border border-white/10">
            <img src="/img/Lab_05/Avatar 313.png" alt="Admin" className="w-10 h-10 rounded-full object-cover" onError={(e) => e.target.style.display='none'} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-gray-500 truncate">admin@chefify.com</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search users..." 
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64 transition-all"
              />
            </div>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border border-white"></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="ml-4 bg-primary hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm shadow-red-100">
                <Plus className="w-4 h-4" />
                Add User
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 flex items-center justify-between border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">All Users</h2>
              <div className="flex gap-2">
                 <button className="px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">Filter</button>
                 <button className="px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">Export</button>
              </div>
            </div>
            
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">Name</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">Role</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">Email</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">Date Added</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">Status</th>
                  <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img src={`/img/Lab_05/${user.img}`} alt={user.name} className="w-9 h-9 rounded-full object-cover border border-gray-200" onError={(e) => {
                           e.target.onerror = null;
                           e.target.src = "https://ui-avatars.com/api/?name=" + user.name.replace(' ', '+') + "&background=random";
                        }} />
                        <span className="font-medium text-gray-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">{user.role}</td>
                    <td className="py-4 px-6 text-sm text-gray-500">{user.email}</td>
                    <td className="py-4 px-6 text-sm text-gray-500">{user.date}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                        user.status === 'Active' 
                          ? 'bg-green-50 text-green-700 border-green-200' 
                          : 'bg-gray-100 text-gray-600 border-gray-200'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-red-50 opacity-0 group-hover:opacity-100 focus:opacity-100">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
              <span>Showing 1 to 6 of 24 entries</span>
              <div className="flex gap-1">
                <button className="px-3 py-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>Prev</button>
                <button className="px-3 py-1 border border-gray-200 rounded bg-gray-50 text-gray-900 font-medium">1</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-600">2</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-600">3</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-600">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
