import React, { useState } from "react";

const InputField = ({ transaction }) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [type, setType] = useState("");
  const [expenseOption, setExpenseOption] = useState(false);
  const [mode, setMode] = useState("Cash");

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputAmount = (e) => {
    setInputAmount(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
    if (e.target.value === "expense") {
      setExpenseOption(true);
    } else {
      setExpenseOption(false);
    }
  };

  const handleMode = (e) => {
    setMode(e.target.value);
  };

  const handleSubmit = () => {
    // check if input field is empty
    if (
      !inputName ||
      (/^\s*$/.test(inputName) && !inputAmount) ||
      (/^\s*$/.test(inputAmount) && !type) ||
      /^\s*$/.test(type)
    ) {
      alert("Fields Can't remain empty");
      return;
    }
    const randomID = Math.floor(Math.random() * 999999);
    let asd = new Date().toLocaleDateString("en-US").split("/");
    let dateObj = { day: asd[1], month: asd[0], year: asd[2] };
    // let months = [
    //   "null",
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
    // ];
    const timeStamp = `${dateObj.year}-${dateObj.month}-${dateObj.day}`;
    const newTransaction = {
      id: randomID,
      name: inputName,
      amount: inputAmount,
      type: type,
      timeStamp: timeStamp,
    };

    transaction(newTransaction);
    setInputName("");
    setInputAmount("");
    setType("");
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-around">
        <div className="col col-lg-6 col-md-6 col-sm-4 col-6 position-relative mt-3">
          <small
            className="position-absolute px-2"
            style={{ top: "-10px", left: "20px", backgroundColor: "#fff" }}
          >
            Name
          </small>
          <input
            style={{ border: "1px solid black", padding: "10px" }}
            className="m-auto"
            type="text"
            className="form-control"
            value={inputName}
            onChange={(e) => handleInputName(e)}
          />
        </div>
        <div className="col col-lg-3 col-md-3 col-sm-4 col-6 position-relative mt-3">
          <small
            className="position-absolute px-2"
            style={{ top: "-10px", left: "20px", backgroundColor: "#fff" }}
          >
            Amount
          </small>
          <input
            style={{ border: "1px solid black", padding: "10px" }}
            className="m-auto"
            type="number"
            className="form-control"
            value={inputAmount}
            onChange={(e) => handleInputAmount(e)}
          />
        </div>
        <div className="col mt-auto position-relative">
          <div className="mt-3">
            <small
              className="position-absolute px-2"
              style={{ top: "5px", left: "17px", backgroundColor: "#fff" }}
            >
              Type
            </small>
            <select
              style={{ border: "1px solid black", padding: "10px" }}
              className="form-select m-auto"
              id="inputGroupSelect02"
              value={type}
              onChange={(e) => handleType(e)}
            >
              <option>Select</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>
        {/* <div className="col mt-auto position-relative">
          <div className="mt-3">
            <small
              className="position-absolute px-2"
              style={{ top: "5px", left: "17px", backgroundColor: "#fff" }}
            >
              Mode
            </small>
            <select
              style={{ border: "1px solid black", padding: "10px" }}
              className="form-select m-auto"
              id="inputGroupSelect02"
              value={type}
              onChange={(e) => handleType(e)}
            >
              <option>Select</option>
              <option value="income">Cash</option>
              <option value="expense">Debit Card</option>
              <option value="expense">Credit Card</option>
            </select>
          </div>
        </div> */}

        {expenseOption && (
          <div className="col col-lg-3 col-md-3 col-sm-4 col-6 position-relative mt-3">
            <small
              className="position-absolute px-2"
              style={{ top: "-10px", left: "20px", backgroundColor: "#fff" }}
            >
              Mode
            </small>
            <select
              style={{ border: "1px solid black", padding: "10px" }}
              className="form-select m-auto"
              id="inputGroupSelect02"
              value={mode}
              onChange={handleMode}
            >
              <option>Select</option>
              <option value="Cash">Cash</option>
              <option value="debitCard">Debit Card</option>
              <option value="creditCard">Credit Card</option>
            </select>
          </div>
        )}

        <div className="col col-lg-3 col-md-3 col-sm-4 col-6 position-relative mt-3">
          <small
            className="position-absolute px-2"
            style={{ top: "-10px", left: "20px", backgroundColor: "#fff" }}
          >
            Description
          </small>
          <input
            style={{ border: "1px solid black", padding: "10px" }}
            className="m-auto"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col col-lg-1 col-md-2 col-sm-3 mt-auto">
          <button className="btn border-secondary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputField;
