import React from "react";
import Account from "../account/Account";
import Cards from "../cards/Cards";
import Home from "./Home";
import ShowTransactions from "../transactions/ShowTransactions";
import AddNewCard from "../cards/AddNewCard";
import HomeIcon from "../../icons/home.png";
import TransactionIcon from "../../icons/transactions.png";
import CardsIcon from "../../icons/cards.png";
import AccountIcon from "../../icons/account.png";

const Tabs = ({
  transactions,
  cards,
  handleAddNewCard,
  deleteCard,
  deleteTransaction,
}) => {
  return (
    <div className="tabs">
      <ul
        className="nav nav-pills d-flex justify-content-between p-0"
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
            <img src={HomeIcon} alt="" width="30px" />
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
            <img src={TransactionIcon} alt="" width="30px" />
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
            <img src={CardsIcon} alt="" width="30px" />
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
            <img src={AccountIcon} alt="" width="30px" />
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
          <ShowTransactions
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        </div>
        <div
          className="tab-pane fade"
          id="pills-cards"
          role="tabpanel"
          aria-labelledby="pills-cards-tab"
        >
          <AddNewCard handleAddNewCard={handleAddNewCard} />
          <Cards cards={cards} deleteCard={deleteCard} />
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
