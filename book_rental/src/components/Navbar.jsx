import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <header>
      <div className="navbar">
        <h1>Book World</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/discussion">Discussion</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
            <li>
              {isAuthenticated ? (
                <button onClick={() => logout({ returnTo: window.location.origin })}>
                  Logout
                </button>
              ) : (
                <button onClick={loginWithRedirect}>Login</button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
