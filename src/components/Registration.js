import React, { useRef } from "react";

import classes from "./Registration.module.css";

function Registration(props) {
  const userIdRef = useRef("");
  const nameRef = useRef("");
  const emailRef = useRef("");
  const mobileref = useRef("");
  const passwordref = useRef("");
  const acref = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      userId: userIdRef.current.value,
      name: nameRef.current.value,
      emailId: emailRef.current.value, //he nav same rahale pahije model class sarkhe
      mobileNo: mobileref.current.value,
      password: passwordref.current.value,
      acName: acref.current.value,
    };

    fetch("http://localhost:8001/add", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordref.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqZsxT23aTDMlnoyLxLDM02j6dnYfVXk0",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        alert("Data Saved");
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication Falied!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
            alert(errorMessage);
          }
        });
      }
    });
  }

  return (
    <>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <h3 className={classes.header}>Registration</h3>
          <div className={classes.content}>
            <form onSubmit={submitHandler}>
              <div className={classes.control}>
                <label htmlFor="userId">UserId</label>
                <input type="number" id="userId" ref={userIdRef} />
              </div>
              <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameRef} />
              </div>
              <div className={classes.control}>
                <label htmlFor="email">Email-Id</label>
                <input type="email" id="email" ref={emailRef} />
              </div>
              <div className={classes.control}>
                <label htmlFor="mobile">MobileNo</label>
                <input type="number" id="mobile" ref={mobileref} />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" ref={passwordref} />
              </div>
              <div className={classes.control}>
                <label htmlFor="acname">AcName</label>
                <input type="text" id="acname" ref={acref} />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ background: "#000080" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
