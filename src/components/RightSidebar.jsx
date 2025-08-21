import React from 'react';

function RightSidebar({ onInitiateAction }) { // onInitiateAction prop is still present
  const ActionLink = ({ text, icon, onClickAction }) => (
    <button
      onClick={() => onInitiateAction(onClickAction)}
      className="flex items-center text-mtbGreen hover:underline py-2 w-full text-left"
    >
      <span className="mr-2 text-lg">{icon}</span> {text}
    </button>
  );

  const StatusItem = ({ text, status }) => {
    let statusColor = '';
    switch (status) {
      case 'pending':
        statusColor = 'bg-yellow-500';
        break;
      case 'approved':
        statusColor = 'bg-green-500';
        break;
      case 'rejected':
        statusColor = 'bg-red-500';
        break;
      default:
        statusColor = 'bg-gray-400';
    }
    return (
      <li className="flex items-center text-gray-700 py-2">
        <span className={`h-3 w-3 rounded-full ${statusColor} mr-2`}></span> {text}
      </li>
    );
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md w-full md:max-w-xs lg:max-w-sm"> {/* Adjusted padding */}
      {/* Add Shortcut Section - each shortcut will trigger Face ID (which now fails) */}
      <div className="mb-6 sm:mb-8">
        <h4 className="text-xl font-bold text-gray-800 mb-3 sm:mb-4">Add Shortcut</h4>
        <div className="space-y-2">
          <ActionLink text="Schedule a Transfer" icon="+" onClickAction={() => console.log('Simulating Schedule a Transfer from Sidebar')} />
          <ActionLink text="Send Money with Zelle®" icon="+" onClickAction={() => console.log('Simulating Send Money with Zelle® from Sidebar')} />
          <ActionLink text="Pay a Bill" icon="+" onClickAction={() => console.log('Simulating Pay a Bill from Sidebar')} />
          <ActionLink text="Apply for a Loan" icon="+" onClickAction={() => console.log('Simulating Apply for a Loan from Sidebar')} />
        </div>
      </div>

      {/* Items Pending Approval Section */}
      <div className="mb-6 sm:mb-8">
        <h4 className="text-xl font-bold text-gray-800 mb-3 sm:mb-4">Items Pending Approval</h4>
        <ul>
          {/* Status items are not typically actions, so they won't trigger Face ID */}
          <StatusItem text="Bill Payments" status="pending" />
          <StatusItem text="Transfers" status="pending" />
          {/* Add more items as needed */}
        </ul>
      </div>

      {/* Thank You Section */}
      <div className="bg-mtbGreen text-white p-4 rounded-lg text-center font-semibold mb-6 sm:mb-8">
        Thank you for banking with M&T.
      </div>

      {/* "I Want to..." Section - each link will trigger Face ID (which now fails) */}
      <div>
        <h4 className="text-xl font-bold text-gray-800 mb-3 sm:mb-4">I Want to...</h4>
        <div className="space-y-2">
          <button
            onClick={() => onInitiateAction(() => console.log('Simulating Get a Tour of Online Banking from Sidebar'))}
            className="block text-mtbGreen hover:underline py-1 w-full text-left"
          >
            Get a Tour of Online Banking
          </button>
          <button
            onClick={() => onInitiateAction(() => console.log('Simulating Download My Account History to QuickBooks® from Sidebar'))}
            className="block text-mtbGreen hover:underline py-1 w-full text-left"
          >
            Download My Account History to QuickBooks®
          </button>
          {/* Add more links as needed */}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;