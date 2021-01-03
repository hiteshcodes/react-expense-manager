import React from "react";
import master from "../icons/master.png";
import visa from "../icons/visa2.png";
import chip from "../icons/chip.png";
import AddNewCard from "./AddNewCard";

const Cards = ({ cards, handleSubmitAddNewCard }) => {
  return cards.length > 0 ? (
    <div className="mx-auto mt-5 d-flex flex-wrap">
      {/* <div className="add-new-card">
        <AddNewCard />
      </div> */}
      {cards.map((card) => {
        const cardnumber = card.number.slice(-4);
        const cardNumber = `**** **** **** ${cardnumber}`;
        return (
          <div
            className={
              card.category === "mastercard"
                ? "mx-auto my-4 position-relative text-white mastercard"
                : "mx-auto my-4 position-relative text-white visa"
            }
            key={card.number}
          >
            <span
              className="position-absolute"
              style={{
                textTransform: "uppercase",
                opacity: "0.3",
                fontSize: "14px",
                left: "45px",
                top: "15px",
              }}
            >
              {card.type}
            </span>
            <div
              className="mastercard_logo position-absolute d-grid"
              style={{
                right: "20px",
                top: "10px",
              }}
            >
              {card.category === "mastercard" ? (
                <img src={master} alt="" width="50px" />
              ) : (
                <img src={visa} alt="" width="50px" />
              )}
              <small
                className="mx-auto"
                style={{ fontSize: "12px", marginTop: "-5px" }}
              >
                {card.category === "mastercard" ? "mastercard" : ""}
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
                <span> {card.holder} </span>
                <span>
                  {" "}
                  {card.from}/{card.upto}{" "}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <>
      <AddNewCard />
      <div className="container d-flex justify-content-center mt-5">
        <h4 className="text-secondary"> No Cards Added </h4>
      </div>
    </>
  );
};

export default Cards;
