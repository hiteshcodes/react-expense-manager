import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Account from "./Account";
import Cards from "./Cards";
import Home from "./Home";
import ShowTransactions from "./ShowTransactions";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/transactions" component={ShowTransactions} />
            <Route path="/cards" component={Cards} />
            <Route path="/account" component={Account} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Routing;
