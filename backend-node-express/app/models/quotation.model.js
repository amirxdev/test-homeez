const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Quotation = sequelize.define("quotation", {
      q_id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      quotation_info: {
        type: Sequelize.STRING
      },
      quotation_valid: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
      },
    }, {
        tableName: 'quotation',
        timestamps: false,
        // Using `unique: true` in an attribute above is exactly the same as creating the index in the model's options:
        indexes: [{ unique: true, fields: ['q_id'] }]
    });
  
    return Quotation;
  };