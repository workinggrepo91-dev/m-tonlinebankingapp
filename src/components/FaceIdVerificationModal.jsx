import React, { useState, useEffect } from 'react';

function FaceIdVerificationModal({ isOpen, onClose, onVerifySuccess, onVerifyFailure }) {
  const [status, setStatus] = useState('Verifying...'); // 'Verifying...', 'Success!', 'Failed!'
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setStatus('Verifying...');
      setShowSpinner(true);
      // Simulate Face ID verification delay
      const verificationTimeout = setTimeout(() => {
        const isSuccess = false; // <<< ALWAYS FAILS now
        if (isSuccess) {
          setStatus('Verification Successful!');
          setShowSpinner(false);
          setTimeout(() => {
            onVerifySuccess(); // Trigger the success callback
            onClose(); // Close the modal
          }, 1000); // Keep success message visible briefly
        } else {
          setStatus('Verification Failed. Please try again.');
          setShowSpinner(false);
          onVerifyFailure(); // Trigger the failure callback
        }
      }, 2000); // Simulate 2-second verification process

      return () => clearTimeout(verificationTimeout); // Cleanup timeout on unmount or if modal closes
    }
  }, [isOpen, onVerifySuccess, onVerifyFailure, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Face ID Verification</h3>
        
        {showSpinner && (
          <div className="flex justify-center items-center mb-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mtbGreen"></div>
          </div>
        )}

        <p className={`text-lg ${status.includes('Successful') ? 'text-green-600' : status.includes('Failed') ? 'text-red-600' : 'text-gray-700'} mb-6`}>
          {status}
        </p>

        {!showSpinner && (status.includes('Failed') || status.includes('Successful')) && (
          <button
            onClick={onClose}
            className="bg-mtbGreen text-white py-2 px-6 rounded-lg font-semibold hover:bg-mtbGreen-dark transition duration-150"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
}

export default FaceIdVerificationModal;