import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Account from "./components/Account/Account";
import TransactionsHome from "./components/Transactions/TransactionsHome";
import Home from "./components/Home/Home";
import CardsHome from "./components/Cards/CardsHome";
import Login from "./components/Account/Login/Login";
import Signup from "./components/Account/Signup/Signup";
import { auth } from "./firebase";

const App = () => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(`%c ${null}`, "font-size: 18px; color: #ffc93c");
      }
      console.log("%c null", "font-size: 24px; color: #ffc93c");
    });
  }, []);

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

  // get transactions from localstorage
  useEffect(() => {
    const transactions = localStorage.getItem("transactions");
    transactions && setTransactions(JSON.parse(transactions));
  }, []);

  // set transactions from localstorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const transaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  };

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

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home transactions={transactions} {...props} />}
          />
          <Route
            exact
            path="/cards"
            render={(props) => (
              <CardsHome
                cards={cards}
                setCards={setCards}
                handleAddNewCard={handleAddNewCard}
                deleteCard={deleteCard}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/transactions"
            render={(props) => (
              <TransactionsHome
                transactions={transactions}
                transaction={transaction}
                deleteTransactions={deleteTransaction}
                setTransactions={setTransactions}
                cards={cards}
                {...props}
              />
            )}
          />
          {/* <Route exact path="/account" component={Account} /> */}
          <Route exact path="/account" component={Account} />
          <Route exact path="/account/login" component={Login} />
          <Route exact path="/account/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
