import React from "react";
import BalanceHome from "../Balance/BalanceHome";

const Home = ({ transactions }) => {
  return (
    <div>
      <BalanceHome transactions={transactions} />
    </div>
  );
};

export default Home;
