import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import classes from "./ViewClaim.module.css";
//import {BrowserRouter as Router, Route,Link} from "react-router-dom"
const ViewClaim2 = (props) => {
  return (
    <React.Fragment>
      <div className={classes.modal}>
        <h3 className={classes.header}>Claim Details</h3>
        <div className={classes.content}>
          <div className="card bg-light mb-2">
            <div className="card-body">
              <h5 className="card-title text-center">{props.title}</h5>

              <table className="table">
                <tbody>
                  <tr>
                    <td>Full Name</td>
                    <td>{props.result.fullName}</td>
                  </tr>
                  <tr>
                    <td>Insurance</td>
                    <td>{props.result.insuranceName}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewClaim2;
