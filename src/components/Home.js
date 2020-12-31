import React from "react";
import Balance from "./Balance";

const Home = ({ transactions }) => {
  return (
    <div className="container mt-5">
      <Balance transactions={transactions} />
    </div>
  );
};

export default Home;
