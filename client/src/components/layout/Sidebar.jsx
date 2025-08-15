import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTractor, faDatabase, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-white shadow-md h-screen w-64 fixed left-0 top-16">
      <ul className="py-4">
        <div className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-800"
            >
              <FontAwesomeIcon icon={faTractor} className="mr-3" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-800"
            >
              <FontAwesomeIcon icon={faDatabase} className="mr-3" />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-800"
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-3" />
              <span>Logout</span>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
