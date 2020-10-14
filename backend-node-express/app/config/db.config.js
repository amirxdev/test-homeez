module.exports = {
    HOST: "test-homeez-instance.capiuvbuxkw9.ap-southeast-1.rds.amazonaws.com",
    USER: "homeezmaster",
    PASSWORD: "homeez1234",
    DB: "test_homeez_db",
    dialect: "postgres",
    pool: {
      max: 15,
      min: 0,
      acquire: 30000,
      idle: 15000
    }
  };