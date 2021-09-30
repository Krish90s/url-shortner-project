import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="nav nav-pills flex-column sidebar bg-light border-end pt-4 ">
      <Link
        className="nav-item nav-link mx-3 text-dark h6"
        to="/dashboard/urlshortner"
      >
        Url Shortner
      </Link>
      <Link
        className="nav-item nav-link mx-3 text-dark h6"
        to="/dashboard/urllists"
      >
        Generated Urls
      </Link>
    </ul>
  );
};

export default Sidebar;
