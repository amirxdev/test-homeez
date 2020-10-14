const db = require("../models");
const Quotation = db.quotations;
const Op = db.Sequelize.Op;

// Create and Save a new Quotation
exports.create = (req, res) => {
  // Validate request
  if (!req.body.quotation_info) {
    res.status(400).send({
      message: "Info can not be empty!"
    });
    return;
  }

  // Create a Quotation
  const quotation = {
    quotation_info: req.body.quotation_info,
  };

  // Save quotation in the database
  Quotation.create(quotation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Quotation."
      });
    });
};

// Retrieve all Quotation from the database.
exports.findAll = (req, res) => {
    const quotation_info = req.query.quotation_info;
    var condition = quotation_info ? { v: { [Op.iLike]: `%${quotation_info}%` } } : null;
  
    Quotation.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving quotations."
        });
    });
};
