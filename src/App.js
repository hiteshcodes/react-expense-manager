import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Account from "./components/Account/Account";
import TransactionsHome from "./components/Transactions/TransactionsHome";
import Home from "./components/Home/Home";
import CardsHome from "./components/Cards/CardsHome";
import Login from "./components/Account/Login/Login";
import Signup from "./components/Account/Signup/Signup";
import { auth, firestore } from "./firebase";
import Loading from "./Loading";

const App = () => {
  const [user, setUser] = useState(null);

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

  // get current logged in user
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(user);
        
        // get all transactions
        firestore
          .collection(`users`)
          .doc(user.email)
          .collection(`transactions`)
          .onSnapshot((snapshot) => {
            // return setCards(data.data());
            setTransactions(snapshot.docs.map((doc) => doc.data()));
          });

        // get all cards
        firestore
          .collection(`users`)
          .doc(user.email)
          .collection(`cards`)
          .onSnapshot((snapshot) => {
            // return setCards(data.data());
            setCards(snapshot.docs.map((doc) => doc.data()));
          });
      } else {
        console.log("No User");
      }
    });
  }, []);

  // get transactions from localstorage
  // useEffect(() => {
  // localstorage
  // const transactions = localStorage.getItem("transactions");
  // transactions && setTransactions(JSON.parse(transactions));
  // }, []);

  // set transactions from localstorage
  // useEffect(() => {
  //   localStorage.setItem("transactions", JSON.stringify(transactions));
  // }, [transactions]);

  const transaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
    console.log("new trans ", newTransaction);
    // localStorage.setItem("transactions", JSON.stringify(transactions));

    firestore
      .collection(`users`)
      .doc(user.email)
      .collection(`transactions`)
      .doc(newTransaction.name)
      .set(newTransaction)
      .then(() => alert("Transaction Added"))
      .catch((error) => alert(error.message));
  };

  // get cards from localstorage
  // useEffect(() => {
  //   const cards = localStorage.getItem("cards");
  //   cards && setCards(JSON.parse(cards));
  // }, []);

  const handleAddNewCard = (newCardObj) => {
    firestore
      .collection(`users`)
      .doc(user.email)
      .collection(`cards`)
      .doc(newCardObj.number)
      .set(newCardObj)
      .then(() => alert("Card Added"))
      .catch((error) => alert(error.message));
  };

  // set cards from localstorage
  // useEffect(() => {
  //   localStorage.setItem("cards", JSON.stringify(cards));
  // }, [cards]);

  const deleteCard = (card) => {
    // const deleteCard = cards.filter((c) => c.id !== card.id);
    // setCards(deleteCard);
    // localStorage.setItem("cards", JSON.stringify(deleteCard));
    firestore
      .collection(`users`)
      .doc(user.email)
      .collection(`cards`)
      .doc(card.number)
      .delete();
  };

  const deleteTransaction = (items) => {
    // const deteledTransaction = transactions.filter(
    //   (transaction) => transaction.id !== items.id
    // );
    // setTransactions(deteledTransaction);
    // localStorage.setItem("transactions", JSON.stringify(deteledTransaction));
    console.log("delete transaction");
    firestore
      .collection(`users`)
      .doc(user.email)
      .collection(`transactions`)
      .doc(items.name)
      .delete();
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            {user ? (
              <>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Home transactions={transactions} {...props} />
                  )}
                />
                <Route
                  exact
                  path="/cards"
                  render={(props) => (
                    <CardsHome
                      cards={cards}
                      user={user}
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
                      user={user}
                      transactions={transactions}
                      transaction={transaction}
                      deleteTransaction={deleteTransaction}
                      setTransactions={setTransactions}
                      cards={cards}
                      {...props}
                    />
                  )}
                />
                <Route
                  exact
                  path="/account"
                  render={(props) => (
                    <Account component={Account} user={user} {...props} />
                  )}
                />
              </>
            ) : (
              <>
                <Route exact path={"/"} component={Login} />
                <Route exact path={"/transactions"} component={Login} />
                <Route exact path={"/cards"} component={Login} />
                <Route exact path="/account" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </>
            )}
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
