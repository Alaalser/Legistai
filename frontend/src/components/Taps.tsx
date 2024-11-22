const Tabs = () => {
    const tabs = [
      'Basic Information',
      'Specialization',
      'Lawyer Team',
      'Reviews',
      'Case Information',
      'Financial Information',
      'Communication',
      'Documents',
    ];
  
    return (
      <div className="border-b border-gray-200">
        <nav className="flex space-x-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className="text-gray-600 hover:text-teal-500 py-2"
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    );
  };
  
  export default Tabs;
  