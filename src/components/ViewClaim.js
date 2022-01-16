import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./ViewClaim.module.css";
import { render } from "@testing-library/react";
import ViewClaim2 from "./ViewClaim2";

const ViewClaim = (props) => {
  //const [gotData, setData] = useState([]);
  const userIdRef = useRef("");

  async function loginHandler(event) {
    event.preventDefault();
    //for sending data same as backend
    const bodyData = {
      userId: userIdRef.current.value,
    };
    //for fetching data with the help of body
    const response = await fetch("http://localhost:8001/getInsuranceDetails", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    render(<ViewClaim2 result={data} />);
  }

  return (
    <React.Fragment>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <h3 className={classes.header}>View Claim</h3>
          <div className={classes.content}>
            <form onSubmit={loginHandler}>
              <div className="form-group">
                <label className=" mb-1 fw-bold" htmlFor="userId">
                  User Id
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="userId"
                  placeholder="Enter User Id"
                  ref={userIdRef}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
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
    </React.Fragment>
  );
};

export default ViewClaim;
