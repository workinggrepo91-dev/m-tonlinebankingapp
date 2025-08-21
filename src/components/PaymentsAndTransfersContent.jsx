import React from 'react';

function PaymentsAndTransfersContent({ onInitiateAction }) { // onInitiateAction prop is still present
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md w-full"> {/* Adjusted padding */}
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Payments and Transfers</h3> {/* Adjusted text size */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"> {/* Adjusted gap */}
        {/* Quick Transfer Card */}
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">Quick Transfer</h4>
          <form className="space-y-4">
            <div>
              <label htmlFor="fromAccount" className="block text-sm font-medium text-gray-700">From Account</label>
              <select id="fromAccount" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-mtbGreen focus:border-mtbGreen sm:text-sm rounded-md">
                <option>Checking (5671)</option>
                <option>Savings (5672)</option>
              </select>
            </div>
            <div>
              <label htmlFor="toAccount" className="block text-sm font-medium text-gray-700">To Account</label>
              <input type="text" id="toAccount" placeholder="Recipient Account No." className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-mtbGreen focus:border-mtbGreen" />
            </div>
            <div>
              <label htmlFor="transferAmount" className="block text-sm font-medium text-gray-700">Amount</label>
              <input type="number" id="transferAmount" placeholder="$0.00" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-mtbGreen focus:border-mtbGreen" />
            </div>
            {/* Transfer Funds button triggers Face ID (which now fails) */}
            <button
              type="button"
              onClick={() => onInitiateAction(() => console.log('Simulating Funds Transfer'))}
              className="w-full bg-mtbGreen text-white py-2 px-4 rounded-md hover:bg-mtbGreen-dark transition duration-150"
            >
              Transfer Funds
            </button>
          </form>
        </div>

        {/* Other Payments & Transfers Options - each will trigger Face ID (which now fails) */}
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">Other Options</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating Send Money with Zelle®'))} className="text-mtbGreen hover:underline w-full text-left">
                Send Money with Zelle®
              </button>
            </li>
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating Pay a Bill'))} className="text-mtbGreen hover:underline w-full text-left">
                Pay a Bill
              </button>
            </li>
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating Schedule Payments'))} className="text-mtbGreen hover:underline w-full text-left">
                Schedule Payments
              </button>
            </li>
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating View Recurring Payments'))} className="text-mtbGreen hover:underline w-full text-left">
                View Recurring Payments
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PaymentsAndTransfersContent;