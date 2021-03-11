import React from "react";
import InputField from "./InputField";
import Transactions from "./Transactions";
import ModalInput from "./ModalInput";

const TransactionsHome = ({
  transactions,
  deleteTransactions,
  transaction,
  cards,
}) => {
  return (
    <div>
      <Transactions
        transactions={transactions}
        deleteTransactions={deleteTransactions}
      />
      <ModalInput transaction={transaction} cards={cards} />
    </div>
  );
};

export default TransactionsHome;
