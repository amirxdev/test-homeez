module.exports = app => {
    const quotations = require("../controllers/api/quotation.ctrl.js");
  
    var router = require("express").Router();
  
    // Create a new Quotation
    router.post("/", quotations.create);
  
    // Retrieve all Quotations
    router.get("/", quotations.findAll);
  
    app.use('/api/quotations', router);
  };