import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LoginModal from "./LoginModal";
//import {BrowserRouter as Router, Route,Link} from "react-router-dom"
const Insurance = (props) => {
  const [click, setClick] = useState(false);

  function loginHandler(event) {
    event.preventDefault();
    setClick(true);
  }

  return (
    <React.Fragment>
      {click && <LoginModal />}
      <form onSubmit={loginHandler}>
        <div className="card bg-light mb-2">
          <div className="card-body">
            <h5 className="card-title text-center">{props.title}</h5>

            <table className="table">
              <tbody>
                <tr>
                  <td>Period</td>
                  <td>{props.insurancePeriod}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{props.price}</td>
                </tr>
                <tr>
                  <td>IDV</td>
                  <td>{props.idv}</td>
                </tr>
                <tr>
                  <td>Benifits</td>
                  <td>{props.benifits}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ background: "#000080" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Insurance;
