import { NavLink } from 'react-router-dom';

const navLinks = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) => 
          isActive ? "text-blue-600 font-bold" : "text-gray-600"
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/Crush-Confession-AI"
        className={({ isActive }) => 
          isActive ? "text-blue-600 font-bold" : "text-gray-600"
        }
      >
        AI
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/human"
        className={({ isActive }) => 
          isActive ? "text-blue-600 font-bold" : "text-gray-600"
        }
      >
        Human
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/coffee"
        className={({ isActive }) => 
          isActive ? "text-blue-600 font-bold" : "text-gray-600"
        }
      >
        Buy Us a Coffee
      </NavLink>
    </li>
  </>
);

export default function Navbar() {
  return (
    <div className="navbar bg-opacity-50 fixed z-10 text-black max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Conf</a>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End (Action Button) */}
      <div className="navbar-end">
        <NavLink to="/get-started" className="btn">
          Get Started
        </NavLink>
      </div>
    </div>
  );
}
