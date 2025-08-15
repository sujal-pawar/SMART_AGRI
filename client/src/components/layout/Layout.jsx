import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed bottom-4 right-4 z-50 bg-green-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
      >
        <FontAwesomeIcon icon={sidebarOpen ? faXmark : faBars} className="text-xl" />
      </button>
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      <div className="flex flex-1">
        {/* Sidebar - hidden on mobile unless toggled */}
        <div className={`md:relative fixed inset-y-0 left-0 z-40 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <Sidebar />
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-4 md:p-6 md:ml-64 md:mt-0 mt-16">
            <div className="container mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
