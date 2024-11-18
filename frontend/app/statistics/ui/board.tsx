// src/components/Dashboard.tsx
import React from 'react';
import Sidebar from './sidebar';
import Card from './card';

// Typowanie dla Dashboard (jeśli przekazujesz jakieś dane przez props, w tym przypadku nie przekazujemy żadnych danych)
const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-6">
          <Card title="Total Sales" value="$24,500" />
          <Card title="New Customers" value="120" />
          <Card title="Orders" value="300" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
