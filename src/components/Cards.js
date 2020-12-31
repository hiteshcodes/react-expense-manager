import React from "react";
import master from "../icons/master.png";
import visa from "../icons/visa2.png";
import chip from "../icons/chip.png";

const Cards = ({ cards }) => {
  return cards.length > 0 ? (
    <div className="mx-auto mt-5 d-flex flex-wrap">
      {cards.map((card) => {
        const cardnumber = card.number.slice(-4);
        const cardNumber = `**** **** **** ${cardnumber}`;
        return (
          <div
            className={
              card.type === "mastercard"
                ? "mx-auto my-4 position-relative text-white mastercard"
                : "mx-auto my-4 position-relative text-white visa"
            }
            key={card.id}
          >
            <div
              className="mastercard_logo position-absolute d-grid"
              style={{
                right: "20px",
                top: "10px",
              }}
            >
              {card.type === "mastercard" ? (
                <img src={master} alt="" width="50px" />
              ) : (
                <img src={visa} alt="" width="50px" />
              )}
              <small
                className="mx-auto"
                style={{ fontSize: "12px", marginTop: "-5px" }}
              >
                {card.type === "mastercard" ? "mastercard" : ""}
              </small>
            </div>
            <img
              src={chip}
              alt=""
              width="40px"
              className="position-absolute"
              style={{
                top: "27%",
                left: "14%",
              }}
            />
            <span
              className="position-absolute mx-auto text-center"
              style={{
                // top: "50%",
                // left: "50%",
                // transform: "Translate(-50%, -50%)",
                width: "100%",
                wordSpacing: "20px",
                margin: "110px 75px",
                letterSpacing: "6px",
              }}
            >
              {cardNumber}
            </span>
            <div
              className="bottom position-absolute w-100"
              style={{
                bottom: "15%",
              }}
            >
              <div
                className="name_valid d-flex justify-content-around"
                style={{
                  letterSpacing: "3px",
                }}
              >
                <span> {card.cardHolder} </span>
                <span> {card.valid} </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <h2> Loading... </h2>
  );
};

export default Cards;
