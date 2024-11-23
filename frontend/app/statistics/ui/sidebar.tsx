import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <ul>
        <li className="mb-4 hover:bg-gray-700 p-2 rounded">
          <a href="#">Home</a>
        </li>
        <li className="mb-4 hover:bg-gray-700 p-2 rounded">
          <a href="#">Analytics</a>
        </li>
        <li className="mb-4 hover:bg-gray-700 p-2 rounded">
          <a href="#">Settings</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
