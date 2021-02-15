const User = require("../models/User.model");
const { userSchema } = require("../config/validation");
const bcrypt = require("bcrypt");
const { jwt_token } = require("./../config/keys");
const jwt = require("jsonwebtoken");
module.exports = {
  register: async (req, res) => {
    try {
      const result = await userSchema.validateAsync(req.body);
      const doesEmailExist = await User.findOne({ email: result.email });
      if (doesEmailExist) {
        return res.status(400).json({ msg: "User already exists" });
      }
      const user = await User.create(result);
      user.save();
      res.status(201).json({ msg: "User successfully created" });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).exec();
      if (user) {
        const comparePassword = await bcrypt.compare(password, user.password);
        if (comparePassword) {
          const payload = {
            username: user.username,
            _id: user._id,
            email: user.email,
          };
          const token = jwt.sign(payload, jwt_token, { expiresIn: "2h" });
          return res.status(200).json({ user: payload, token });
        }
        return res.status(400).json({ msg: "Incorrect Password" });
      }
      return res.status(400).json({ msg: "Such email doesn't exist" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
