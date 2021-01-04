import React, { useState, useEffect } from "react";
import Modal from "./components/ModalInput";
import Tabs from "./components/Tabs";
import AddNewCard from "./components/AddNewCard";

const App = () => {
  const [cards, setCards] = useState([
    // {
    //   id: "0",
    //   holder: "Hitesh Bhargav",
    //   number: "3242324245646574",
    //   from: "11/22",
    //   upto: "22",
    //   category: "mastercard",
    //   type: "debit card",
    // },
    // {
    //   id: "2",
    //   holder: "Hitesh Bhargav",
    //   number: "3242324245646571",
    //   from: "11/22",
    //   upto: "22",
    //   category: "mastercard",
    //   type: "debit card",
    // },
    // {
    //   id: "1",
    //   holder: "Hitesh Bhargav",
    //   number: "324232424357774",
    //   from: "11",
    //   upto: "22",
    //   category: "visa",
    //   type: "credit card",
    // },
  ]);

  const [transactions, setTransactions] = useState([
    // {
    //   id: 1,
    //   name: "E-Bills",
    //   type: "income",
    //   amount: 1240,
    //   category: "cash",
    //   mode: "debit card",
    //   description: "something...",
    //   timeStamp: "2021-01-30",
    // },
    // {
    //   id: 2,
    //   name: "Broadband",
    //   type: "expense",
    //   amount: 599,
    //   category: "wifi",
    //   mode: "cash",
    //   description: "something...",
    //   timeStamp: "2021-01-27",
    // },
    // {
    //   id: 3,
    //   name: "Salary",
    //   type: "income",
    //   amount: 13500,
    //   icon: "cash",
    //   mode: "cash",
    //   timeStamp: "2021-01-27",
    // },
    // {
    //   id: 4,
    //   name: "Mobile Recharge",
    //   type: "expense",
    //   amount: 149,
    //   icon: "mobileRecharge",
    //   mode: "cash",
    //   timeStamp: "2021-01-27",
    // },
    // {
    //   id: 5,
    //   name: "Cash",
    //   type: "income",
    //   amount: 1200,
    //   icon: "cash",
    //   mode: "cash",
    //   timeStamp: "2021-01-27",
    // },
    // {
    //   id: 6,
    //   name: "Cash",
    //   type: "expense",
    //   amount: 2,
    //   icon: "cash",
    //   mode: "cash",
    //   timeStamp: "2021-01-27",
    // },
    // {
    //   id: 7,
    //   name: "Cash",
    //   type: "expense",
    //   amount: 2,
    //   icon: "cash",
    //   mode: "cash",
    //   timeStamp: "2021-01-27",
    // },
    // {
    //   id: 8,
    //   name: "Cash",
    //   type: "expense",
    //   amount: 2,
    //   icon: "cash",
    //   mode: "cash",
    //   timeStamp: "2021-01-27",
    // },
  ]);

  const transaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  // set transactions from localstorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // get cards from localstorage
  useEffect(() => {
    const cards = localStorage.getItem("cards");
    cards && setCards(JSON.parse(cards));
  }, []);

  const handleAddNewCard = (newCardObj) => {
    setCards([newCardObj, ...cards]);
  };

  // set cards from localstorage
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const deleteCard = (card) => {
    const deleteCard = cards.filter((c) => c.id !== card.id);
    setCards(deleteCard);
    localStorage.setItem("cards", JSON.stringify(deleteCard));
  };

  const deleteTransaction = (items) => {
    const deteledTransaction = transactions.filter(
      (transaction) => transaction.id !== items.id
    );
    setTransactions(deteledTransaction);
    localStorage.setItem("transactions", JSON.stringify(deteledTransaction));
  };

  // get transactions from localstorage
  useEffect(() => {
    const transactions = localStorage.getItem("transactions");
    transactions && setTransactions(JSON.parse(transactions));
  }, []);

  return (
    <>
      {/* <h2 className="text-center m-3 main-heading">react-expense-manager</h2> */}
      <Tabs
        transactions={transactions}
        cards={cards}
        handleAddNewCard={handleAddNewCard}
        deleteCard={deleteCard}
        setCards={setCards}
        deleteTransaction={deleteTransaction}
      />
      <Modal transaction={transaction} cards={cards} />
    </>
  );
};

export default App;
