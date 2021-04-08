import React, { useState } from "react";
import AddNew from "../../icons/addNew.png";

const AddNewCard = ({ handleAddNewCard }) => {
  // const [cards, setCards] = useState([]);
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validUpto, setValidUpto] = useState("");
  const [error, setError] = useState(false);

  const handleSubmitAddNewCard = () => {
    const randomID = Math.floor(Math.random() * 999999);
    const newCardObj = {
      id: randomID,
      number: cardNumber,
      holder: cardHolder,
      category: category,
      type: type,
      from: validFrom,
      upto: validUpto,
    };
    if (
      cardNumber.length === 16 &&
      cardHolder.length > 2 &&
      category &&
      type &&
      validFrom.length === 2 &&
      validUpto.length === 2
    ) {
      console.log("success");
      handleAddNewCard(newCardObj);
    } else {
      console.log("Please enter correct values");
      setError(true);
    }
    setCardNumber("");
    setCardHolder("");
    setCategory("");
    setType("");
    setValidFrom("");
    setValidUpto("");

    // console.log(newCardObj);
  };

  return (
    <div className="container">
      <div className="fixed">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-toggle="modal"
          data-bs-target="#add-new-card"
        >
          <img src={AddNew} alt="add_new_card" width="25px" />
        </button>
      </div>
      <div
        className="modal fade"
        id="add-new-card"
        tabIndex="-1"
        aria-labelledby="add-new-card"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add a new Card
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col col-lg-6 col-6 mt-3 position-relative">
                  <small
                    className="position-absolute px-2"
                    style={{
                      top: "-10px",
                      left: "20px",
                      backgroundColor: "#fff",
                    }}
                  >
                    Card Number
                  </small>
                  <input
                    style={{ border: "1px solid black", padding: "10px" }}
                    className="m-auto"
                    type="number"
                    className={["form-control"]}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
                <div className="col col-lg-6 col-6 mt-3 position-relative">
                  <small
                    className="position-absolute px-2"
                    style={{
                      top: "-10px",
                      left: "20px",
                      backgroundColor: "#fff",
                    }}
                  >
                    Card Holder Name
                  </small>
                  <input
                    style={{ border: "1px solid black", padding: "10px" }}
                    className="m-auto"
                    type="text"
                    className={["form-control"]}
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                  />
                </div>
                <div className="col col-lg-6 col-6 mt-3 position-relative">
                  <small
                    className="position-absolute px-2"
                    style={{
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
                    id="inputGroupSelect02"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Select</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="easy">Easy</option>
                    <option value="rupay">Rupay</option>
                  </select>
                </div>
                <div className="col col-lg-6 col-6 mt-3 position-relative">
                  <small
                    className="position-absolute px-2"
                    style={{
                      top: "-10px",
                      left: "20px",
                      backgroundColor: "#fff",
                    }}
                  >
                    Type of Card
                  </small>
                  <select
                    style={{ border: "1px solid black", padding: "10px" }}
                    className="form-select m-auto"
                    id="inputGroupSelect02"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option>Select</option>
                    <option value="debit card">Debit Card</option>
                    <option value="credit card">Credit Card</option>
                  </select>
                </div>
                <div className="col col-lg-6 col-6 mt-3 position-relative">
                  <small
                    className="position-absolute px-2"
                    style={{
                      top: "-10px",
                      left: "20px",
                      backgroundColor: "#fff",
                    }}
                  >
                    Valid From
                  </small>
                  <input
                    style={{ border: "1px solid black", padding: "10px" }}
                    className="m-auto"
                    type="number"
                    className="form-control"
                    value={validFrom}
                    onChange={(e) => setValidFrom(e.target.value)}
                  />
                </div>
                <div className="col col-lg-6 col-6 mt-3 position-relative">
                  <small
                    className="position-absolute px-2"
                    style={{
                      top: "-10px",
                      left: "20px",
                      backgroundColor: "#fff",
                    }}
                  >
                    Valid Upto
                  </small>
                  <input
                    style={{ border: "1px solid black", padding: "10px" }}
                    className="m-auto"
                    type="number"
                    className="form-control"
                    value={validUpto}
                    onChange={(e) => setValidUpto(e.target.value)}
                  />
                </div>
                {error && (
                  <small className="text-danger">
                    Please Enter Correct Values
                  </small>
                )}
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-secondary my-3"
                  onClick={handleSubmitAddNewCard}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => setError(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCard;
