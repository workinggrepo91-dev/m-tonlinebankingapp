import React from 'react';

function SettingsAndSupportContent({ onInitiateAction }) { // onInitiateAction prop is still present
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md w-full"> {/* Adjusted padding */}
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Settings and Support</h3> {/* Adjusted text size */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"> {/* Adjusted gap */}
        {/* Settings Section - each link will trigger Face ID (which now fails) */}
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">Account Settings</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating Change User ID / Passcode'))} className="text-mtbGreen hover:underline w-full text-left">
                Change User ID / Passcode
              </button>
            </li>
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating Update Contact Information'))} className="text-mtbGreen hover:underline w-full text-left">
                Update Contact Information
              </button>
            </li>
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating Security Preferences'))} className="text-mtbGreen hover:underline w-full text-left">
                Security Preferences
              </button>
            </li>
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating Notification Settings'))} className="text-mtbGreen hover:underline w-full text-left">
                Notification Settings
              </button>
            </li>
          </ul>
        </div>

        {/* Support Section - each link will trigger Face ID (which now fails) */}
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">Help and Support</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating FAQs'))} className="text-mtbGreen hover:underline w-full text-left">
                FAQs
              </button>
            </li>
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating Contact Us'))} className="text-mtbGreen hover:underline w-full text-left">
                Contact Us
              </button>
            </li>
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating Find a Branch/ATM'))} className="text-mtbGreen hover:underline w-full text-left">
                Find a Branch/ATM
              </button>
            </li>
            <li>
              <button onClick={() => onInitiateAction(() => console.log('Simulating Report Lost/Stolen Card'))} className="text-mtbGreen hover:underline w-full text-left">
                Report Lost/Stolen Card
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SettingsAndSupportContent;