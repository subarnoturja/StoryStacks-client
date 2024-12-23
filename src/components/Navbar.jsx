import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { user, userLogout } = useContext(AuthContext);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if the page is scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  const navlinks = (
    <>
      <li>
        <Link className="font-semibold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/shop">
          Shop
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/admin/dashboard">
          Sell Your Book
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/blog">
          Blog
        </Link>
      </li>
    </>
  );

  return (
    <div className="lg:mb-32 container">
      <div
        className={`navbar rounded-full fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-blue-600/10 backdrop-blur-lg  shadow-lg"
            : "bg-transparent"
        }`}
      >
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
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">StoryStacks</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <>
              <button
                onClick={handleSignOut}
                className="btn lg:btn-outline btn-info rounded-full"
              >
                logout
              </button>
            </>
          ) : (
            <>
              <div>
                <Link
                  to="/login"
                  className="btn lg:btn-outline btn-info rounded-full"
                >
                  Sign In
                </Link>
              </div>
              <div>
                <Link
                  to="/sign-up"
                  className="hidden lg:btn lg:btn-info lg:rounded-full"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
