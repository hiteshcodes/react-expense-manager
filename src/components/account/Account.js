import React from "react";
import AccountNavbar from "./Navbar/AccountNavbar";
import Profile from "./Profile";
const Account = ({ user }) => {
  return (
    <div>
      <AccountNavbar user={user} />
      <Profile user={user} />
    </div>
  );
};

export default Account;
