import React, { useState } from "react";
import Modal from "./components/ModalInput";
import Tabs from "./components/Tabs";

const App = () => {
  const [cards, setCards] = useState([
    {
      id: "0",
      cardHolder: "Hitesh Bhargav",
      number: "3242324245646574",
      valid: "11/22",
      type: "mastercard",
    },
    {
      id: "1",
      cardHolder: "Hitesh Bhargav",
      number: "324232424357774",
      valid: "11/22",
      type: "visa",
    },
    {
      id: "2",
      cardHolder: "Hitesh Bhargav",
      number: "324232425556574",
      valid: "11/22",
      type: "visa",
    },
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "E-Bills",
      type: "income",
      amount: 1240,
      icon: "cash",
      mode: "debit card",
      timeStamp: "2020-12-30",
    },
    {
      id: 2,
      name: "Broadband",
      type: "expense",
      amount: 599,
      icon: "wifi",
      mode: "cash",
      timeStamp: "2020-12-27",
    },
    // {
    //   id: 3,
    //   name: "Salary",
    //   type: "income",
    //   amount: 13500,
    //   icon: "cash",
    //   mode: "cash",
    //   timeStamp: "2020-12-27",
    // },
    // {
    //   id: 4,
    //   name: "Mobile Recharge",
    //   type: "expense",
    //   amount: 149,
    //   icon: "mobileRecharge",
    //   mode: "cash",
    //   timeStamp: "2020-12-27",
    // },
    // {
    //   id: 5,
    //   name: "Cash",
    //   type: "income",
    //   amount: 1200,
    //   icon: "cash",
    //   mode: "cash",
    //   timeStamp: "2020-12-27",
    // },
    // {
    //   id: 6,
    //   name: "Cash",
    //   type: "expense",
    //   amount: 2,
    //   icon: "cash",
    //   mode: "cash",
    //   timeStamp: "2020-12-27",
    // },
    // {
    //   id: 7,
    //   name: "Cash",
    //   type: "expense",
    //   amount: 2,
    //   icon: "cash",
    //   mode: "cash",
    //   timeStamp: "2020-11-27",
    // },
    // {
    //   id: 8,
    //   name: "Cash",
    //   type: "expense",
    //   amount: 2,
    //   icon: "cash",
    //   mode: "cash",
    //   timeStamp: "2020-11-27",
    // },
  ]);

  const transaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div className="container app pb-5">
      <h2 className="text-center m-3">react-expense-manager</h2>
      <Tabs transactions={transactions} cards={cards} />
      <Modal transaction={transaction} />
    </div>
  );
};

export default App;
