import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navigation w-100">
        <ul className="d-flex justify-content-between p-0 my-auto ">
          <li className="list-group-item bg-transparent border">
            <Link className="btn btn-outline-secondary" to="/">
              Home
            </Link>
          </li>
          <li className="list-group-item bg-transparent border ">
            <NavLink className="btn btn-outline-secondary" to="/transactions">
              Transactions
            </NavLink>
          </li>
          <li className="list-group-item bg-transparent border ">
            <NavLink className="btn btn-outline-secondary" to="/cards">
              Cards
            </NavLink>
          </li>
          <li className="list-group-item bg-transparent border ">
            <NavLink className="btn btn-outline-secondary" to="/account">
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
