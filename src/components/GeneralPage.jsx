import { FaInfoCircle, FaCog, FaFileAlt, FaPhoneAlt } from "react-icons/fa";

export default function GeneralPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-3">General Information</h2>
      <p className="text-gray-600 mb-6">
        This page contains general details about the system, company and configurations.
      </p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        {/* About Card */}
        <div className="border rounded-lg p-4 flex items-start gap-3 hover:bg-gray-50 transition">
          <FaInfoCircle className="text-blue-600 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">About the Application</h3>
            <p className="text-gray-600 text-sm mt-1">
              This management panel helps track inventory, users, and business operations.
            </p>
          </div>
        </div>

        {/* Settings */}
        <div className="border rounded-lg p-4 flex items-start gap-3 hover:bg-gray-50 transition">
          <FaCog className="text-green-600 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">System Settings</h3>
            <p className="text-gray-600 text-sm mt-1">
              Configure global options and system preferences.
            </p>
          </div>
        </div>

        {/* Terms */}
        <div className="border rounded-lg p-4 flex items-start gap-3 hover:bg-gray-50 transition">
          <FaFileAlt className="text-purple-600 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">Privacy & Policy</h3>
            <p className="text-gray-600 text-sm mt-1">
              Read terms, conditions, and data usage policies.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="border rounded-lg p-4 flex items-start gap-3 hover:bg-gray-50 transition">
          <FaPhoneAlt className="text-red-600 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">Support & Help</h3>
            <p className="text-gray-600 text-sm mt-1">
              Need help? Contact support or check documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="p-4 bg-gray-50 border rounded text-center">
        <p className="text-gray-700 text-sm">
          Version: <span className="font-semibold">1.0.0</span> — Last Updated: <span className="font-semibold">Dec 2025</span>
        </p>
      </div>
    </div>
  );
}
