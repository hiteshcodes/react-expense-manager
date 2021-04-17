import React, { useEffect, useState } from "react";
import Logout from "../../../icons/exit.svg";
import { useHistory } from "react-router-dom";
import { firestore, auth } from "../../../firebase";

const AccountNavbar = ({ user }) => {
  const [email, setEmail] = useState("usersname");
  const history = useHistory();

  useEffect(() => {
    setEmail(user.email);
    firestore
      .collection(`/users`)
      .doc(`${email}`)
      .get(async (snapshot) => {
        console.log(await snapshot.docs);
      });
  }, []);

  const logout = () => {
    auth.signOut().then(() => {
      alert("Logged out success");
      window.location.reload();
    });
  };

  return (
    <div className="container p-3 d-flex justify-content-between align-items-center">
      <h4 className="m-0">Welcome, {email}</h4>
      <button className="btn text-light m-0">
        <img src={Logout} alt="" width="25px" onClick={logout} />
      </button>
    </div>
  );
};

export default AccountNavbar;
