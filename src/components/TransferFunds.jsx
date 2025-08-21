import React, { useState } from 'react';

function TransferFunds() {
  const [recipientAccount, setRecipientAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    setMessage(`Transfer of $${parseFloat(amount).toLocaleString()} to account ${recipientAccount} initiated.`);
    setRecipientAccount('');
    setAmount('');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-3xl font-bold text-gray-700 mb-6 text-center">Transfer Funds</h3>
      <form onSubmit={handleTransfer} className="space-y-6">
        <div>
          <label htmlFor="recipientAccount" className="block text-gray-700 text-sm font-medium mb-2">
            Recipient Account Number
          </label>
          <input
            type="text"
            id="recipientAccount"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mtbGreen focus:border-mtbGreen transition duration-200 ease-in-out"
            placeholder="e.g., 1234567890"
            value={recipientAccount}
            onChange={(e) => setRecipientAccount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-gray-700 text-sm font-medium mb-2">
            Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mtbGreen focus:border-mtbGreen transition duration-200 ease-in-out"
            placeholder="e.g., 100.00"
            step="0.01"
            min="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        {message && (
          <p className="text-green-600 text-sm text-center font-medium">{message}</p>
        )}
        <button
          type="submit"
          className="w-full bg-mtbGreen text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-mtbGreen-dark focus:outline-none focus:ring-4 focus:ring-mtbGreen focus:ring-opacity-50 transition-transform transform hover:-translate-y-1 active:scale-95 shadow-lg"
        >
          Transfer Now
        </button>
      </form>
    </div>
  );
}

export default TransferFunds;
