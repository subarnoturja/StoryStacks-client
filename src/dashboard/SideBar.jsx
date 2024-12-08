import {
  MdOutlineDriveFolderUpload,
  MdOutlineLogout,
  MdOutlineManageHistory,
} from "react-icons/md";
import profilePicture from "../assets/profile.jpg";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const Sidebar = () => {

  const { userLogout } = useContext(AuthContext);

  // Logout Handling
  const handleSignOut = () => {
    userLogout()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="h-full p-3 space-y-2 w-60 dark:bg-gray-50 dark:text-gray-800">
      <div className="flex items-center p-2 space-x-4">
        <img
          src={profilePicture}
          alt=""
          className="w-12 h-12 rounded-full dark:bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
          <span className="flex items-center space-x-1">
            <p className="text-xs hover:underline dark:text-gray-600">Admin</p>
          </span>
        </div>
      </div>
      <div className="divide-y dark:divide-gray-300">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li>
            <Link to="/admin/dashboard">
              <a
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <LuLayoutDashboard size={24} />
                <span>Dashboard</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to='/admin/dashboard/upload'>
            <a
              rel="noopener noreferrer"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <MdOutlineDriveFolderUpload size={24} />
              <span>Upload Books</span>
            </a>
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard/manage">
            <a
              rel="noopener noreferrer"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <MdOutlineManageHistory size={24} />
              <span>Manage Books</span>
            </a>
            </Link>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <FiUserCheck size={26} />
              <span>Users</span>
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <AiOutlineProduct size={26} />
              <span>Products</span>
            </a>
          </li>
        </ul>
        <ul className="pt-4 pb-2 space-y-1 text-sm">
          
          <li>
            <button onClick={handleSignOut}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <MdOutlineLogout size={26} />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
