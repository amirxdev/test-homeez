import React, { useState } from "react";
import QuotationDataService from "../services/QuotationService";

const AddQuotation = () => {
  const initialQuotationState = {
    q_id: null,
    quotation_info: "",
    quotation_valid: false
  };
  const [quotation, setQuotation] = useState(initialQuotationState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setQuotation({ ...quotation, [name]: value });
  };

  const saveQuotation = () => {
    var data = {
      quotation_info: quotation.quotation_info
    };

    QuotationDataService.create(data)
      .then(response => {
        setQuotation({
          title: response.data.title
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newQuotation = () => {
    setQuotation(initialQuotationState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newQuotation}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="quotation">Quotation</label>
            <input
              type="text"
              className="form-control"
              id="quotation_info"
              required
              value={quotation.quotation_info}
              onChange={handleInputChange}
              name="quotation"
            />
          </div>

          <button onClick={saveQuotation} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddQuotation;