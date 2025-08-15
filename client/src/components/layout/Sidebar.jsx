import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTractor, 
  faDatabase, 
  faArrowRightFromBracket,
  faChartLine,
  faLeaf,
  faCloudSunRain,
  faDroplet,
  faCog,
  faAngleRight,
  faAngleDown,
  faUser,
  faUserGear
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState({
    analytics: false,
    settings: true
  });

  const toggleCollapse = (section) => {
    setCollapsed({
      ...collapsed,
      [section]: !collapsed[section]
    });
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-white min-h-full shadow-md h-screen w-64 fixed left-0 top-0 pt-16 overflow-y-auto">
      <div className="py-4">
        {/* User Info */}
        <div className="px-4 py-3 mb-2 border-b">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-green-600" />
            </div>
            <div className="ml-3">
              <div className="font-medium">Farm Manager</div>
              <div className="text-xs text-gray-500">admin@example.com</div>
            </div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <ul className="space-y-1 px-2">
          <li>
            <Link
              to="/"
              className={`flex items-center px-4 py-2.5 rounded-md transition-colors ${
                isActive('/') 
                  ? 'bg-green-100 text-green-800' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FontAwesomeIcon icon={faTractor} className="w-5 h-5 mr-3" />
              <span className="font-medium">Dashboard</span>
            </Link>
          </li>
          
          {/* Analytics Section */}
          <li>
            <button
              onClick={() => toggleCollapse('analytics')}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-md transition-colors text-gray-700 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faChartLine} className="w-5 h-5 mr-3" />
                <span className="font-medium">Analytics</span>
              </div>
              <FontAwesomeIcon icon={collapsed.analytics ? faAngleRight : faAngleDown} className="w-4 h-4" />
            </button>
            
            {!collapsed.analytics && (
              <ul className="ml-4 pl-4 border-l space-y-1 mt-1">
                <li>
                  <Link
                    to="/climate"
                    className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                      isActive('/climate') 
                        ? 'bg-green-100 text-green-800' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FontAwesomeIcon icon={faCloudSunRain} className="w-4 h-4 mr-3" />
                    <span>Climate Analysis</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vegetation"
                    className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                      isActive('/vegetation') 
                        ? 'bg-green-100 text-green-800' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FontAwesomeIcon icon={faLeaf} className="w-4 h-4 mr-3" />
                    <span>Vegetation Health</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/water"
                    className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                      isActive('/water') 
                        ? 'bg-green-100 text-green-800' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FontAwesomeIcon icon={faDroplet} className="w-4 h-4 mr-3" />
                    <span>Water Analysis</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          
          <li>
            <Link
              to="/farm-console"
              className={`flex items-center px-4 py-2.5 rounded-md transition-colors ${
                isActive('/farm-console') 
                  ? 'bg-green-100 text-green-800' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FontAwesomeIcon icon={faUserGear} className="w-5 h-5 mr-3" />
              <span className="font-medium">Farm Console</span>
            </Link>
          </li>
          
          <li>
            <Link
              to="/reports"
              className={`flex items-center px-4 py-2.5 rounded-md transition-colors ${
                isActive('/reports') 
                  ? 'bg-green-100 text-green-800' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FontAwesomeIcon icon={faDatabase} className="w-5 h-5 mr-3" />
              <span className="font-medium">Reports</span>
            </Link>
          </li>
          
          {/* Settings Section */}
          <li>
            <button
              onClick={() => toggleCollapse('settings')}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-md transition-colors text-gray-700 hover:bg-gray-100"
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCog} className="w-5 h-5 mr-3" />
                <span className="font-medium">Settings</span>
              </div>
              <FontAwesomeIcon icon={collapsed.settings ? faAngleRight : faAngleDown} className="w-4 h-4" />
            </button>
            
            {!collapsed.settings && (
              <ul className="ml-4 pl-4 border-l space-y-1 mt-1">
                <li>
                  <Link
                    to="/settings/profile"
                    className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                      isActive('/settings/profile') 
                        ? 'bg-green-100 text-green-800' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings/preferences"
                    className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                      isActive('/settings/preferences') 
                        ? 'bg-green-100 text-green-800' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>Preferences</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        
        {/* Bottom Link */}
        <div className="border-t mt-6 pt-4 px-2">
          <Link
            to="/logout"
            className="flex items-center px-4 py-2.5 rounded-md transition-colors text-gray-700 hover:bg-red-50 hover:text-red-700"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-5 h-5 mr-3" />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
