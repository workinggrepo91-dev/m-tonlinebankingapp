import React from 'react';

function AccountSummaryContent({ onInitiateAction }) { // onInitiateAction prop is still present for internal actions
  const accountTypes = [
    { name: 'Checking (5671)', total: 1944000.00, available: 1943800.00 }, // Updated for total of 2,009,000
    { name: 'Savings (5672)', total: 15000.00, available: 15000.00 },
    { name: 'Investment Account (5673)', total: 50000.00, available: 50000.00 },
  ];

  const totalBalanceSum = accountTypes.reduce((sum, account) => sum + account.total, 0);

  const ActionIcon = ({ children, onClickAction }) => (
    <button
      onClick={() => onInitiateAction(onClickAction)}
      className="p-2 rounded-full hover:bg-gray-200 cursor-pointer transition duration-150"
    >
      {children}
    </button>
  );

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md w-full">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
        Account Summary for Jordan Mark Newton  - Account Number: 11000910642546 {/* Updated heading */}
      </h3>

      {/* Tabs for Account Types - These do NOT trigger Face ID */}
      <div className="flex border-b border-gray-300 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <button className="py-2 px-3 text-base sm:text-lg font-semibold text-mtbGreen border-b-2 border-mtbGreen flex-shrink-0">
          Business Accounts
        </button>
        <button className="py-2 px-3 text-base sm:text-lg font-semibold text-gray-600 hover:text-mtbGreen flex-shrink-0">
          Personal Accounts
        </button>
      </div>

      {/* Interactive Icon Bar - each icon will trigger Face ID (which now fails) */}
      <div className="flex items-center space-x-2 sm:space-x-4 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ActionIcon onClickAction={() => console.log('Simulating Search')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </ActionIcon>
        <ActionIcon onClickAction={() => console.log('Simulating Download')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        </ActionIcon>
        <ActionIcon onClickAction={() => console.log('Simulating Print')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6m-6-4v4m6-4v4m-5 4h2m-7-4h6m-6 4v4m6-4v4" /></svg></ActionIcon>
        <ActionIcon onClickAction={() => console.log('Simulating Export')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></ActionIcon>
      </div>

      {/* Account Details Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Balance</th>
              <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available Balance</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {accountTypes.map((account, index) => (
              <tr key={index}>
                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm font-medium text-mtbGreen">
                  {/* Account links will now trigger Face ID (which now fails) */}
                  <button onClick={() => onInitiateAction(() => console.log(`Viewing details for ${account.name}`))} className="hover:underline">
                    {account.name}
                  </button>
                </td>
                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900">${account.total.toLocaleString()}</td>
                <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900">${account.available.toLocaleString()}</td>
              </tr>
            ))}
            {/* Total Row */}
            <tr className="bg-gray-100 font-bold">
              <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900">Total</td>
              <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900">${totalBalanceSum.toLocaleString()}</td>
              <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-900"></td> {/* No available balance for total */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountSummaryContent;
