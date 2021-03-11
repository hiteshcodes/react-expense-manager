import React, { useState } from "react";

const Signup = () => {
  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    contact: "",
    parentContact: "",
    dob: "",
    address: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [parentContactError, setParentContactError] = useState("");
  const [dobError, setDobError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const signupSubmit = (event) => {
    event.preventDefault();
    setError(false);
    setFirstNameError("");
    setLastNameError("");
    setGenderError("");

    if (signup.firstName === "") {
      setError(true);
      setFirstNameError("First name can't remain empty");
    }
    if (signup.lastName === "") {
      setError(true);
      setLastNameError("First name can't remain empty");
    }
    if (signup.gender === "") {
      setError(true);
      setGenderError("Please select a gender");
    }
    if (signup.email === "") {
      setError(true);
      setEmailError("Please select an Email");
    }
    if (signup.email.length > 0) {
      setError(false);
      setEmailError("");
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(signup.email).toLowerCase())) {
        setError(true);
        setEmailError("Enter a valid Email");
      }
    }
    if (signup.contact.length === "") {
      setError(true);
      setContactError("Enter your contact");
    }
  };

  return (
    <form
      onSubmit={signupSubmit}
      className="row  d-flex mb-5 w-100 align-items-center justify-content-center"
    >
      <div className="col col-lg-6 col-10">
        <div className="display-4 my-5">Signup</div>
        <div className="row">
          <div className="form-group col-6">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={signup.firstName}
              onChange={(e) =>
                setSignup({ ...signup, firstName: e.target.value.trim() })
              }
            />
            {error && <small className="text-danger">{firstNameError}</small>}
          </div>
          <div className="form-group col-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={signup.lastName}
              onChange={(e) =>
                setSignup({ ...signup, lastName: e.target.value.trim() })
              }
            />
            {error && <small className="text-danger">{lastNameError}</small>}
          </div>
        </div>
        <div className="p-0 m-0 form-group w-100 col-12 col-lg-8 d-flex justify-content-between align-items-center">
          <label htmlFor="gender">Gender</label>
          <div className="form-check-inline">
            <label className="form-check-label" htmlFor="radio1">
              <input
                name="gender"
                type="radio"
                className="form-check-input"
                value="male"
                onChange={(e) =>
                  setSignup({ ...signup, gender: e.target.value.trim() })
                }
              />
              Male
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label" htmlFor="radio2">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="female"
                onChange={(e) =>
                  setSignup({ ...signup, gender: e.target.value.trim() })
                }
              />
              Female
            </label>
          </div>
          <div className="form-check-inline">
            <label className="form-check-label" htmlFor="radio2">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="other"
                onChange={(e) =>
                  setSignup({ ...signup, gender: e.target.value.trim() })
                }
              />
              Other
            </label>
          </div>
        </div>
        {error && <small className="text-danger">{genderError}</small>}
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            className="form-control"
            aria-describedby="emailHelp"
            value={signup.email}
            onChange={(event) =>
              setSignup({ ...signup, email: event.target.value.trim() })
            }
          />
          {error && <small className="text-danger">{emailError}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            className="form-control"
            value={signup.contact}
            onChange={(event) =>
              setSignup({ ...signup, contact: event.target.value.trim() })
            }
          />
          {error && <small className="text-danger">{contactError}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="parentContact">Parent's Contact</label>
          <input
            type="number"
            className="form-control"
            value={signup.parentContact}
            onChange={(event) =>
              setSignup({ ...signup, parentContact: event.target.value.trim() })
            }
          />
          {error && <small className="text-danger">{parentContactError}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="dob">D.O.B</label>
          <input
            type="date"
            className="form-control"
            value={signup.dob}
            onChange={(event) =>
              setSignup({ ...signup, dob: event.target.value.trim() })
            }
          />
          {error && <small className="text-danger">{dobError}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            value={signup.address}
            onChange={(event) =>
              setSignup({ ...signup, address: event.target.value.trim() })
            }
          />
          {error && <small className="text-danger">{addressError}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={signup.password}
            onChange={(event) =>
              setSignup({ ...signup, password: event.target.value.trim() })
            }
          />
          <small className="text-danger">{passwordError}</small>
        </div>
        <button type="submit" className="btn btn-bg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Signup;
