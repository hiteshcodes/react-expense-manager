import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Home from "../icons/navbar_icons/home.svg";
import Cards from "../icons/navbar_icons/cards.svg";
import Account from "../icons/navbar_icons/account.svg";
import Transactions from "../icons/navbar_icons/transactions.svg";
const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navigation w-100">
        <ul className="d-flex justify-content-between p-0 my-auto ">
          <li className="list-group-item bg-transparent border-0">
            <NavLink className="text-secondary" to="/">
              <img src={Home} alt="home-icon" />{" "}
              <span className="fw-bold">Home</span>
            </NavLink>
          </li>
          <li className="list-group-item bg-transparent border-0">
            <NavLink className="text-secondary" to="/transactions">
              <img src={Transactions} alt="transaction-icon" />{" "}
              <span className="fw-bold">Transactions</span>
            </NavLink>
          </li>
          <li className="list-group-item bg-transparent border-0">
            <NavLink className="text-secondary" to="/cards">
              <img src={Cards} alt="cards-icon" />
              <span className="fw-bold">Cards</span>
            </NavLink>
          </li>
          <li className="list-group-item bg-transparent border-0">
            <NavLink className="text-secondary" to="/account">
              <img src={Account} alt="account-icon" />
              <span className="fw-bold">Account</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
