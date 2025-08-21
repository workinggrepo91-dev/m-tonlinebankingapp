import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardNav from './DashboardNav';
import AccountSummaryContent from './AccountSummaryContent';
import PaymentsAndTransfersContent from './PaymentsAndTransfersContent';
import ServicesContent from './ServicesContent';
import SettingsAndSupportContent from './SettingsAndSupportContent';
import RightSidebar from './RightSidebar';
import FaceIdVerificationModal from './FaceIdVerificationModal';

function DashboardPage({ onLogout }) {
  const [activeDashboardSection, setActiveDashboardSection] = useState('accounts');
  const [showFaceIdModal, setShowFaceIdModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null); // Stores the function to run after Face ID

  // Function to initiate Face ID verification before executing an action
  const handleInitiateActionWithFaceId = (actionCallback) => {
    setPendingAction(() => actionCallback); // Store the callback
    setShowFaceIdModal(true); // Open the Face ID modal
  };

  // Callback for successful Face ID verification (though it will now always fail)
  const handleFaceIdSuccess = () => {
    // This part of the code won't be reached as isSuccess is false in modal
    if (pendingAction) {
      pendingAction(); // Execute the stored action
    }
    setShowFaceIdModal(false); // Close the modal
    setPendingAction(null); // Clear the pending action
  };

  // Callback for failed Face ID verification
  const handleFaceIdFailure = () => {
    console.error("Face ID verification failed for the requested action.");
    // The modal itself will show a failure message; no need to clear pendingAction immediately if user needs to retry
  };

  // Function to render the correct main content component based on activeDashboardSection
  const renderMainContent = () => {
    switch (activeDashboardSection) {
      case 'accounts':
        return <AccountSummaryContent onInitiateAction={handleInitiateActionWithFaceId} />;
      case 'payments':
        return <PaymentsAndTransfersContent onInitiateAction={handleInitiateActionWithFaceId} />;
      case 'services':
        return <ServicesContent onInitiateAction={handleInitiateActionWithFaceId} />;
      case 'settings':
        return <SettingsAndSupportContent onInitiateAction={handleInitiateActionWithFaceId} />;
      default:
        return <AccountSummaryContent onInitiateAction={handleInitiateActionWithFaceId} />; // Fallback
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      {/* Top Header - Logout button no longer triggers Face ID, Messages does */}
      <DashboardHeader onLogout={onLogout} onInitiateAction={handleInitiateActionWithFaceId} /> {/* Passed onInitiateAction */}

      {/* Secondary Navigation Bar - DOES NOT trigger Face ID */}
      <DashboardNav onSelectSection={setActiveDashboardSection} activeSection={activeDashboardSection} />

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dynamic Main Content Section */}
        <div className="md:col-span-2">
          {renderMainContent()}
        </div>

        {/* Right Sidebar - actions here trigger Face ID */}
        <aside className="md:col-span-1">
          <RightSidebar onInitiateAction={handleInitiateActionWithFaceId} />
        </aside>
      </main>

      {/* Face ID Verification Modal */}
      <FaceIdVerificationModal
        isOpen={showFaceIdModal}
        onClose={() => setShowFaceIdModal(false)}
        onVerifySuccess={handleFaceIdSuccess}
        onVerifyFailure={handleFaceIdFailure}
      />
    </div>
  );
}

export default DashboardPage;