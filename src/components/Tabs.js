import React from "react";
import Account from "./Account";
import Cards from "./Cards";
import Home from "./Home";
import ShowTransactions from "./ShowTransactions";

const Tabs = ({ transactions, cards, handleSubmitAddNewCard }) => {
  return (
    <div className="tabs">
      <ul
        className="nav nav-pills d-flex justify-content-between"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-transactions-tab"
            data-bs-toggle="pill"
            href="#pills-transactions"
            role="tab"
            aria-controls="pills-transactions"
            aria-selected="false"
          >
            Transactions
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-cards-tab"
            data-bs-toggle="pill"
            href="#pills-cards"
            role="tab"
            aria-controls="pills-cards"
            aria-selected="false"
          >
            Cards
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-account-tab"
            data-bs-toggle="pill"
            href="#pills-account"
            role="tab"
            aria-controls="pills-account"
            aria-selected="false"
          >
            Account
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <Home transactions={transactions} />
        </div>
        <div
          className="tab-pane fade"
          id="pills-transactions"
          role="tabpanel"
          aria-labelledby="pills-transactions-tab"
        >
          <ShowTransactions transactions={transactions} />
        </div>
        <div
          className="tab-pane fade"
          id="pills-cards"
          role="tabpanel"
          aria-labelledby="pills-cards-tab"
        >
          <Cards
            cards={cards}
            handleSubmitAddNewCard={handleSubmitAddNewCard}
          />
        </div>
        <div
          className="tab-pane fade"
          id="pills-account"
          role="tabpanel"
          aria-labelledby="pills-account-tab"
        >
          <Account />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
