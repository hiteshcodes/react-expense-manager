import React, { useState } from "react";

const InputField = ({ transaction, cards }) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [type, setType] = useState("");
  const [expenseOption, setExpenseOption] = useState(false);
  const [mode, setMode] = useState("Cash");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);

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

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    // check if input field is empty
    if (
      !inputName ||
      (/^\s*$/.test(inputName) && !inputAmount) ||
      (/^\s*$/.test(inputAmount) && !type) ||
      (/^\s*$/.test(type) && !description) ||
      /^\s*$/.test(description)
    ) {
      setError("Fields Can't remain empty");
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
    const monthArr = [
      "null",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    const timeStamp = `${dateObj.year}-${monthArr[dateObj.month]}-${
      dateObj.day
    }`;
    const newTransaction = {
      id: randomID,
      name: inputName,
      amount: Number(inputAmount),
      type: type,
      mode: mode,
      description: description,
      category: category,
      timeStamp: timeStamp,
    };

    transaction(newTransaction);

    setInputName("");
    setInputAmount("");
    setType("");
    setMode("");
    setDescription("");
    setCategory("");
    setError(false);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-around">
        <div className="col col-lg-6 col-md-6 col-sm-4 col-6 position-relative mt-3">
          <small
            className="position-absolute px-2"
            style={{
              color: "#363b52",
              top: "-10px",
              left: "20px",
              backgroundColor: "#fff",
            }}
          >
            Name
          </small>
          <input
            style={{ border: "1px solid black", padding: "10px" }}
            className="m-auto form-control"
            type="text"
            value={inputName}
            onChange={(e) => handleInputName(e)}
          />
        </div>
        <div className="col col-lg-6 col-md-3 col-sm-4 col-6 position-relative mt-3">
          <small
            className="position-absolute px-2"
            style={{
              color: "#363b52",
              top: "-10px",
              left: "20px",
              backgroundColor: "#fff",
            }}
          >
            Amount
          </small>
          <input
            style={{ border: "1px solid black", padding: "10px" }}
            className="m-auto form-control"
            type="number"
            value={inputAmount}
            onChange={(e) => handleInputAmount(e)}
          />
        </div>
        <div className="col col-lg-4 mt-auto col-6 position-relative">
          <div className="mt-3">
            <small
              className="position-absolute px-2"
              style={{
                color: "#363b52",
                top: "5px",
                left: "20px",
                backgroundColor: "#fff",
              }}
            >
              Type
            </small>
            <select
              style={{
                border: "1px solid black",
                padding: "10px",
              }}
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
        {expenseOption && (
          <div className="col col-lg-3 col-md-3 col-sm-4 col-6 position-relative mt-3">
            <small
              className="position-absolute px-2"
              style={{
                color: "#363b52",
                top: "-10px",
                left: "20px",
                backgroundColor: "#fff",
              }}
            >
              Mode
            </small>
            <select
              style={{
                border: "1px solid black",
                padding: "10px",
                wordSpacing: "15px",
              }}
              className="form-select m-auto"
              id="inputGroupSelect02"
              value={mode}
              onChange={(e) => handleMode(e)}
            >
              <option>Select</option>
              <option value="Cash">Cash</option>
              {cards.length > 0
                ? cards.map((card) => {
                    const cardDetail = `${card.type} **** ${card.number.slice(
                      -4
                    )}`;
                    return (
                      <option value={card.number} key={card.number}>
                        {cardDetail}
                      </option>
                    );
                  })
                : "No Cards Added"}
            </select>
          </div>
        )}
        <div className="col col-lg-4 col-md-3 col-sm-4 col-6 position-relative mt-3">
          <small
            className="position-absolute px-2"
            style={{
              color: "#363b52",
              top: "-10px",
              left: "20px",
              backgroundColor: "#fff",
            }}
          >
            Description
          </small>
          <input
            style={{ border: "1px solid black", padding: "10px" }}
            className="m-auto form-control"
            type="text"
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div className="col col-lg-4 col-md-2 position-relative mt-3">
          <small
            className="position-absolute px-2"
            style={{
              color: "#363b52",
              top: "-10px",
              left: "20px",
              backgroundColor: "#fff",
            }}
          >
            Category
          </small>
          <select
            style={{ border: "1px solid black", padding: "10px" }}
            className="form-select m-auto"
            value={category}
            onChange={(e) => handleCategory(e)}
          >
            <option>Select</option>
            <option value="wifi">Wifi</option>
            <option value="water">Water</option>
            <option value="tv">Tv</option>
            <option value="electricity">Electricity</option>
            <option value="food">Food</option>
            <option value="shopping">Shopping</option>
            <option value="movie">Movie</option>
            <option value="mobile-recharge">Mobile recharge</option>
            <option value="train">Train</option>
            <option value="flight">Flight</option>
            <option value="bus">Bus</option>
            <option value="credit-card-bill">Credit Card Bill</option>
            <option value="other">Other</option>
          </select>
        </div>
        <small className="text-danger fw-bold">{error}</small>
        <div className="d-flex flex-row-reverse">
          <button className="btn border-secondary mt-3" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputField;
