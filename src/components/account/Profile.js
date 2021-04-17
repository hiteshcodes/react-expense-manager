import React, { useState } from "react";
import Avatar from "./user.svg";
const Profile = ({ user }) => {
  const [expLimit, setExpLimit] = useState(2000);
  return (
    <div>
      <div className="container Profile_content display-flex justify-content-center my-5 pb-5">
        <div className="row">
          <div className="card-box">
            <div className="member-card pt-2 pb-2">
              <div className="thumb-lg member-thumb">
                <img
                  src={Avatar}
                  className="rounded-circle img-thumbnail mb-2"
                  alt="profile-image"
                  width="100px"
                />
              </div>
              <div className="">
                <h4>Hello, {user.email.split("@gmail.com")}</h4>
              </div>
              <div className="mt-4">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="border border-secondary p-2 rounded">
                      <label htmlFor="customRange3" className="form-label">
                        Set Expense Limit
                      </label>
                      <br />
                      <input
                        type="range"
                        className="form-range"
                        min="5000"
                        max="60000"
                        id="customRange2"
                        onChange={(event) => setExpLimit(event.target.value)}
                      />
                      <span>₹ {expLimit}</span>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-2">
                    <div className="border border-secondary p-2 rounded">
                      <label htmlFor="customRange3" className="form-label">
                        View Card Details <br />
                        comming soon...
                      </label>
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-3 mt-2">
                    <div className="border border-secondary p-2 rounded">
                      <label htmlFor="customRange3" className="form-label">
                        graphical view of expense and losses, <br />
                        comming soon...
                      </label>
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-3 mt-2">
                    <div className="border border-secondary p-2 rounded">
                      <label htmlFor="customRange3" className="form-label">
                        Notification Section, <br />
                        comming soon...
                      </label>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
