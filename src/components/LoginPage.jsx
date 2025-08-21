import React, { useState } from 'react';
import bankLogo from '../images/logo.png'; // Path to your M&T Bank logo PNG

function LoginPage({ onLoginSuccess }) {
  const [userId, setUserId] = useState('');
  const [passcode, setPasscode] = useState('');
  const [rememberUserId, setRememberUserId] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading spinner
  const [loginSuccess, setLoginSuccess] = useState(false); // New state for login success message

  const DEMO_USER_ID = 'caterina1234'; // Updated User ID
  const DEMO_PASSCODE = 'Tracy5115'; // Updated Passcode

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoginSuccess(false); // Reset success message
    setIsLoading(true); // Show spinner

    // Simulate network request or authentication delay
    setTimeout(() => {
      setIsLoading(false); // Hide spinner

      if (userId === DEMO_USER_ID && passcode === DEMO_PASSCODE) {
        setLoginSuccess(true); // Show success message
        // Delay navigation to allow user to see the success message
        setTimeout(() => {
          onLoginSuccess();
        }, 1000); // Wait 1 second before redirecting
      } else {
        setError('Invalid User ID or Passcode.'); // Display error message
      }
    }, 1500); // Simulate 1.5 second login process
  };

  const FdicLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="inline-block h-4 w-4 text-gray-100 mr-1"
    >
      <path
        fillRule="evenodd"
        d="M11.47 2.47a.75.75 0 0 0-1.06 0L2.47 9.47a.75.75 0 0 0 0 1.06l7.94 7.94a.75.75 0 0 0 1.06 0l7.94-7.94a.75.75 0 0 0 0-1.06l-7.94-7.94Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header Section */}
      <header className="bg-mtbGreen text-white relative shadow-md">
        <div className="mx-auto flex-col items-center relative z-10">
          {/* FDIC Info */}
          <div className="text-xs flex items-center bg-green-600 px-4 py-2">
            <FdicLogo /> FDIC-insured • Backed by the full faith and credit of the U.S. Government
          </div>
        </div>
        {/* M&T Bank Logo & Text - Centered */}
        <div className="text-center flex flex-col items-center justify-center py-2">
            <img src={bankLogo} alt="M&T Bank Logo" className="h-24 w-auto mb-0" />
        </div>
        {/* Orange Divider */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-mtbOrange"></div>
      </header>

      {/* Main Content (Login Form) - Centered */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-mtbGreen mb-2 text-center">Log In to Online Banking</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">For Personal and Business Accounts</p>

          <form onSubmit={handleLogin} className="w-full space-y-5">
            <div>
              <label htmlFor="userId" className="block text-gray-700 text-sm font-semibold mb-2">
                User ID
              </label>
              <input
                type="text"
                id="userId"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-mtbGreen focus:border-mtbGreen transition duration-200 ease-in-out placeholder-gray-400"
                placeholder="Enter your User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                disabled={isLoading} 
              />
            </div>
            <div>
              <label htmlFor="passcode" className="block text-gray-700 text-sm font-semibold mb-2">
                Passcode
              </label>
              <input
                type="password"
                id="passcode"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-mtbGreen focus:border-mtbGreen transition duration-200 ease-in-out placeholder-gray-400"
                placeholder="Enter your Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                required
                disabled={isLoading} 
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="rememberUserId"
                type="checkbox"
                className="h-4 w-4 text-mtbGreen focus:ring-mtbGreen border-gray-300 rounded"
                checked={rememberUserId}
                onChange={(e) => setRememberUserId(e.target.checked)}
                disabled={isLoading} 
              />
              <label htmlFor="rememberUserId" className="ml-2 block text-sm text-gray-900">
                Remember User ID
              </label>
            </div>

            {/* Display loading spinner */}
            {isLoading && (
              <div className="flex justify-center items-center mt-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-mtbGreen"></div>
                <p className="ml-3 text-mtbGreen font-semibold">Logging in...</p>
              </div>
            )}

            {/* Display success message */}
            {loginSuccess && (
              <p className="text-green-600 text-sm text-center font-medium mt-4">Login Successful!</p>
            )}

            {/* Display error message */}
            {error && !isLoading && ( // Show error only if not loading
              <p className="text-red-600 text-sm text-center font-medium mt-4">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-mtbGreen text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-mtbGreen-dark focus:outline-none focus:ring-4 focus:ring-mtbGreen focus:ring-opacity-50 transition-transform transform hover:-translate-y-1 active:scale-95 shadow-lg"
              disabled={isLoading} // Disable button during loading
            >
              LOG IN
            </button>
          </form>

          <div className="mt-6 text-center space-y-3">
            <a href="#" className="block text-mtbGreen hover:underline font-semibold text-sm">
              HELP WITH USER ID OR PASSCODE
            </a>
            <a href="#" className="block text-mtbGreen hover:underline font-semibold text-sm">
              ENROLL NOW
            </a>
          </div>
        </div>
      </main>

      {/* Footer/Disclaimer */}
      <footer className="bg-gray-100 text-gray-500 text-xs text-center p-4">
        Unauthorized access is prohibited. Usage may be monitored.
      </footer>
    </div>
  );
}

export default LoginPage;