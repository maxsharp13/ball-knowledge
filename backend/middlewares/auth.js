const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({
        message: "Authorization required",
      });
    }

    const token = authorization.replace("Bearer ", "");

    const payload = jwt.verify(
      token,
      "super-secret-key"
    );

    req.user = payload;

    next();
  } catch (err) {
    return res.status(401).send({
      message: "Invalid token",
    });
  }
};