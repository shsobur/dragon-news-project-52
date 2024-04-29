import "../../Style/Navebar.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navebar = () => {
  return (
    <div>
      <div className="navbar pb-16 bg-base-100">
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
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg text-[#706f6f] px-1">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Creer</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="text-5xl pr-2 cursor-pointer">
            <CgProfile />
          </div>
          <Link className="btn rounded-none px-8 text-xl text-white hover:bg-[#403f3f] bg-[#403f3f]">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
