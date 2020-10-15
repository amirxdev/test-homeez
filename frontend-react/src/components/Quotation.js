import React, { useState, useEffect } from "react";
import QuotationDataService from "../services/QuotationService";

const Quotation = props => {
    const initialQuotationState = {
    q_id: null,
    quotation_info: "",
    quotation_valid: false
    };
  const [currentQuotation, setCurrentQuotation] = useState(initialQuotationState);
  const [message, setMessage] = useState("");

  const getQuotation = id => {
    QuotationDataService.get(id)
      .then(response => {
        setCurrentQuotation(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getQuotation(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentQuotation({ ...currentQuotation, [name]: value });
  };

  const updateValid = status => {
    var data = {
      q_id: currentQuotation.q_id,
      quotation_info: currentQuotation.quotation_info,
      quotation_valid: status
    };

    QuotationDataService.update(currentQuotation.id, data)
      .then(response => {
        setCurrentQuotation({ ...currentQuotation, quotation_valid: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateQuotation = () => {
    QuotationDataService.update(currentQuotation.id, currentQuotation)
      .then(response => {
        console.log(response.data);
        setMessage("The quotation was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteQuotation = () => {
    QuotationDataService.remove(currentQuotation.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/quotations");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentQuotation ? (
        <div className="edit-form">
          <h4>Quotation</h4>
          <form>
            <div className="form-group">
              <label htmlFor="quotation">Quotation</label>
              <input
                type="text"
                className="form-control"
                id="quotation"
                name="quotation"
                value={currentQuotation.quotation_info}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Valid:</strong>
              </label>
              {currentQuotation.quotation_valid ? "Valid" : "Non Valid"}
            </div>
          </form>

          {currentQuotation.quotation_valid ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateValid(false)}
            >
              Non Valid
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateValid(true)}
            >
              Valid
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteQuotation}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateQuotation}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Quotation...</p>
        </div>
      )}
    </div>
  );
};

export default Quotation;