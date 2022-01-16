import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import InsuranceList from "./InsuranceList";
import { render } from "@testing-library/react";
import ViewClaim from "./ViewClaim";
function viewClaimHandler(event) {
  event.preventDefault();
  render(<ViewClaim />);
}
const HomePage = (props) => {
  const [gotData, setdata] = useState([]);
  const [title, setTitle] = useState("");

  function fetchCarDataHandler() {
    fetch("http://localhost:8001/getCarInsurance")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformData = data.map((backData) => {
          return {
            carInsuId: backData.carInsuId,
            title: backData.title,
            insurancePeriod: backData.insurancePeriod,
            price: backData.price,
            idv: backData.idv,
            benifits: backData.benifits,
          };
        });
        setdata(transformData);
      });
  }

  function fetchBikeDataHandler() {
    fetch("http://localhost:8001/getBikeInsurance")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformData = data.map((backData) => {
          return {
            id: backData.carInsuId,
            title: backData.title,
            insurancePeriod: backData.insurancePeriod,
            price: backData.price,
            idv: backData.idv,
            benifits: backData.benifits,
          };
        });
        setdata(transformData);
      });
  }

  function nameBikeChangeHandler() {
    setTitle("Bike Insurance");
  }

  function nameCarChangeHandler() {
    setTitle("Car Insurance");
  }

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg "
        style={{ background: "#000080", borderRadius: "5px" }}
      >
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <b style={{ color: "white" }}>Insurance Claim Management</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex float-right"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: "white" }}
                  onClick={viewClaimHandler}
                >
                  View Claim
                </a>
              </li>
            </ul>
            <div className="navbar-right">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: "white" }}
              >
                Login as Admin
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="row">
        <div className="col-sm-6 mt-5">
          <div className="card" style={{ borderColor: "#000080" }}>
            <div className="card-body text-center">
              <h5 className="card-title text-center">Car Insurance</h5>
              <p className="card-text text-center">
                Car insurance is a contract between a car owner and a general
                insurance company wherein the latter promises to protect the car
                owner from financial losses which may occur due to an
                unfortunate event involving his/her car.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  fetchCarDataHandler();
                  nameCarChangeHandler();
                }}
                style={{ background: "#000080" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <div className="card" style={{ borderColor: "#000080" }}>
            <div className="card-body text-center">
              <h5 className="card-title text-center">Bike Insurance</h5>
              <p className="card-text text-center">
                Bike insurance is a contract between a bike owner and a general
                insurance company wherein the latter promises to protect the car
                owner from financial losses which may occur due to an
                unfortunate event involving his/her bike.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  fetchBikeDataHandler();
                  nameBikeChangeHandler();
                }}
                style={{ background: "#000080" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <div className="card" style={{ borderColor: "#000080" }}>
            <div className="card-body text-center">
              <h5 className="card-title text-center">Health Insurance</h5>
              <p className="card-text text-center">
                Health insurance or medical insurance is an agreement wherein an
                insurance company agrees to compensate the insured for the
                medical and surgical expenses incurred during the policy tenure.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  fetchCarDataHandler();
                  nameCarChangeHandler();
                }}
                style={{ background: "#000080" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <div className="card" style={{ borderColor: "#000080" }}>
            <div className="card-body text-center ">
              <h5 className="card-title text-center">Term Insurance</h5>
              <p className="card-text text-center">
                A term insurance plan is a type of life insurance plan that
                provides compensation to the beneficiary for the unfortunate
                loss of the life assured during or after the death the policy
                tenure.
              </p>
              <button
                className="btn btn-primary justify-content-center"
                onClick={() => {
                  fetchBikeDataHandler();
                  nameBikeChangeHandler();
                }}
                style={{ background: "#000080" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <InsuranceList movies={gotData} title={title} />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
