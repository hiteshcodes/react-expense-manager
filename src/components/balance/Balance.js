import React, { useState, useEffect } from "react";
import Tip from "./Tip";

const Balance = ({ transactions }) => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (transactions.length > 0) {
      // calculate total income
      const income = transactions.filter((item) => item.type === "income");
      const incomeList = income.map((item) => item.amount);
      const totalIncome = incomeList.reduce((acc, item) => (acc += item), 0);
      setIncome(totalIncome);

      // // calculate total expense
      const expense = transactions.filter((item) => item.type === "expense");
      const expenseList = expense.map((item) => item.amount);
      const totalExpense = expenseList.reduce((acc, item) => (acc += item), 0);
      setExpense(totalExpense);

      setBalance(totalIncome - totalExpense);
    }
  }, [transactions]);

  return (
    <div className="fs-5">
      <span
        className="p-4 m-4 d-flex flex-wrap rounded"
        style={{
          backgroundColor: "var(--income)",
          color: "var(--income-text)",
          fontWeight: "500",
        }}
      >
        Income: {income}
      </span>
      <span
        className="p-4 m-4 d-flex flex-wrap rounded"
        style={{
          backgroundColor: "var(--expense)",
          color: "var(--expense-text)",
          fontWeight: "500",
        }}
      >
        Expense: {expense}
      </span>
      <span
        className="p-4 m-4 d-flex flex-wrap rounded"
        style={{
          backgroundColor: "var(--balance)",
          color: "var(--balance-text)",
          fontWeight: "500",
        }}
      >
        Balance: {balance}
      </span>
      <Tip income={income} expense={expense} balance={balance} />
    </div>
  );
};

export default Balance;
