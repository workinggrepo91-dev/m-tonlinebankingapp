import React from 'react';

function ServicesContent({ onInitiateAction }) { // onInitiateAction prop is still present
  const serviceCategories = [
    {
      title: 'Account Management',
      services: [
        { name: 'Order Checks', action: () => console.log('Simulating Order Checks') },
        { name: 'Stop Payment', action: () => console.log('Simulating Stop Payment') },
        { name: 'View Statements', action: () => console.log('Simulating View Statements') },
        { name: 'Manage Alerts', action: () => console.log('Simulating Manage Alerts') }
      ],
    },
    {
      title: 'Credit and Loans',
      services: [
        { name: 'Apply for a Loan', action: () => console.log('Simulating Apply for a Loan') },
        { name: 'View Loan Details', action: () => console.log('Simulating View Loan Details') },
        { name: 'Credit Score', action: () => console.log('Simulating Credit Score') }
      ],
    },
    {
      title: 'Digital Tools',
      services: [
        { name: 'Mobile Deposit', action: () => console.log('Simulating Mobile Deposit') },
        { name: 'Online Bill Pay Setup', action: () => console.log('Simulating Online Bill Pay Setup') },
        { name: 'Zelle® Enrollment', action: () => console.log('Simulating Zelle® Enrollment') }
      ],
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md w-full"> {/* Adjusted padding */}
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Our Services</h3> {/* Adjusted text size */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> {/* Adjusted gap */}
        {serviceCategories.map((category, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h4 className="text-lg font-semibold text-gray-700 mb-3">{category.title}</h4>
            <ul className="space-y-2">
              {category.services.map((service, idx) => (
                <li key={idx}>
                  {/* Each service link will now trigger Face ID (which now fails) */}
                  <button
                    onClick={() => onInitiateAction(service.action)}
                    className="text-mtbGreen hover:underline w-full text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesContent;