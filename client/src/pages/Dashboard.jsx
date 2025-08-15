import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTractor } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <FontAwesomeIcon icon={faTractor} className="text-2xl text-green-700 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard cards will be added here */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Farm Health</h3>
          <p className="text-gray-600">Overview of your farm's health metrics</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Weather Forecast</h3>
          <p className="text-gray-600">5-day weather prediction</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Crop Health</h3>
          <p className="text-gray-600">Status of current crops</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
