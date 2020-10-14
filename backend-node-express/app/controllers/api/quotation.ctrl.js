const db = require("../../models");
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
            message: err.message || "Some error occurred while creating the Quotation."
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

// Find a single Quotation with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Quotation.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Quotation with id=" + id
        });
    });
};

// Update a Quotation by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Quotation.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Quotation was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Quotation with id=${id}. Maybe Quotation was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Quotation with id=" + id
        });
    });
};

// Delete a Quotation with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Quotation.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Quotation was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Quotation with id=${id}. Maybe Quotation was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Quotation with id=" + id
        });
    });
};

// Delete all Quotation from the database.
exports.deleteAll = (req, res) => {
    Quotation.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Quotations were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all quotations."
        });
    });
};

// Find all valid Quotation
exports.findAllValid = (req, res) => {
    Quotation.findAll({ where: { quotation_valid: true } })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving quotations."
        });
    });
};