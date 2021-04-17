import React from "react";
import Transactions from "./Transactions";
import ModalInput from "./ModalInput";

const TransactionsHome = ({
  transactions,
  deleteTransaction,
  transaction,
  cards,
}) => {
  return (
    <div>
      <Transactions
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      <ModalInput transaction={transaction} cards={cards} />
    </div>
  );
};

export default TransactionsHome;
