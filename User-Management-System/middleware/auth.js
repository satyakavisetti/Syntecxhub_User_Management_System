const basicAuth = require("basic-auth");

module.exports = (req, res, next) => {
  const user = basicAuth(req);

  if (!user || user.name !== "admin" || user.pass !== "1234") {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  next();
};