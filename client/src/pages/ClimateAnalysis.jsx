import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCloudSunRain, 
  faDroplet, 
  faCarrot, 
  faFire, 
  faCloudRain, 
  faSeedling 
} from '@fortawesome/free-solid-svg-icons';

const ClimateAnalysis = () => {
  const [activeTab, setActiveTab] = useState('weather');
  
  const renderContent = () => {
    switch(activeTab) {
      case 'weather':
        return (
          <div className="Analytics">
            <div className="title flex items-center mb-4">
              <FontAwesomeIcon icon={faCloudSunRain} className="text-2xl text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold">Weather Forecast</h2>
              <div className="ml-auto flex items-center">
                <p className="mr-2">Interval:</p>
                <input type="date" id="startDate" className="border rounded px-2 py-1 mr-2" />
                <p className="mr-2">to</p>
                <input type="date" id="endDate" className="border rounded px-2 py-1" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              {/* Weather forecast content will be added here */}
              <p>Weather forecast visualization and data will be displayed here</p>
            </div>
          </div>
        );
      case 'water':
        return (
          <div className="Analytics">
            <div className="title flex items-center mb-4">
              <FontAwesomeIcon icon={faDroplet} className="text-2xl text-blue-500 mr-2" />
              <h2 className="text-2xl font-bold">Water & Irrigation</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              {/* Water & Irrigation content will be added here */}
              <p>Water and irrigation data will be displayed here</p>
            </div>
          </div>
        );
      case 'vegetation':
        return (
          <div className="Analytics">
            <div className="title flex items-center mb-4">
              <FontAwesomeIcon icon={faCarrot} className="text-2xl text-green-500 mr-2" />
              <h2 className="text-2xl font-bold">Vegetation & Crop Health</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              {/* Vegetation content will be added here */}
              <p>Vegetation and crop health data will be displayed here</p>
            </div>
          </div>
        );
      default:
        return <div>Select an option from above</div>;
    }
  };
  
  return (
    <div>
      <div className="options flex flex-wrap gap-2 mb-6">
        <button 
          onClick={() => setActiveTab('weather')} 
          className={`flex items-center px-4 py-2 rounded-md ${activeTab === 'weather' ? 'bg-yellow-500' : 'bg-yellow-400'} text-white font-medium`}
        >
          <FontAwesomeIcon icon={faCloudSunRain} className="mr-2" />
          Weather Forecast
        </button>
        
        <button 
          onClick={() => setActiveTab('water')} 
          className={`flex items-center px-4 py-2 rounded-md ${activeTab === 'water' ? 'bg-blue-600' : 'bg-blue-500'} text-white font-medium`}
        >
          <FontAwesomeIcon icon={faDroplet} className="mr-2" />
          Water & Irrigation
        </button>
        
        <button 
          onClick={() => setActiveTab('vegetation')} 
          className={`flex items-center px-4 py-2 rounded-md ${activeTab === 'vegetation' ? 'bg-green-600' : 'bg-green-500'} text-white font-medium`}
        >
          <FontAwesomeIcon icon={faCarrot} className="mr-2" />
          Vegetation & Crop Health
        </button>
        
        <button 
          onClick={() => setActiveTab('fire')} 
          className={`flex items-center px-4 py-2 rounded-md ${activeTab === 'fire' ? 'bg-red-600' : 'bg-red-500'} text-white font-medium`}
        >
          <FontAwesomeIcon icon={faFire} className="mr-2" />
          Fire & Hazards
        </button>
        
        <button 
          onClick={() => setActiveTab('rain')} 
          className={`flex items-center px-4 py-2 rounded-md ${activeTab === 'rain' ? 'bg-blue-700' : 'bg-blue-600'} text-white font-medium`}
        >
          <FontAwesomeIcon icon={faCloudRain} className="mr-2" />
          Rainfall & Monsoon
        </button>
        
        <button 
          onClick={() => setActiveTab('soil')} 
          className={`flex items-center px-4 py-2 rounded-md ${activeTab === 'soil' ? 'bg-yellow-700' : 'bg-yellow-600'} text-white font-medium`}
        >
          <FontAwesomeIcon icon={faSeedling} className="mr-2" />
          Soil & Land
        </button>
        
        <button className="flex items-center px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-medium ml-auto">
          <img src="/warning.png" alt="Alerts" className="w-5 h-5 mr-2" />
          Alerts
        </button>
      </div>
      
      {renderContent()}
    </div>
  );
};

export default ClimateAnalysis;
