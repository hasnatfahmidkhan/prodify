import "./navbar.css";
import { NavLink, Link, Navigate } from "react-router";
import { HiMenuAlt3, HiOutlineHome } from "react-icons/hi";
import { FaAppStore, FaGithub } from "react-icons/fa";
import { MdOutlineInstallDesktop } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className={"py-2 bg-base-100 shadow-sm sticky top-0 z-50 text-black"}>
      <div className="navbar md:w-11/12 2xl:w-10/12 mx-auto">
        <div className="navbar-start">
          <Link to="/" className="relative">
            <img
              className="hidden md:inline-block w-10 object-cover px-2 md:px-0"
              src="/prodify-icon.png"
              alt="Prodify logo"
            />
            <span className="text-xl absolute -bottom-2 left-9 font-semibold bg-gradient-to-br from-[#5d26dd] to-[#925fda] bg-clip-text text-transparent baloobhai-font">
              RODIFY
            </span>
          </Link>
        </div>
        {/* desktop menu  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="navlinks flex gap-8 font-medium">
            <li className="text-lg textgra">
              <NavLink to="/" className="flex items-center gap-1 text-gray-600">
                <span className="text-gray-600">
                  <HiOutlineHome />
                </span>{" "}
                Home
              </NavLink>
            </li>
            <li className="text-lg textgra">
              <NavLink
                to="/apps"
                className="flex items-center gap-1 text-gray-600"
              >
                <span className="text-gray-600">
                  <FaAppStore />
                </span>{" "}
                Apps
              </NavLink>
            </li>
            <li className="text-lg textgra">
              <NavLink
                to="/installation"
                className="flex items-center gap-1 text-gray-600"
              >
                <span className="text-gray-600">
                  <MdOutlineInstallDesktop />
                </span>{" "}
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-6">
            <Link
              to={"https://github.com/hasnatfahmidkhan"}
              target="_blank"
              className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-md"
            >
              <span>
                <FaGithub />
              </span>
              Contribute
            </Link>
          </div>

          {/* mobile menu  */}
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <HiMenuAlt3 />
            </div>
            <ul
              tabIndex={0}
              className="navlinks menu menu-lg  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installation">Installation</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
