import React from "react";
import AddNew from "../icons/addNew.png";

const New = () => {
  return (
    <div className="fixed add-new-button">
      <button
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={AddNew} alt="" width="30px" />
      </button>
    </div>
  );
};

export default New;
