const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 h-screen">
        <h2 className="p-4 text-lg font-bold">Dashboard Sidebar</h2>
        {/* Add Sidebar Links */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
