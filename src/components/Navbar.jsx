
import { FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { use } from "react";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
        navigate("/login")
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50 px-4 md:px-8 lg:px-12">
  
      <div className="navbar-start">
   
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-3 shadow-lg border"
          >
            <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys-list"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              Popular-Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
             My-Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-model"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
             My-Model
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-download"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
             Download
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-product"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              Add-Product
            </NavLink>
          </li>
          </ul>
        </div>

   
        <Link
          to="/"
          className="flex items-center gap-1 font-bold text-[#5b24db] text-lg sm:text-2xl md:text-3xl lg:text-4xl"
        >
          Kidstuff
        </Link>
      </div>

  
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys-list"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              Popular-Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
             My-Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-model"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
             My-Model
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-download"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
             Download
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-product"
              className={({ isActive }) =>
                `font-semibold text-base transition-colors duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              Add-Product
            </NavLink>
          </li>
        </ul>
      </nav>

    
      <div className="navbar-end flex items-center gap-2 md:gap-3">
        <div className="hidden md:block text-xs lg:text-sm text-gray-600 truncate max-w-[120px]">
          {user?.email}
        </div>

        {user && (
          <div className="relative group">
            <div className="avatar">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-purple-400 ring-offset-2 ring-offset-white cursor-pointer">
                {user.photoURL ? (
                  <img 
                    src={user?.photoURL}
                    alt="User"
                    className="rounded-full object-cover"
                  /> 
                ) 
                : (
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 text-white">
                    <FaUser size={16} />
                  </div>
                )}
              </div>
            </div>

            {/* Tooltip: Shows on Hover */}
            <div className="absolute right-0 top-full mt-2 w-max px-3 py-2 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50 shadow-lg">
              {user.displayName || user.email} 
              <div className="absolute -top-1 right-3 w-2 h-2 bg-gray-800 rotate-45"></div>
            </div>
          </div>
        )}

        
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-sm md:btn-md btn-secondary text-white font-medium"
          >
            LogOut
          </button>
        ) : (
          <Link to="/login" className="btn btn-sm md:btn-md btn-secondary text-white font-medium">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;