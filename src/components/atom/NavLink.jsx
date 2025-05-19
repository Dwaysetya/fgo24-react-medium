// src/components/atoms/NavLink.jsx
import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ label, to }) => {
  return (
    <Link
      to={to}
      className="text-sm text-black hover:underline px-2 whitespace-nowrap"
    >
      {label}
    </Link>
  );
};

export default NavLink;
