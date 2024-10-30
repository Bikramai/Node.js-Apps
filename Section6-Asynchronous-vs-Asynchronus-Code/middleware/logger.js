function log(req, res, nest) {
  // Custom Middleware function
  console.log("Logging....");
  next();
}

module.exports = log;
