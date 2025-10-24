import React, { use } from "react";
import logo from "../assets/newLogo.png";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { FaHome } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { BiLogoBlogger } from "react-icons/bi";
import { MdPermContactCalendar } from "react-icons/md";
import { MdOutlineTrackChanges } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvider";
import { MdOutlineLogin } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully 👋", {
          theme: "colored",
        });
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm max-w-11/12 mx-auto px-6 rounded-2xl">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/" className="text-[#003049]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/livetrack">Track Order</Link>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <img
            className="w-[80px] h-[50px] object-cover bg-white"
            src={logo}
            alt="Logo"
          />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">
            <li className="text-[#313638] hover:text-[#ebc034]">
              <Link to="/">
                <FaHome />
                Home
              </Link>
            </li>
            <li className="text-[#313638] hover:text-[#ebc034]">
              <Link to="/aboutus">
                <IoPeople />
                About Us
              </Link>
            </li>
            <li className="text-[#313638] hover:text-[#ebc034]">
              <Link to="/blog">
                <BiLogoBlogger />
                Blog
              </Link>
            </li>
            <li className="text-[#313638] hover:text-[#ebc034]">
              <Link to="/contact">
                <MdPermContactCalendar />
                Contact
              </Link>
            </li>
            <li className="text-[#313638] hover:text-[#ebc034]">
              <Link to="/livetrack">
                <MdOutlineTrackChanges />
                Track Order
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-[#ef233c] text-[#edf2f4]"
            >
              <RiLogoutBoxLine />
              LogOut
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn rounded-xl bg-[#1976d2] text-[#edf2f4]"
            >
              <MdOutlineLogin />
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
