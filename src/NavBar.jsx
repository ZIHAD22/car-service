import CustomNavLink from "./Shared/CustomNavLink/CustomNavLink";
import logo from "../src/assets/logo.svg";

const NavBar = () => {
  const menuItem = (
    <>
      <li className="mx-2">
        <CustomNavLink to="/">Home</CustomNavLink>
      </li>
      <li className="mx-2">
        <CustomNavLink to="/">About</CustomNavLink>
      </li>
      <li className="mx-2">
        <CustomNavLink to="/">Service</CustomNavLink>
      </li>
      <li className="mx-2">
        <CustomNavLink to="/">Blog</CustomNavLink>
      </li>
      <li className="mx-2">
        <CustomNavLink to="/">Contact</CustomNavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            {menuItem}
          </ul>
        </div>
        <CustomNavLink to="/">
          <div className="w-[70%]">
            <img src={logo} alt="" />
          </div>
        </CustomNavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 font-bold">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline border-main text-main">Appointment</a>
      </div>
    </div>
  );
};

export default NavBar;
