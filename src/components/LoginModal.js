import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./LoginModal.module.css";
import Registration from "./Registration";
import { render } from "@testing-library/react";
import UserDetails from "./UserDetails";

const LoginModal = (props) => {
  const userIdRef = useRef("");
  const passwordref = useRef("");

  function registerPageHandler(event) {
    event.preventDefault();
    render(<Registration />);
  }

  async function loginHandler(event) {
    event.preventDefault();
    //for sending data same as backend
    // const bodyData = {
    //   userId: userIdRef.current.value,
    //   password: passwordref.current.value,
    // };
    // //for fetching data with the help of body
    // const response = await fetch("http://localhost:8001/get", {
    //   method: "POST",
    //   body: JSON.stringify(bodyData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await response.json();
    // if (data) {
    //   alert("Login Succesfull");
    //   render(<UserDetails />);
    // } else {
    //   setErrorMsg("Invalid UserId or Password");
    // }

    const enteredEmail = userIdRef.current.value;
    const enteredPassword = passwordref.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqZsxT23aTDMlnoyLxLDM02j6dnYfVXk0",
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
        alert("Login Succesfull");
        render(<UserDetails />);
        return res.json().then((data) => {
          console.log(data);
        });
      } else {
        return res.json().then((data) => {
          console.log(data);
          let errorMessage = "Authentication Falied!";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
            alert(errorMessage);
          }
        });
      }
    });
  }
  //line 47 and 110
  return (
    <React.Fragment>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <h3 className={classes.header}>Login/Register</h3>
          <div className={classes.content}>
            <form onSubmit={loginHandler}>
              <div className="form-group">
                <label className=" fw-bold" htmlFor="userId">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="userId"
                  placeholder="Enter Email Id"
                  ref={userIdRef}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label className=" fw-bold" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                  ref={passwordref}
                />
              </div>
              <div className="text-center ">
                <label className="" htmlFor="exampleCheck1">
                  Don't have an account?
                  <a
                    href="/"
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                    onClick={registerPageHandler}
                  >
                    Register
                  </a>
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ background: "#000080" }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginModal;
