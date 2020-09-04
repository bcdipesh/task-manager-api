const ErrorResponse = require("../utils/ErrorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  if (process.env.NODE_ENV === "development") {
    console.log(err);
  }

  res.status(error.statusCode || 500).json({
    response: error.message || "Server Error",
  });
};

module.exports = errorHandler;
