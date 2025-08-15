import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMicrophone, 
  faMagnifyingGlass, 
  faBars, 
  faXmark,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedField, setSelectedField, selectedLocation, setSelectedLocation, fields, addField } = useAppContext();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewFieldDialog, setShowNewFieldDialog] = useState(false);
  const [newFieldName, setNewFieldName] = useState('');
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  const handleFieldChange = (e) => {
    const value = e.target.value;
    
    if (value === 'new_field') {
      setShowNewFieldDialog(true);
    } else {
      setSelectedField(value);
    }
  };
  
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };
  
  const handleNewFieldSubmit = (e) => {
    e.preventDefault();
    
    if (newFieldName.trim()) {
      addField(newFieldName.trim());
      setSelectedField(newFieldName.trim());
      setNewFieldName('');
      setShowNewFieldDialog(false);
    }
  };
  
  const navigateToClimateAnalysis = () => {
    navigate('/climate');
  };
  
  const navigateToFarmConsole = () => {
    navigate('/farm-console');
  };

  return (
    <div className="z-100 fixed w-full bg-white shadow-md ">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="text-xl font-bold text-green-800 whitespace-nowrap">
            Smart Agriculture
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:bg-gray-100 p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 flex-grow mx-4">
            {/* Search Bar */}
            <div className="flex-grow max-w-md">
              <form onSubmit={handleSearch} className="relative flex items-center border rounded-md px-3 py-1.5">
                <input 
                  type="text" 
                  id="searchInput" 
                  placeholder="Search (/) for tools, and more" 
                  className="outline-none w-full text-sm"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex space-x-1 text-sm">
                  <button type="button" className="text-green-700 hover:text-green-900">
                    <FontAwesomeIcon icon={faMicrophone} />
                  </button>
                  <button type="submit" className="text-green-700 hover:text-green-900">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
              </form>
            </div>
            
            {/* Field Selection */}
            <div className="relative">
              <select
                name="Select Field"
                id="selectField"
                className="border rounded px-3 py-1.5 bg-white text-gray-700 appearance-none pr-8 cursor-pointer"
                onChange={handleFieldChange}
                value={selectedField || ''}
              >
                <option value="" disabled hidden>Select Field</option>
                <option id="create-new-field" className="text-blue-600" value="new_field">Create New Field</option>
                {fields.map(field => (
                  <option key={field.id} value={field.name}>{field.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={navigateToClimateAnalysis} 
              className={`bg-white border rounded px-3 py-1.5 font-medium transition-colors ${location.pathname === '/climate' ? 'bg-green-100 text-green-800 border-green-500' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Climate Analysis
            </button>
            
            <button 
              onClick={navigateToFarmConsole} 
              className={`bg-white border rounded px-3 py-1.5 font-medium transition-colors ${location.pathname === '/farm-console' ? 'bg-green-100 text-green-800 border-green-500' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Farm Console
            </button>
          </div>
          
          {/* Location Selector - Desktop */}
          <div className="hidden md:block relative">
            <input 
              list="location-options" 
              id="location" 
              name="location" 
              placeholder="Location 📍" 
              className="border rounded px-3 py-1.5"
              value={selectedLocation}
              onChange={handleLocationChange}
            />
            <datalist id="location-options">
              <option value="DIT Pune" />
              <option value="Baramati" />
              <option value="Sterling Castle Bhopal" />
            </datalist>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 py-3 border-t">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-3">
              <div className="flex border rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 px-3 py-2 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="bg-green-700 text-white px-3">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>
            
            {/* Mobile Field Selection */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Field</label>
              <select
                className="w-full border rounded px-3 py-2"
                onChange={handleFieldChange}
                value={selectedField || ''}
              >
                <option value="" disabled hidden>Select Field</option>
                <option value="new_field">Create New Field</option>
                {fields.map(field => (
                  <option key={field.id} value={field.name}>{field.name}</option>
                ))}
              </select>
            </div>
            
            {/* Mobile Location */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input 
                list="mobile-location-options" 
                className="w-full border rounded px-3 py-2"
                placeholder="Select Location"
                value={selectedLocation}
                onChange={handleLocationChange}
              />
              <datalist id="mobile-location-options">
                <option value="DIT Pune" />
                <option value="Baramati" />
                <option value="Sterling Castle Bhopal" />
              </datalist>
            </div>
            
            {/* Mobile Navigation Buttons */}
            <div className="space-y-2">
              <button 
                onClick={navigateToClimateAnalysis}
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 block"
              >
                Climate Analysis
              </button>
              <button 
                onClick={navigateToFarmConsole}
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 block"
              >
                Farm Console
              </button>
              <Link 
                to="/reports"
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 block"
              >
                Reports
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      {/* New Field Dialog */}
      {showNewFieldDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Create New Field</h3>
            <form onSubmit={handleNewFieldSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Field Name</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter field name"
                  value={newFieldName}
                  onChange={(e) => setNewFieldName(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                  onClick={() => setShowNewFieldDialog(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Create Field
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
