import React, { useState, useEffect } from "react";
import QuotationDataService from "../services/QuotationService";
import { Link } from "react-router-dom";

const QuotationsList = () => {
  const [quotations, setQuotations] = useState([]);
  const [currentQuotation, setCurrentQuotation] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchInfo, setSearchInfo] = useState("");

  useEffect(() => {
    retrieveQuotations();
  }, []);

  const onChangeSearchInfo = e => {
    const searchInfo = e.target.value;
    setSearchInfo(searchInfo);
  };

  const retrieveQuotations = () => {
    QuotationDataService.getAll()
      .then(response => {
        setQuotations(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveQuotations();
    setCurrentQuotation(null);
    setCurrentIndex(-1);
  };

  const setActiveQuotation = (quotation, index) => {
    setCurrentQuotation(quotation);
    setCurrentIndex(index);
  };

  const removeAllQuotations = () => {
    QuotationDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByInfo = () => {
    QuotationDataService.findByInfo(searchInfo)
      .then(response => {
        setQuotations(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by info"
            value={searchInfo}
            onChange={onChangeSearchInfo}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByInfo}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Quotations List</h4>

        <ul className="list-group">
          {quotations &&
            quotations.map((quotation, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveQuotation(quotation, index)}
                key={index}
              >
                {quotation.quotation_info}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllQuotations}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentQuotation ? (
          <div>
            <h4>Quotation</h4>
            <div>
              <label>
                <strong>Info:</strong>
              </label>{" "}
              {currentQuotation.quotation_info}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentQuotation.quotation_valid ? "Valid" : "Non Valid"}
            </div>

            <Link
              to={"/quotations/" + currentQuotation.q_id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Quotation...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotationsList;