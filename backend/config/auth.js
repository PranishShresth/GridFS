const e = require("express");
const jwt = require("jsonwebtoken");
const { jwt_token } = require("./keys");

//github

//HEADER - AUTHORIZATION: "Bearer token"

const auth = (req, res, next) => {
  const headers = req.headers.authorization;
  if (headers) {
    const token = headers.split(" ")[1];
    if (token === undefined) {
      return res.status(401).json({ msg: "No token provided" });
    }

    //verifying jwt token
    jwt.verify(token, jwt_token, function (err, user) {
      if (!err) {
        //setting the req.user to id of the user
        req.user = user._id;
        next();
      }
      return res.status(400).json({ msg: "Token not valid" });
    });
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
};

module.exports = auth;
