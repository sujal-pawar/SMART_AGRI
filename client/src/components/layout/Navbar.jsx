import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedField, setSelectedField] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  
  const handleFieldChange = (e) => {
    const value = e.target.value;
    setSelectedField(value);
    
    if (value === 'new_field') {
      // Logic for creating new field will be added later
      console.log("Create new field");
    }
  };
  
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };
  
  const navigateToClimateAnalysis = () => {
    navigate('/climate');
  };
  
  const navigateToFarmConsole = () => {
    navigate('/farm-console');
  };

  return (
    <div className="bg-white shadow-md">
      <nav className="flex flex-wrap items-center justify-between p-4">
        <span className="text-xl font-bold text-green-800">Smart and Climate Resilient Agriculture</span>
        
        <div className="relative flex items-center border rounded-md px-3 py-2">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search (/) for tools, and more" 
            className="outline-none w-full"
            autoComplete="off"
          />
          <div className="flex space-x-1">
            <button className="text-green-800">
              <FontAwesomeIcon icon={faMicrophone} />
            </button>
            <button className="text-green-800">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            name="Select Field"
            id="selectField"
            className="border rounded px-2 py-1"
            onChange={handleFieldChange}
            value={selectedField}
          >
            <option value="" disabled selected hidden>Select Field</option>
            <option id="create-new-field" className="text-blue-600" value="new_field">Create New Field</option>
            <option value="Farm 1">Farm 1</option>
            <option value="Baramati">Baramati</option>
          </select>
          
          <button 
            onClick={navigateToClimateAnalysis} 
            className="bg-white hover:bg-gray-100 text-green-800 font-semibold py-1 px-3 border rounded"
          >
            Climate Analysis
          </button>
          
          <button 
            onClick={navigateToFarmConsole} 
            className="bg-white hover:bg-gray-100 text-green-800 font-semibold py-1 px-3 border rounded"
          >
            Farm Console
          </button>
        </div>
        
        <input 
          list="location-options" 
          id="location" 
          name="location" 
          placeholder="Location 📍" 
          className="border rounded px-2 py-1"
          value={selectedLocation}
          onChange={handleLocationChange}
        />
        <datalist id="location-options">
          <option value="DIT Pune" />
          <option value="Baramati" />
          <option value="Sterling Castle Bhopal" />
        </datalist>
      </nav>
    </div>
  );
};

export default Navbar;
