import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddQuotation from "./components/AddQuotation";
import Quotation from "./components/Quotation";
import QuotationsList from "./components/QuotationsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/quotations" className="navbar-brand">
          Test Homeez
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/quotations"} className="nav-link">
              Quotation
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/quotations"]} component={QuotationsList} />
          <Route exact path="/add" component={AddQuotation} />
          <Route path="/quotations/:id" component={Quotation} />
        </Switch>
      </div>
    </div>
  );
}

export default App;