import React, { useState, useEffect } from "react";

const Tip = ({ income, expense, balance }) => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    if (balance > 0) {
      setTip("Yay! You are saving ;)");
    } else if (balance === 0) {
      setTip("");
    } else {
      setTip("You are spending a lot :(");
    }
  }, [balance]);

  return (
    <div className="tip">
      <span className="">{tip}</span>
    </div>
  );
};

export default Tip;
