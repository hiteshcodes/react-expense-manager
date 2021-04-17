import React from "react";

const ModalTransactionDetail = ({ modalDetail }) => {
  return (
    <div
      className="modal fade text-dark"
      id="transactionDetailModal"
      tabIndex="-1"
      aria-labelledby="transactionDetailModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="transactionDetailModal">
              Transaction Detail
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {modalDetail.map((item) => {
              return (
                <ul className="list-group" key={item.id}>
                  <li className="list-group-item active" aria-current="true">
                    {item.name}
                  </li>
                  <li className="list-group-item">Category: {item.category}</li>
                  <li className="list-group-item">
                    Description: {item.description}
                  </li>
                  <li className="list-group-item">Type: {item.type}</li>
                  <li className="list-group-item">
                    asd{" "}
                    {item.mode === "Cash" ? (
                      <span>Payment Mode: {item.mode}</span>
                    ) : (
                      <span>
                        Payment mode: **** **** **** {item.mode.slice(-4)}
                      </span>
                    )}
                  </li>
                  <li className="list-group-item">Amount: {item.amount}</li>
                  <li className="list-group-item">
                    Added on: {item.timeStamp}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTransactionDetail;
