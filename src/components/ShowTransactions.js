import React, { useState } from "react";
import New from "./New";
import ModalTransactionDetail from "../components/ModalTransactionDetail";

const ShowTransactions = ({ transactions }) => {
  const date = new Date();
  const currMonth = date.getMonth() + 1;
  const currYear = date.getFullYear();
  const yearMonth = `${currYear}-${currMonth}`;

  const [month, setMonth] = useState(yearMonth);
  const [modalDetail, setModalDetail] = useState([]);

  const handleFilter = (e) => {
    setMonth(e.target.value);
  };

  const handleDetailModal = (item) => {
    setModalDetail([modalDetail, item]);
  };

  const Alltransactions = () => {
    const filteredTransactions = transactions.filter(
      (item) => item.timeStamp.slice(0, 7) === month
    );

    return filteredTransactions.length > 0 ? (
      filteredTransactions.map((items) => {
        return (
          <li
            className="list-group-item rounded my-1"
            style={
              items.type === "income"
                ? {
                    backgroundColor: "#c5fad9",
                    color: "#045762",
                    fontWeight: "500",
                  }
                : {
                    backgroundColor: "#e6b2c6",
                    color: "#cd0a0a",
                    fontWeight: "500",
                  }
            }
            key={items.id}
          >
            <div className="d-flex justify-content-between">
              <div className="">
                <a
                  className="text-decoration-none"
                  href="!#"
                  style={{
                    cursor: "pointer",
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#transactionDetailModal"
                  onClick={() => handleDetailModal(items.id)}
                >
                  {items.name}
                </a>{" "}
                <br />
                <small style={{ color: "#456268" }}>{items.timeStamp}</small>
              </div>
              <div className="wrapper-child d-flex justify-content-around">
                <span>₹ {items.amount}</span>
              </div>
            </div>
          </li>
        );
      })
    ) : (
      <div className="container d-flex justify-content-center mt-5">
        <h4 className="text-secondary"> No Transactions in this month </h4>
      </div>
    );
  };

  return (
    <div className="container">
      <New />
      <ModalTransactionDetail modalDetail={modalDetail} />
      <ul className="list-group p-0 mt-4">
        <div className="d-flex justify-content-between">
          <h5 className="m-2 text-primary p-1 my-auto">Transactions</h5>
          <div className="month-picker">
            <input
              className="month-picker-input bg-transparent border-primary rounded p-1"
              type="month"
              value={month}
              onChange={handleFilter}
            />
          </div>
        </div>
        <Alltransactions />
      </ul>
    </div>
  );
};

export default ShowTransactions;

// import addNew from "../icons/addNew.png";
// import bus from "../icons/bus.png";
// import creditcard from "../icons/creditcard.png";
// import electricity from "../icons/electricity.png";
// import flight from "../icons/flight.png";
// import food from "../icons/food.png";
// import gas from "../icons/gas.png";
// import mobileRecharge from "../icons/mobileRecharge.png";
// import movieTickets from "../icons/movieTickets.png";
// import shopping from "../icons/shopping.png";
// import train from "../icons/train.png";
// import water from "../icons/water.png";
// import wifi from "../icons/wifi.png";
