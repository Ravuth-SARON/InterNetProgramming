const Jwt = require("jsonwebtoken");

const currentUser = (req, res, next) => {
  if (!req.session.jwt) throw "You must sign In~";

  const user = Jwt.verify(req.session.jwt, "jwt-secret");
  req.currentUser = user;
  next();
};

const ensureSignedIn = (req, res, next) => {
  if (!req.session.jwt) {
    return res.json({
      success: false,
      error: `You must sign In~`,
    });
  }
  console.log(req.session.jwt);
  next();
};

const ensureSignedOut = (req, res, next) => {
  if (req.session.jwt) {
    res.json({
      sucess: false,
      error: "You already sign in",
    });
  }
  next();
};

module.exports = {
  ensureSignedIn,
  ensureSignedOut,
  currentUser,
};
