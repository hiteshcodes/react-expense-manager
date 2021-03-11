import React from "react";
import Balance from "./Balance";

const BalanceHome = ({ transactions }) => {
  return (
    <div>
      <Balance transactions={transactions} />
    </div>
  );
};

export default BalanceHome;
