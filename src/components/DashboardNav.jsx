import React from 'react';

function DashboardNav({ onSelectSection, activeSection }) { // Removed onInitiateAction
  const navLinks = [
    { name: 'Accounts', key: 'accounts' },
    { name: 'Payments and Transfers', key: 'payments' },
    { name: 'Services', key: 'services' },
    { name: 'Settings and Support', key: 'settings' },
  ];

  // This function now directly changes the section without Face ID
  const handleNavClick = (key) => {
    onSelectSection(key);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <div className="flex space-x-6 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide md:overflow-x-visible md:pb-0"> {/* Added mobile scroll */}
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className={`py-2 text-base font-semibold transition duration-200 ease-in-out px-3 md:px-0
                ${activeSection === link.key
                  ? 'text-mtbGreen border-b-2 border-mtbGreen'
                  : 'text-gray-700 hover:text-mtbGreen-dark hover:border-b-2 hover:border-mtbGreen-light'
                }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Welcome Message */}
        <div className="text-sm text-gray-700 font-semibold hidden md:block"> {/* Hidden on small screens */}
          Welcome back to Business Banking, <span className="text-mtbGreen">Caterina Tracy</span>! {/* Updated Name */}
        </div>
      </div>
    </nav>
  );
}

export default DashboardNav;