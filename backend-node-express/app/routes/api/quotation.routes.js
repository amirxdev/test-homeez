module.exports = app => {
    const quotations = require("../../controllers/api/quotation.ctrl.js");
  
    var router = require("express").Router();
  
    // Create a new Quotation
    router.post("/", quotations.create);
  
    // Retrieve all Quotations
    router.get("/", quotations.findAll);
  
    // Retrieve all valid Quotations
    router.get("/valid", quotations.findAllValid);
  
    // Retrieve a single Quotation with id
    router.get("/:id", quotations.findOne);
  
    // Update a Quotation with id
    router.put("/:id", quotations.update);
  
    // Delete a Quotation with id
    router.delete("/:id", quotations.delete);
  
    // Create a new y
    router.delete("/", quotations.deleteAll);
  
    app.use('/api/quotations', router);
  };