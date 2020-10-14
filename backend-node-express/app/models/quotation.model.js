module.exports = (sequelize, Sequelize) => {
    const Quotation = sequelize.define("quotation", {
      quotation_info: {
        type: Sequelize.STRING
      },
      quotation_valid: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
          type: Sequelize.STRING
      },
      updated_at: {
        type: Sequelize.STRING
      },
    });
  
    return Quotation;
  };