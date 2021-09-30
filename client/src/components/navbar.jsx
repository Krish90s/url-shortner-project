import React from "react";
import { NavLink, Link } from "react-router-dom";
import undraw_profile_1 from "../img/undraw_profile_1.svg";

const Topbar = ({ user }) => {
  return (
    <nav className="navbar navbar-light bg-light w-100 position-absolute Topbar shadow border-bottom Topbar">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand mb-0 h1 ms-3"
          to="/dashboard/urlshortner"
        >
          Url Shortner
        </NavLink>
        <div className="topbar-divider d-none d-sm-block" />
        {user && (
          <div className="flex-shrink-0 dropdown profile-menu me-3">
            <a
              href="#"
              className="d-block link-light text-decoration-none"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="text-dark me-2">{user.name}</span>
              <img
                src={undraw_profile_1}
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle border border-2"
              />
            </a>
            <ul
              className="dropdown-menu text-small shadow dropdown-menu-end"
              aria-labelledby="dropdownUser2"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/logout">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Topbar;
