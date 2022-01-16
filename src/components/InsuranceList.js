import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Insurance from "./Insurance";

const InsuranceList = (props) => {
  return (
    <div>
      <div className="row">
        <h2 className="mb-3 text-center">{props.title}</h2>
        {props.movies.map((movie) => (
          <div className="col-sm-6">
            <Insurance
              key={movie.carInsuId}
              title={movie.title}
              insurancePeriod={movie.insurancePeriod}
              price={movie.price}
              idv={movie.idv}
              benifits={movie.benifits}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceList;
