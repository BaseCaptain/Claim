import React, { useRef } from "react";
import classes from "./UserDetails.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const UserDetails = (props) => {
  // const [click, setClick] = useState(true);
  const userIdRef = useRef("");
  const fullNameRef = useRef("");
  const addressRef = useRef("");
  const mobileref = useRef("");
  const emailRef = useRef("");
  const insuranceNameRef = useRef("");

  function clickHandler() {
    alert("Your Details Have been saved Succesfully!");
    //setClick(false);
  }

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const model = {
      userId: userIdRef.current.value,
      fullName: fullNameRef.current.value,
      address: addressRef.current.value, //he nav same rahale pahije model class sarkhe
      mobileNo: mobileref.current.value,
      email: emailRef.current.value,
      insuranceName: insuranceNameRef.current.value,
    };

    fetch("http://localhost:8001/addInsuranceDetails", {
      method: "POST",
      body: JSON.stringify(model),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <React.Fragment>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <h3 className={classes.header}>Enter Details to Buy</h3>
          <div className={classes.content}>
            <form onSubmit={submitHandler}>
              <div className={classes.control}>
                <label htmlFor="userId">UserId</label>
                <input type="number" id="userId" ref={userIdRef} />
              </div>
              <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={fullNameRef} />
              </div>
              <div className={classes.control}>
                <label htmlFor="name">Address</label>
                <input type="text" id="name" ref={addressRef} />
              </div>

              <div className={classes.control}>
                <label htmlFor="mobile">MobileNo</label>
                <input type="number" id="mobile" ref={mobileref} />
              </div>
              <div className={classes.control}>
                <label htmlFor="email">Email-Id</label>
                <input type="email" id="email" ref={emailRef} />
              </div>
              <div className={classes.control}>
                <label htmlFor="email">Select Insurance</label>
              </div>
              <select
                class="form-select form-select-sm"
                size="1"
                aria-label=".form-select-sm example"
                ref={insuranceNameRef}
                style={{
                  borderRadius: "12px",
                  borderColor: "#ccc",
                }}
              >
                <option selected>Select Bike Insurance From Below</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Three</option>
                <option value="5">Three</option>
                <option value="6">Three</option>
                <option value="7">Select Car Insurance From Below</option>
                <option value="8">Three</option>
                <option value="9">Three</option>
                <option value="10">Three</option>
                <option value="11">Three</option>
                <option value="12">Three</option>
                <option value="13">Three</option>
              </select>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ background: "#000080" }}
                  onClick={clickHandler}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      )
    </React.Fragment>
  );
};

export default UserDetails;
